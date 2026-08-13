import React from "react";
import { JcLogo } from "./icons/JcLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] text-white py-12 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Logo */}
        <a href="#home" className="hover:opacity-90 transition-opacity">
          <JcLogo />
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-accent-orange transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-white/60 text-center md:text-right font-normal">
          &copy; {new Date().getFullYear()} JCREA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
