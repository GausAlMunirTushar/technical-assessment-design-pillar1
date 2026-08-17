import React from "react";
import { StarIcon } from "./StarIcon";

interface StarRatingProps {
  count?: number;
  className?: string;
}

const DEFAULT_STARS = [0, 1, 2, 3, 4];

/**
 * Accessible 5-star rating graphic component for social proof indicators.
 */
export const StarRating: React.FC<StarRatingProps> = ({
  count = 5,
  className = "",
}) => {
  const stars = count === 5 ? DEFAULT_STARS : Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {stars.map((index) => (
        <StarIcon key={index} className="w-4 h-4 text-accent-orange" />
      ))}
    </div>
  );
};
