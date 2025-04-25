import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with our team for any inquiries about our services or to schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#ffd700]"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#ffd700]"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#ffd700]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-[#ffd700] text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-[#ffd900] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#ffd700] mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">contact@labbolt.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#ffd700] mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#ffd700] mt-1" />
              <div className="ml-4">
                <h3 className="text-white font-medium">Address</h3>
                <p className="text-gray-400">
                  123 Innovation Drive<br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;