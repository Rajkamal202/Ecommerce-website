
import { assets } from '../assets/assets';
import Newsletter from '../components/Newsletter';

import Title from "../components/Title";

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="text-3xl font-semibold text-center pt-8 border-b border-gray-300">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 px-4">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            Welcome to our world of fashion where elegance meets sustainability. Founded with a passion for empowering individuals, our brand has evolved into a symbol of modern aesthetics and high-quality craftsmanship. We believe that every piece of clothing tells a story, and we are here to help you express yours.
          </p>
          <p>
            Our journey began with a simple mission: to create stylish and sustainable fashion that doesn’t compromise on quality or ethics. Each collection reflects our commitment to using eco-friendly materials and responsible manufacturing processes. We take pride in offering you not just clothes, but a way to make a positive impact on the planet.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to revolutionize the fashion industry by prioritizing sustainability and ethical practices. We aim to inspire our customers to embrace their individuality through our carefully curated selections. Our goal is to create a welcoming shopping experience that feels like a community, where everyone is encouraged to express their unique style with confidence.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4 text-center">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 px-4">
        <div className="border border-gray-300 rounded-lg px-8 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-md">
          <b className="text-lg">Quality Assurance:</b>
          <p className="text-gray-600">
            Our robust quality assurance system guarantees that every garment is crafted to perfection. Each piece is meticulously inspected at various stages of production to ensure it meets our high standards.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg px-8 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-md my-6 md:my-0">
          <b className="text-lg">Convenience:</b>
          <p className="text-gray-600">
            We understand that your time is valuable. Our online shopping platform is designed for your convenience, providing a seamless experience from browsing to checkout. Enjoy hassle-free returns and fast shipping options.
          </p>
        </div>
        <div className="border border-gray-300 rounded-lg px-8 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white shadow-md">
          <b className="text-lg">Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated customer service team is here to assist you every step of the way. Whether you have questions about our products or need help with your order, we’re committed to providing you with an exceptional shopping experience.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
