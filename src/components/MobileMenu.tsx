"use client";

import React from "react";
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
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-center p-4 pt-4 sm:pt-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-87.5 bg-dark-surface text-white rounded-4xl p-5 shadow-2xl flex flex-col gap-6 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Header inside open menu */}
        <div className="flex items-center justify-between px-2 pt-1">
          <JcLogo />
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:bg-white/10 transition-colors"
            aria-label="Close navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Vertical menu list */}
        <nav className="flex flex-col gap-4 px-2 pb-2">
          {items.map((item) => {
            if (item.active) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="w-full bg-accent-orange text-white text-center py-3.5 rounded-full font-bold text-lg shadow-sm hover:bg-accent-orange-hover transition-colors"
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
                className="w-full text-center py-2.5 text-white/90 font-medium text-lg hover:text-white transition-colors"
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
