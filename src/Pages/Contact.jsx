import { useState } from 'react';
import { assets } from '../assets/assets';
import Title from "../components/Title";
import { MapPin, Phone, Mail, Briefcase } from "lucide-react";
import Newsletter from '../components/Newsletter';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert("Message sent! We'll get back to you as soon as possible.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title text1={'CONTACT '} text2={'US'} />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <img
              className="w-full rounded-lg shadow-xl"
              src={assets.contact_img}
              alt="Our Store"
            />
            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <h3 className="font-semibold text-2xl text-gray-800">Our Store</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <p className="text-gray-600">
                    Mumbai, 410206<br />Maharashtra, India
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <p className="text-gray-600">123 456 789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <a href="mailto:contactus@everywhere.com" className="text-blue-600 hover:underline">
                    contactus@everywhere.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <h3 className="font-semibold text-2xl text-gray-800">Careers at Everywhere</h3>
              <p className="text-gray-600">Join our team and be part of something extraordinary. Explore our current openings and find your perfect fit.</p>
              <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center">
                <Briefcase className="w-4 h-4 mr-2" />
                Explore Job Openings
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-semibold text-2xl text-gray-800 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Newsletter/>
    </div>
    
  );
 
};

export default Contact;