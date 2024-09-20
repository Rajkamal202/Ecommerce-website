const Newsletter = () => {
  // Handler for form submission
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Implement your subscription logic here (e.g., API call)
    // For example: send the email to your backend or email marketing service
  };

  return (
    // Container for the Newsletter section with centered content and padding
    <div className="flex flex-col items-center justify-center bg-red-100 rounded-xl shadow-sm py-12 px-6 sm:px-12 lg:px-16">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
        Subscribe now & get 30% off
      </h2>
      
      {/* Subheading */}
      <p className="mt-4 text-center text-gray-600 max-w-lg">
        Stay ahead of the trends! Subscribe to receive the latest updates, exclusive offers, and insider tips straight to your inbox.
      </p>
      
      {/* Subscription Form */}
      <form onSubmit={onSubmitHandler} className="mt-8 w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
        
        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition-shadow duration-300"
          aria-label="Email Address"
        />
        
        {/* Subscribe Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-pink-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >
          SUBSCRIBE
        </button>
      </form>
      
      {/* Optional Success Message (Uncomment if implementing success feedback) */}
      {/* <p className="mt-4 text-green-500">Thank you for subscribing!</p> */}
      
    </div>
  );
};

export default Newsletter;

