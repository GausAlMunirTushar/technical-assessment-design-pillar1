import React from "react";
import Image from "next/image";

export const GreetingBadge: React.FC = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Hello Pill Badge */}
      <div className="px-5 py-1.5 rounded-full border border-black/80 bg-white text-black font-medium text-sm sm:text-base tracking-normal shadow-xs">
        Hello!
      </div>
      {/* Orange accent scribble top-right using vector-1.png */}
      <div className="absolute -top-3 sm:-top-4 -right-6 sm:-right-7 pointer-events-none w-5 h-5 sm:w-6 sm:h-6">
        <Image
          src="/vector-1.png"
          alt="Decorative orange scribble"
          width={32}
          height={33}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};


