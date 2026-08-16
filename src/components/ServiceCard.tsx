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
		<div className="relative group w-full min-w-70 xs:min-w-[300px] md:min-w-0 bg-white/[0.04] border border-white/15 hover:border-white/25 rounded-[28px] xs:rounded-[32px] sm:rounded-[36px] md:rounded-[40px] flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-2 snap-start overflow-hidden">
			{/* Title Header & Horizontal Line */}
			<div className="p-5 xs:p-6 sm:p-7 pb-0">
				<h3 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-wide leading-tight">
					{title}
				</h3>
				<div className="w-full h-[1px] bg-white/15 mt-3.5 sm:mt-4 mb-3 sm:mb-4" />
			</div>

			{/* Stacked Cards & Mockup Area */}
			<div className="relative w-full px-3 xs:px-4 sm:px-5 pb-3 xs:pb-4 sm:pb-5 mt-2">
				{/* Stacked Card Layer 3 (Backmost tab) */}
				<div className="w-[80%] h-6 bg-white/15 rounded-t-[20px] sm:rounded-t-[24px] mx-auto -mb-3 opacity-60 pointer-events-none" />

				{/* Stacked Card Layer 2 (Middle tab) */}
				<div className="w-[90%] h-6 bg-white/25 rounded-t-[24px] sm:rounded-t-[28px] mx-auto -mb-3 opacity-90 relative z-10 pointer-events-none" />

				{/* Stacked Card Layer 1 (Front Main Showcase Card) */}
				<div className="relative z-20 w-full">
					<div className="relative w-full aspect-[1.22] service-card-cutout rounded-t-[24px] sm:rounded-t-[28px] rounded-bl-[24px] sm:rounded-bl-[28px] overflow-hidden bg-[#F0EAE1] shadow-xl">
						<Image
							src={imageSrc}
							alt={altText}
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							className="object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
						/>
					</div>

					{/* Floating Circular Action Button */}
					<button
						className="absolute bottom-0 right-0 z-30 w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-full bg-[#131F2E] border border-white/20 text-white flex items-center justify-center group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shadow-2xl focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
						aria-label={`Learn more about ${title}`}
					>
						<ArrowDiagonalIcon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
					</button>
				</div>
			</div>
		</div>
	);
};
