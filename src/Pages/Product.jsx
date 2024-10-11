import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets"; // Import assets such as icons and images
import { ShopContext } from "../Context/ShopContext"; // Import Shop context to use global state
import RelatedProducts from "../components/ReletedProducts"; // Import the RelatedProducts component

const Product = () => {
  // Extract productId from URL parameters using useParams
  const { productId } = useParams();

  // Destructure necessary state and actions from ShopContext
  const { products, currency, addToCart } = useContext(ShopContext);

  // Local state for managing product-related data
  const [productData, setProductData] = useState(null); // Current product details
  
  const [image, setImage] = useState(""); // Currently selected product image
  const [size, setSize] = useState(""); // Currently selected product size
  const [reviews, setReviews] = useState([]); // List of reviews for the product
  const [reviewInput, setReviewInput] = useState(""); // Input for new review text
  const [editingReview, setEditingReview] = useState(null); // Index of the review being edited
  const [selectedImage, setSelectedImage] = useState(null); // Selected image for new review
  const [rating, setRating] = useState(0); // Selected rating for new review
  const [questionInput, setQuestionInput] = useState(""); // Input for new question
  const [likes, setLikes] = useState([]); // Array to track likes count for each review
  const [dislikes, setDislikes] = useState([]); // Array to track dislikes count for each review
  const [questions, setQuestions] = useState([]); // Array to store questions for each review

  /// Effect hook to fetch product data when the component mounts or products change
useEffect(() => {
  const fetchProductData = async () => {
    // Find the product from the products list using the productId
    const product = products.find((product) => product._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setReviews(product.reviews || []); // Provide an empty array if reviews is undefined
      
      const reviewCount = (product.reviews || []).length; // Safely determine the length
      setLikes(Array(reviewCount).fill(0)); // Initialize likes count
      setDislikes(Array(reviewCount).fill(0)); // Initialize dislikes count
      setQuestions(Array(reviewCount).fill([])); // Initialize questions
    }
  };

  fetchProductData();
}, [products, productId]); // Only re-run the effect if products or productId changes



// till this part of code is responsible for my code error so if i identifiy this code error then its automatically solve 90 percent of my problem
// so i need to work above here 
  // Handle adding a new review or updating an existing review
  const handleAddReview = () => {
    // Validate that the review input and rating are not empty
    if (reviewInput.trim() === "" || rating === 0) {
      alert("Review and rating cannot be empty!");
      return;
    }

    // Create a new review object
    const newReview = {
      text: reviewInput,
      image: selectedImage,
      rating,
    };

    // Check if editing an existing review
    if (editingReview !== null) {
      const updatedReviews = reviews.map((review, index) =>
        index === editingReview ? newReview : review
      );
      setReviews(updatedReviews); // Update the reviews with the edited review
      setEditingReview(null); // Reset the editing state
    } else {
      setReviews([...reviews, newReview]); // Add the new review to the reviews list
      setLikes([...likes, 0]); // Initialize likes count for the new review
      setDislikes([...dislikes, 0]); // Initialize dislikes count for the new review
      setQuestions([...questions, []]); // Initialize questions for the new review
    }

    // Reset the input fields after adding/updating a review
    setReviewInput("");
    setSelectedImage(null);
    setRating(0);
  };

  // Handle editing a review
  const handleEditReview = (index) => {
    const review = reviews[index]; // Get the review to be edited
    setEditingReview(index); // Set the current review index to editing state
    setReviewInput(review.text); // Populate the review input with the existing review text
    setSelectedImage(review.image); // Populate the image input with the existing review image
    setRating(review.rating); // Set the rating to the existing review rating
  };

  // Handle deleting a review
  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index); // Remove the selected review
    setReviews(updatedReviews); // Update the reviews list
    setLikes(likes.filter((_, i) => i !== index)); // Update the likes list
    setDislikes(dislikes.filter((_, i) => i !== index)); // Update the dislikes list
    setQuestions(questions.filter((_, i) => i !== index)); // Update the questions list
  };

  // Handle image change for the review
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0])); // Set the selected image
    }
  };

  // Handle liking a review
  const handleLikeReview = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1; // Increment the like count for the review
    setLikes(updatedLikes);
  };

  // Handle disliking a review
  const handleDislikeReview = (index) => {
    const updatedDislikes = [...dislikes];
    updatedDislikes[index] += 1; // Increment the dislike count for the review
    setDislikes(updatedDislikes);
  };

  // Handle adding a question to a review
  const handleAddQuestion = (index) => {
    if (questionInput.trim() === "") {
      alert("Question cannot be empty!");
      return;
    }

    const updatedQuestions = [...questions];
    updatedQuestions[index] = [...updatedQuestions[index], questionInput]; // Add the question to the review
    setQuestions(updatedQuestions);
    setQuestionInput(""); // Reset the question input
  };

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Section */}
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-12">
        {/* Product Image Gallery */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex w-full overflow-x-auto justify-between sm:flex-col sm:justify-start sm:w-[18.7%] sm:overflow-y-scroll">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)} // Change main image when thumbnail is clicked
                src={item}
                key={index}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${item === image ? "border-2 border-pink-500" : ""}`}
                alt={`Product image ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto rounded-lg shadow-lg" alt="Selected product" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mt-2">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            {/* Display star ratings */}
            {[...Array(4)].map((_, i) => (
              <img key={i} className="w-4 h-4" src={assets.star_icon} alt="Star rating" />
            ))}
            <img className="w-4 h-4" src={assets.star_dull_icon} alt="Star rating" />
            <p className="pl-2 text-gray-700">({reviews.length})</p>
          </div>
          <p className="mt-5 text-4xl font-semibold text-pink-600">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-700 leading-relaxed">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-lg font-medium">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)} // Set the selected size
                  className={`border py-2 px-4 rounded-lg transition-all duration-300 ease-in-out ${item === size ? "border-orange-500 bg-pink-100" : "bg-gray-100"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(productData._id, size)} // Function to add the product to the cart
            className="bg-pink-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:bg-pink-700 active:bg-pink-800 transition-all duration-300"
          >
            ADD TO CART
          </button>

          {/* Product Info Section */}
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>✔️ 100% Authentic Product.</p>
            <p>💳 Cash on delivery is available on this product.</p>
            <p>🔄 Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Product Description and Reviews Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border-b-2 border-pink-600 px-5 py-3 text-lg">Description</b>
          <p className="border-b px-5 py-3 text-lg text-gray-500">Reviews ({reviews.length})</p>
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-4 border-b px-6 py-6 text-gray-700 text-sm leading-relaxed">
          <p>
            Discover the perfect blend of style and comfort with our exclusive collection. Whether you’re looking for everyday wear or something special for an occasion, our range offers something for everyone. From contemporary designs to timeless classics, find your perfect match today!
          </p>
          <p>
            Our products are crafted with the highest quality materials, ensuring durability and a premium feel. Plus, enjoy hassle-free returns and exchanges within 7 days, so you can shop with confidence.
          </p>
        </div>
             {/* Related Products Component */}
          <RelatedProducts
                category={productData.category}
                subCategory={productData.subCategory}
            />
        
        <div className=" opacity-0"></div>
      </div>

      {/* User Reviews Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold">User Reviews</h2>
        <div className="mt-4">
          {/* Review Input Form */}
          <textarea
            value={reviewInput} // Bind review input to state
            onChange={(e) => setReviewInput(e.target.value)} // Update state on input change
            placeholder="Write your review here..."
            className="w-full border rounded-lg p-4 mb-4"
          />

          {/* Rating Input */}
          <div className="flex items-center mb-4">
            <p className="mr-4">Your Rating:</p>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= rating ? assets.star_icon : assets.star_dull_icon} // Conditional star display based on rating
                alt={`${star} Star`}
                className="w-6 h-6 cursor-pointer"
                onClick={() => setRating(star)} // Set rating on star click 
              />
            ))}
          </div>

          {/* Image Upload for Review */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange} // Handle image file selection 
            className="mb-4"
          />

          {/* Add Review Button */}
          <button
            onClick={handleAddReview} // Function to add or edit review
            className="bg-pink-600 text-white px-4 py-2 rounded-lg"
          >
            {editingReview !== null ? "Update Review" : "Add Review"}
          </button>
        </div>

        {/* Display Reviews */}
        {reviews.map((review, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={i < review.rating ? assets.star_icon : assets.star_dull_icon} // Display filled or empty stars
                    alt="Star"
                    className="w-4 h-4"
                  />
                ))}
              </div>
              <button onClick={() => handleEditReview(index)} className="text-blue-500 mr-4">Edit</button>
              <button onClick={() => handleDeleteReview(index)} className="text-red-500">Delete</button>
            </div>

            <p>{review.text}</p>

            {/* Display Review Image if Exists */}
            {review.image && (
              <img src={review.image} alt="Review" className="w-20 h-20 object-cover mt-2" />
            )}

            {/* Like and Dislike Buttons */}
            <div className="flex items-center mt-2">
              <button onClick={() => handleLikeReview(index)} className="mr-4 text-green-500">👍 {likes[index]}</button>
              <button onClick={() => handleDislikeReview(index)} className="text-red-500">👎 {dislikes[index]}</button>
            </div>

            {/* Question Input and Display */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Ask a question..."
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                className="border p-2 rounded w-full"
              />
              <button
                onClick={() => handleAddQuestion(index)} // Function to add a question to the review
                className="bg-pink-600 text-white px-4 py-2 rounded mt-2"
              >
                Add Question
              </button>

              {/* Display Questions for this Review */}
              {questions[index] && questions[index].map((question, qIndex) => (
                <div key={qIndex} className="mt-2 text-sm text-gray-600">
                  Q: {question}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

 
    </div>
  ) : (
    // Loading State or Fallback UI
    <div className="text-center py-20">
      <p>Loading product details...</p>
    </div>
  );
};

export default Product;

