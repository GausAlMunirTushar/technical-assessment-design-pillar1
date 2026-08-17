"use client";

import React from "react";

interface SliderIndicatorsProps {
  total?: number;
  activeIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
}

/**
 * Accessible pagination dot indicators for service card sliders and carousels.
 */
export const SliderIndicators: React.FC<SliderIndicatorsProps> = ({
  total = 4,
  activeIndex = 0,
  onSelect,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-2.5 ${className}`}
      role="tablist"
      aria-label="Service carousel navigation"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect?.(i)}
          className={`transition-all duration-300 rounded-full focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer ${
            i === activeIndex
              ? "w-10 h-3 bg-accent-orange shadow-xs"
              : "w-3 h-3 bg-white/80 hover:bg-white"
          }`}
        />
      ))}
    </div>
  );
};

