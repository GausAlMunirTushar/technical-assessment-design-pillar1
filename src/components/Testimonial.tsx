import React from "react";
import { QuoteIcon } from "./icons/QuoteIcon";

export const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[220px] text-left">
      <QuoteIcon className="w-6 h-6 text-black/80" />
      <p className="text-xs sm:text-sm font-medium text-black/80 leading-snug">
        Jenny&apos;s Exceptional product design ensure our website&apos;s success. Highly Recommended
      </p>
    </div>
  );
};

