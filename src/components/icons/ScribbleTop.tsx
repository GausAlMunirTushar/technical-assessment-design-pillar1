import React from "react";

interface ScribbleProps {
  className?: string;
}

export const ScribbleTop: React.FC<ScribbleProps> = ({ className = "" }) => {
  return (
    <svg
      className={`w-10 h-10 text-accent-orange fill-none stroke-current ${className}`}
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <path
        d="M12 28C10 20 14 10 16 6"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M22 30C23 20 28 12 32 8"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M30 35C33 28 38 22 40 20"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
