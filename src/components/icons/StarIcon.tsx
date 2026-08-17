import React from "react";

interface StarIconProps {
  className?: string;
}

/**
 * Clean vector Star icon component used for ratings and feedback indicators.
 */
export const StarIcon: React.FC<StarIconProps> = ({ className = "" }) => {
  return (
    <svg
      className={`w-4 h-4 fill-current ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};
