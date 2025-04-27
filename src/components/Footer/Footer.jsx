import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are passionate about sharing insights and stories to inspire our readers. Join us as we explore topics on mindfulness, productivity, health, and career advice.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About</a></li>
              <li><a href="/blog" className="hover:text-yellow-500">Blog</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter and stay updated with the latest posts and tips.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md text-black mb-4"
            />
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </div>

          {/* Social Media Links Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-500">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-500">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mood Tale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
