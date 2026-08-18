import React from "react";
import Image from "next/image";

interface JcLogoProps {
  className?: string;
}

/**
 * JCREA brand monogram logo component with text branding.
 */
export const JcLogo: React.FC<JcLogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.svg"
        alt="JC Monogram Logo"
        width={36}
        height={36}
        className="w-9 h-9 shrink-0"
        priority
      />
      <span className="text-white font-extrabold tracking-wider text-2xl uppercase font-sans">
        JCREA
      </span>
    </div>
  );
};

