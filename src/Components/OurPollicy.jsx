import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      {[
        {
          icon: assets.exchange_icon,
          title: "Easy Exchange Policy",
          description: "We offer hassle-free exchange policy",
        },
        {
          icon: assets.quality_icon,
          title: "7 Days Replacement Policy",
          description: "We provide 7 days free return policy",
        },
        {
          icon: assets.support_img,
          title: "Best Customer Support",
          description: "We provide 24/7 customer support",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group w-full sm:w-auto sm:flex-1 p-6 bg-white rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <img
            src={item.icon}
            className="w-14 m-auto mb-5 transition-transform duration-300 transform group-hover:rotate-12"
            alt={item.title}
          />
          <p className="font-semibold text-lg text-gray-800 group-hover:text-[#E91E63] transition-colors duration-300">
            {item.title}
          </p>
          <p className="text-gray-500 mt-2">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;
