import React from "react";
import Image from "next/image";

/**
 * Top pill badge displaying a greeting pill and orange accent vector graphic.
 */
export const GreetingBadge: React.FC = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      <div className="px-5 py-1.5 rounded-full border border-black/80 bg-white text-black font-medium text-sm sm:text-base tracking-normal shadow-xs">
        Hello!
      </div>
      <div className="absolute -top-3 sm:-top-4 -right-6 sm:-right-7 pointer-events-none w-5 h-5 sm:w-6 sm:h-6">
        <Image
          src="/vector-1.png"
          alt=""
          width={32}
          height={33}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};


