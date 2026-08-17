"use client";

import React from "react";

interface SliderIndicatorsProps {
  total?: number;
  activeIndex?: number;
  onSelect?: (index: number) => void;
  className?: string;
}

const INDICATORS_3 = [0, 1, 2];
const INDICATORS_4 = [0, 1, 2, 3];

/**
 * Accessible pagination dot indicators for service card sliders and carousels.
 */
export const SliderIndicators: React.FC<SliderIndicatorsProps> = ({
  total = 3,
  activeIndex = 0,
  onSelect,
  className = "",
}) => {
  const items = total === 3 ? INDICATORS_3 : total === 4 ? INDICATORS_4 : Array.from({ length: total }, (_, i) => i);

  return (
    <div
      className={`flex items-center justify-center gap-1 ${className}`}
      role="tablist"
      aria-label="Service carousel navigation"
    >
      {items.map((i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === activeIndex}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onSelect?.(i)}
          className="min-w-11 min-h-11 p-2 flex items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
        >
          <span
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex
                ? "w-10 h-3 bg-accent-orange shadow-xs"
                : "w-3 h-3 bg-white/80 hover:bg-white"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

