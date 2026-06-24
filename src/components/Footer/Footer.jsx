/* eslint-disable no-unused-vars */
import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsTelegram,
} from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";

const SOCIAL_LINKS = [
  { name: "Facebook", icon: BsFacebook, url: "#" },
  { name: "TikTok", icon: AiFillTikTok, url: "#" },
  { name: "Instagram", icon: BsInstagram, url: "#" },
  { name: "LinkedIn", icon: BsLinkedin, url: "#" },
  { name: "Telegram", icon: BsTelegram, url: "#" },
  { name: "GitHub", icon: BsGithub, url: "#" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

const colVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "About", action: () => navigate("/about") },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <footer className="relative w-full bg-[var(--void)] border-t border-[var(--glass-border)] bg-grid overflow-hidden box-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--violet)]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-14 w-full box-border">
        {/* Grid columns — staggered fade in */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {/* Solomon branding col */}
          <motion.div className="lg:col-span-1" variants={colVariants}>
            <h3 className="font-display text-xl font-bold mb-3 text-[var(--text-primary)]">
              Solomon<span className="text-[var(--cyan)]">.</span>
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              A tested prompt library for ChatGPT, Gemini, Copilot, and Grok.
              Copy, paste, create.
            </p>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              v2.0 — built for creators
            </p>
          </motion.div>

          {/* Support col */}
          <motion.div variants={colVariants}>
            <h4 className="font-mono text-xs tracking-widest text-[var(--cyan)] mb-4">
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={link.action}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal col */}
          <motion.div variants={colVariants}>
            <h4 className="font-mono text-xs tracking-widest text-[var(--magenta)] mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social col */}
          <motion.div variants={colVariants}>
            <h4 className="font-mono text-xs tracking-widest text-[var(--violet)] mb-4">
              FOLLOW
            </h4>
            <div className="grid grid-cols-4 sm:grid-cols-3 gap-2.5 max-w-[180px] sm:max-w-full">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center w-10 h-10 rounded-lg glass-panel text-[var(--text-muted)] hover:text-[var(--cyan)] hover:border-[var(--cyan)]/40 transition-colors"
                  >
                    <Icon className="text-base" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          className="glass-panel rounded-2xl p-6 sm:p-8 mb-10 max-w-lg mx-auto text-center box-border w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h4 className="font-display text-lg font-bold mb-1.5 text-[var(--text-primary)]">
            Stay in the loop
          </h4>
          <p className="text-sm text-[var(--text-muted)] mb-4">
            New prompts, dropped in your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex gap-2 w-full box-border"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 min-w-0 px-4 py-2.5 bg-[var(--void)] border border-[var(--glass-border)] rounded-lg focus:border-[var(--cyan)]/50 focus:outline-none text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--magenta)] to-[var(--violet)] text-white font-medium text-sm whitespace-nowrap cursor-pointer hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
          {status === "success" && (
            <p className="text-[var(--cyan)] text-xs mt-3 font-mono">
              ✓ SUBSCRIBED
            </p>
          )}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-3 border-t border-[var(--glass-border)] pt-6 font-mono text-xs text-[var(--text-muted)] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span>© 2026 Solomon. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--cyan)] animate-blink-dot" />
            </span>
            All systems operational
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default memo(Footer);
