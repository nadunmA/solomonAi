import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsTelegram,
} from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  const socialLinks = [
    {
      name: "Facebook",
      icon: BsFacebook,
      url: "#",
      color: "hover:text-blue-500",
    },
    {
      name: "TikTok",
      icon: AiFillTikTok,
      url: "#",
      color: "hover:text-black",
    },
    {
      name: "Instagram",
      icon: BsInstagram,
      url: "#",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Telegram",
      icon: BsTelegram,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: BsGithub,
      url: "#",
      color: "hover:text-gray-400",
    },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About", action: () => navigate("/about") },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Prompts
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Transform your ideas into stunning visuals with our curated
              collection of AI prompts. Create professional-quality images
              effortlessly.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>for creators</span>
            </div>
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.button
                    onClick={link.action}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm block w-full text-left"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm block"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 text-white">Follow Us</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest AI prompts and creative inspiration.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center justify-center w-12 h-12 
                      bg-white/5 hover:bg-white/10 
                      border border-white/10 hover:border-white/20
                      rounded-xl transition-all duration-300 
                      text-gray-400 ${social.color}
                      group
                    `}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                    }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <IconComponent className="text-xl group-hover:scale-110 transition-transform duration-200" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Stay Creative</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest AI prompts and tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-500 text-sm"
              />
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-lg text-sm transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-gray-400">
            © 2025 Solomon Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>Built with modern web technologies</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Status: All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
