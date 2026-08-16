import React from "react";

interface ClipPathImageProps {
  imageSrc?: string;
  altText?: string;
  className?: string;
}

export function ClipPathImage({
  imageSrc = "your-image-url.jpg",
  altText = "Description",
  className = "",
}: ClipPathImageProps) {
  return (
    <>
      {/* Hidden SVG with bottom-right smooth circular scoop clip path definition */}
      <svg className="absolute -top-[999px] -left-[999px] w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="clip-bottom-right-circle" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 0.05 C 0 0.022 0.022 0 0.05 0 H 0.95 C 0.978 0 1 0.022 1 0.05 V 0.74 A 0.26 0.26 0 0 0 0.74 1 H 0.05 C 0.022 1 0 0.978 0 0.95 Z"
              fill="black"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Image with circular scoop clip path applied */}
      <figure style={{ clipPath: "url(#clip-bottom-right-circle)" }} className={className}>
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>
    </>
  );
}

export default ClipPathImage;
