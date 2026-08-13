import React from "react";

interface ScribbleProps {
  className?: string;
}

export const ScribbleLeft: React.FC<ScribbleProps> = ({ className = "" }) => {
  return (
    <svg
      className={`w-12 h-12 text-accent-orange fill-none stroke-current ${className}`}
      viewBox="0 0 45 45"
      aria-hidden="true"
    >
      <path
        d="M38 12C30 16 20 18 10 22"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M42 24C32 28 22 30 12 36"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M44 38C34 40 26 42 16 45"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
