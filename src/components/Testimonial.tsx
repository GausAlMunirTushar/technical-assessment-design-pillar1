import React from "react";
import { QuoteIcon } from "./icons/QuoteIcon";

export const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 max-w-[240px] text-left">
      <QuoteIcon className="w-5 h-5 text-black" />
      <p className="text-xs sm:text-sm font-semibold text-black/90 leading-snug">
        Jenny&apos;s Exceptional product design ensure our website&apos;s success. Highly Recommended
      </p>
    </div>
  );
};
