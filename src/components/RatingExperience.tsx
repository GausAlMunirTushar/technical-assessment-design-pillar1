import React from "react";
import { StarRating } from "./icons/StarRating";

export const RatingExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-start md:items-end text-left md:text-right gap-1">
      <StarRating count={5} />
      <div className="mt-1">
        <span className="block text-2xl sm:text-3xl font-extrabold text-black leading-none">
          10 Years
        </span>
        <span className="block text-xs sm:text-sm font-semibold text-black/70 mt-0.5">
          Experince
        </span>
      </div>
    </div>
  );
};
