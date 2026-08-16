"use client";

import React, { useEffect } from "react";
import { JcLogo } from "./icons/JcLogo";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  items,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col items-center p-4 pt-6 gap-3"
      onClick={onClose}
    >
      {/* Top Navbar Pill (Open State) */}
      <div
        className="flex items-center justify-between w-full max-w-86.25 bg-dark-surface text-white rounded-full px-5 py-2.5 shadow-lg border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href="#home"
          onClick={onClose}
          className="rounded-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
          aria-label="JCREA Homepage"
        >
          <JcLogo />
        </a>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close navigation menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Card */}
      <div
        id="mobile-navigation-menu"
        className="w-full max-w-86.25 bg-dark-surface text-white rounded-[28px] p-3.5 shadow-2xl flex flex-col border border-white/10 animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="flex flex-col gap-1 w-full" aria-label="Mobile navigation">
          {items.map((item) => {
            if (item.active) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="w-full bg-accent-orange text-white text-center py-3.5 rounded-full font-medium text-base shadow-xs hover:bg-accent-orange-hover transition-colors"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="w-full text-center py-3 text-white/90 font-medium text-base hover:text-white transition-colors rounded-full"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

