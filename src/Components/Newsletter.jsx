import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Implement your subscription logic here (e.g., API call)
    // For this example, we'll just simulate a successful submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative m-10 overflow-hidden bg-gradient-to-br from-pink-100 to-red-50 rounded-2xl shadow-lg py-16 px-6 sm:px-12 lg:px-16"
    >
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center leading-tight"
        >
          Subscribe now & get
          <span className="text-pink-600"> 30% off</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-center text-gray-600 text-lg max-w-2xl"
        >
          Stay ahead of the trends! Subscribe to receive the latest updates, exclusive offers, and insider tips straight to your inbox.
        </motion.p>
        
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          onSubmit={onSubmitHandler}
          className="mt-10 w-full max-w-md"
        >
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 pr-36 text-gray-800 placeholder-gray-400"
              aria-label="Email Address"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-pink-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : (
                <Send className="w-5 h-5 mr-2" />
              )}
              {isSubmitted ? 'Subscribed!' : 'Subscribe'}
            </motion.button>
          </div>
        </motion.form>
        
        {isSubmitted && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 text-green-600 font-semibold"
          >
            Thank you for subscribing! Check your inbox for a confirmation.
          </motion.p>
        )}
      </div>
    </motion.div>
   
  );
  
};

export default Newsletter;


