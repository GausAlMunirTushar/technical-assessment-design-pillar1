import React, { useId } from "react";
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
	const clipId = useId().replace(/:/g, "");

	return (
		<div className="relative group w-full min-w-70 xs:min-w-[300px] md:min-w-0 snap-start pb-[37%]">
			<div className="rounded-4xl sm:rounded-[40px] border border-white/35 group-hover:border-white/60 bg-white/5 backdrop-blur-md transition-all duration-300">
				<div className="pt-8">
					<h3 className="px-8 text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold text-white tracking-wide leading-tight">
						{title}
					</h3>
					<div className="w-full h-px bg-white/30 mt-3.5 sm:mt-4 mb-5 sm:mb-6" />
				</div>

				<div className="relative w-full mb-[-37%]">
					<div className="w-[80%] h-6 bg-white/15 rounded-t-2xl sm:rounded-t-3xl mx-auto -mb-3 opacity-60 pointer-events-none" />
					<div className="w-[90%] h-6 bg-white/30 rounded-t-2xl sm:rounded-t-[28px] mx-auto -mb-3 opacity-90 relative z-10 pointer-events-none" />

					<div className="relative z-20 w-full">
						<div className="relative w-full aspect-416/307">
							<svg
								viewBox="0 0 416 307"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-full h-full block filter drop-shadow-xl"
								role="img"
								aria-label={altText}
							>
								<defs>
									<clipPath id={`service-card-clip-${clipId}`}>
										<path d="M0 37C0 16.5655 16.5655 0 37 0H379C399.435 0 416 16.5655 416 37V157.323C416 177.757 399.435 194.323 379 194.323H356.236C317.649 194.323 286.562 225.967 287.246 264.547L287.332 269.343C287.699 290.032 271.029 307 250.337 307H37C16.5655 307 0 290.435 0 270V37Z" />
									</clipPath>
								</defs>
								<g clipPath={`url(#service-card-clip-${clipId})`}>
									<rect width="416" height="307" fill="#F0EAE1" />
									<image
										href={imageSrc}
										width="416"
										height="307"
										preserveAspectRatio="xMidYMid slice"
									/>
								</g>
							</svg>
						</div>

						<button
							className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 z-30 w-14 h-14 sm:w-16 sm:h-16 md:w-17 md:h-17 rounded-full bg-[#131F2E] border border-white/20 text-white flex items-center justify-center group-hover:bg-accent-orange group-hover:border-accent-orange transition-all duration-300 shadow-2xl focus-visible:ring-2 focus-visible:ring-accent-orange focus-visible:outline-hidden cursor-pointer"
							aria-label={`Learn more about ${title}`}
						>
							<ArrowDiagonalIcon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
