import React from "react";
import { StarRating } from "./icons/StarRating";

export const RatingExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-start text-left gap-1 max-w-50">
      <StarRating count={5} />
      <div className="mt-1">
        <span className="block text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-black leading-none">
          10 Years
        </span>
        <span className="block text-xs sm:text-sm font-medium text-black/70 mt-1">
          Experince
        </span>
      </div>
    </div>
  );
};


