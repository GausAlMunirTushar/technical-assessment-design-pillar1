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
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label="Carousel pagination"
    >
      {Array.from({ length: total }).map((_, i) =>
        i === activeIndex ? (
          <span
            key={i}
            className="w-8 h-2.5 bg-accent-orange rounded-full transition-all duration-300"
            aria-current="true"
          />
        ) : (
          <span
            key={i}
            className="w-2.5 h-2.5 bg-white/40 rounded-full transition-all duration-300 hover:bg-white/60 cursor-pointer"
          />
        )
      )}
    </div>
  );
};
