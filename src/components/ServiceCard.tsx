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
		<div className="relative group w-full min-w-70 xs:min-w-[300px] md:min-w-0 bg-white/[0.04] border border-white/15 hover:border-white/25 rounded-[28px] xs:rounded-[32px] sm:rounded-[36px] md:rounded-[40px] flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-2 snap-start">
			{/* Title Header & Horizontal Line */}
			<div className="p-5 xs:p-6 sm:p-7 pb-0">
				<h3 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-wide leading-tight">
					{title}
				</h3>
				<div className="w-full h-[1px] bg-white/10 mt-3.5 sm:mt-4 mb-4 sm:mb-5" />
			</div>

			{/* Mockup Image Container */}
			<div className="relative w-full">
				<div className="relative w-full aspect-[4/3.1]">
					<Image
						src={imageSrc}
						alt={altText}
						fill
						sizes="(max-width: 768px) 100vw, 33vw"
						className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
					/>

					{/* Circular Action Button docked inside bottom-right cutout notch */}
					<button
						className="absolute bottom-0 right-0 z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full bg-[#131F2E] border border-white/15 text-white flex items-center justify-center group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shadow-2xl focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
						aria-label={`Learn more about ${title}`}
					>
						<ArrowDiagonalIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
					</button>
				</div>
			</div>
		</div>
	);
};


