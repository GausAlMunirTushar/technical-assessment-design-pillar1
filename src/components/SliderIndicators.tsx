import React from "react";

interface SliderIndicatorsProps {
  total?: number;
  activeIndex?: number;
  className?: string;
}

export const SliderIndicators: React.FC<SliderIndicatorsProps> = ({
  total = 4,
  activeIndex = 0,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center gap-2.5 ${className}`}
      aria-label="Carousel pagination"
    >
      {Array.from({ length: total }).map((_, i) =>
        i === activeIndex ? (
          <span
            key={i}
            className="w-10 h-3 bg-accent-orange rounded-full transition-all duration-300 shadow-sm"
            aria-current="true"
          />
        ) : (
          <span
            key={i}
            className="w-3 h-3 bg-white/80 rounded-full transition-all duration-300 hover:bg-white cursor-pointer"
          />
        )
      )}
    </div>
  );
};

