"use client";

import React, { useEffect } from "react";

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

/**
 * Accessible mobile navigation modal drawer with keyboard escape listener and focus trap support.
 */
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
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs flex flex-col items-center px-4 pt-[96px] gap-3"
      onClick={onClose}
    >
      <div
        id="mobile-navigation-menu"
        className="w-full max-w-86.25 bg-dark-surface text-white rounded-[28px] p-2.5 shadow-xl flex flex-col border border-white/10 animate-in fade-in zoom-in-95 duration-150 mt-1"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <nav className="flex flex-col gap-1 w-full" aria-label="Mobile navigation links">
          {items.map((item) => {
            if (item.active) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="w-full bg-accent-orange text-white font-medium text-center py-2.5 rounded-full text-base hover:bg-accent-orange-hover transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-hidden"
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
                className="w-full text-center py-2.5 text-white/90 font-medium text-base hover:text-white transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden"
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

