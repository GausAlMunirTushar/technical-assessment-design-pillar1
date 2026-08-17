import React from "react";
import Image from "next/image";
import { GreetingBadge } from "./GreetingBadge";
import { Testimonial } from "./Testimonial";
import { RatingExperience } from "./RatingExperience";

/**
 * Main Hero section presenting designer introduction, pop-out portrait illustration,
 * client testimonial quote, and rating stats.
 */
export const HeroSection: React.FC = () => {
	return (
		<section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-0 flex flex-col items-center overflow-visible">
			<div className="mb-3 sm:mb-5 z-10">
				<GreetingBadge />
			</div>

			<div className="relative text-center max-w-4xl mb-0 z-10">
				<h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold text-text-dark tracking-tight leading-[0.9]">
					I&apos;m <span className="text-accent-orange">Jenny</span>,
					<br />
					<span className="relative inline-block">
						<span className="absolute -left-7 xs:-left-10 sm:-left-12 md:-left-18 lg:-left-20 top-[60%] sm:top-[68%] md:top-[72%] pointer-events-none w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 z-10">
							<Image
								src="/vector-2.png"
								alt=""
								width={88}
								height={88}
								className="object-contain w-full h-full"
							/>
						</span>
						Product Designer
					</span>
				</h1>
			</div>

			<div className="flex md:hidden w-full items-start justify-between px-2 pt-4 pb-0 z-30 relative max-w-md">
				<Testimonial />
				<RatingExperience />
			</div>

			<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 items-end relative -mt-4 sm:-mt-12 md:-mt-28 lg:-mt-36">
				<div className="hidden md:flex md:col-span-3 justify-start items-center pb-24 lg:pb-70 z-30 pl-2">
					<Testimonial />
				</div>

				<div className="col-span-1 md:col-span-6 flex justify-center items-end relative z-20">
					<div className="relative w-85 xs:w-105 sm:w-140 md:w-170 lg:w-220 h-70 xs:h-87.5 sm:h-120 md:h-130 lg:h-145 flex justify-center items-end">
						<div className="absolute bottom-0 w-72.5 xs:w-90 sm:w-120 md:w-145 lg:w-186.5 h-43.75 xs:h-53.75 sm:h-72.5 md:h-88.75 lg:h-85.25 bg-[#FEB273] rounded-t-full shadow-xs" />

						<div className="relative z-10 w-full h-full flex justify-center items-end overflow-visible">
							<Image
								src="/hero-person.png"
								alt="Jenny - Product Designer"
								width={1053}
								height={736}
								priority
								sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 520px"
								className="object-contain object-bottom w-full h-full drop-shadow-md scale-[1.25] sm:scale-[1.3] md:scale-[1.35] origin-bottom"
							/>
						</div>
					</div>
				</div>

				<div className="hidden md:flex md:col-span-3 justify-end items-center pb-24 lg:pb-70 z-30 pr-2">
					<RatingExperience />
				</div>
			</div>
		</section>
	);
};



