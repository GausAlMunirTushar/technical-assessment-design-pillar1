import React from "react";
import Image from "next/image";
import { ArrowDiagonalIcon } from "./icons/ArrowDiagonalIcon";

export interface ServiceCardProps {
  title: string;
  imageSrc: string;
  altText: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageSrc,
  altText,
}) => {
  return (
    <div className="relative group w-full min-w-70 xs:min-w-[310px] md:min-w-0 bg-dark-card border border-border-card rounded-4xl p-6 flex flex-col justify-between overflow-hidden backdrop-blur-md shadow-xl transition-transform duration-300 hover:-translate-y-1 snap-start">
      {/* Title Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          {title}
        </h3>
      </div>

      {/* Mockup Image Stack */}
      <div className="relative w-full h-52.5 sm:h-57.5 my-4 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Action Button at bottom right */}
      <div className="flex justify-end pt-2">
        <button
          className="w-12 h-12 rounded-full bg-[#0F172A] border border-white/10 text-white flex items-center justify-center group-hover:bg-accent-orange group-hover:border-accent-orange transition-colors duration-300 shadow-md focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
          aria-label={`Learn more about ${title}`}
        >
          <ArrowDiagonalIcon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
