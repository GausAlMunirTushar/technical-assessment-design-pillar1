import React from "react";
import Image from "next/image";

export const GreetingBadge: React.FC = () => {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Hello Pill Badge */}
      <div className="px-6 py-2 rounded-full border border-black/80 bg-white text-black font-semibold text-sm sm:text-base tracking-wide shadow-xs">
        Hello!
      </div>
      {/* Orange accent scribble top-right using vector-1.png */}
      <div className="absolute -top-3.5 -right-6 pointer-events-none w-8 h-8 sm:w-9 sm:h-9">
        <Image
          src="/vector-1.png"
          alt="Decorative orange scribble"
          width={36}
          height={36}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

