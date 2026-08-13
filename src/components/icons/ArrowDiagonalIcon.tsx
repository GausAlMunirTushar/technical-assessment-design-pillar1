import React from "react";

interface ArrowDiagonalIconProps {
  className?: string;
}

export const ArrowDiagonalIcon: React.FC<ArrowDiagonalIconProps> = ({
  className = "",
}) => {
  return (
    <svg
      className={`w-5 h-5 stroke-current stroke-2 fill-none ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
