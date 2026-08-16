import React from "react";
import Image from "next/image";
import { GreetingBadge } from "./GreetingBadge";
import { Testimonial } from "./Testimonial";
import { RatingExperience } from "./RatingExperience";

export const HeroSection: React.FC = () => {
	return (
		<section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-0 flex flex-col items-center overflow-visible">
			{/* Top Greeting Badge */}
			<div className="mb-3 sm:mb-5 z-10">
				<GreetingBadge />
			</div>

			{/* Main Title Container */}
			<div className="relative text-center max-w-4xl mb-0 z-10">
				<h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-text-dark tracking-tight leading-[1.08]">
					I&apos;m <span className="text-accent-orange">Jenny</span>,
					<br />
					<span className="relative inline-block">
						{/* Scribble accent positioned under the P of "Product" */}
						<span className="absolute -left-7 xs:-left-10 sm:-left-12 md:-left-16 lg:-left-20 top-[60%] sm:top-[68%] md:top-[72%] pointer-events-none w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 z-10">
							<Image
								src="/vector-2.png"
								alt="Decorative orange scribble accent under P"
								width={88}
								height={88}
								className="object-contain w-full h-full"
							/>
						</span>
						Product Designer
					</span>
				</h1>
			</div>

			{/* Hero Content Container: Side elements & Larger Center Portrait with Pop-Out Arch */}
			<div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 items-end relative -mt-10 sm:-mt-18 md:-mt-28 lg:-mt-36">
				{/* Left Side: Testimonial (Desktop) */}
				<div className="hidden md:flex md:col-span-3 justify-start items-center pb-28 lg:pb-36 z-30 pl-2">
					<Testimonial />
				</div>

				{/* Center: Larger Hero Image with Orange Arch Backdrop (Pop-out effect) */}
				<div className="col-span-1 md:col-span-6 flex justify-center items-end relative z-20">
					<div className="relative w-[360px] xs:w-[440px] sm:w-[560px] md:w-[680px] lg:w-[760px] h-[300px] xs:h-[360px] sm:h-[470px] md:h-[560px] lg:h-[630px] flex justify-center items-end">
						{/* Orange Arch Background Shape - Lower height than person so head pops out */}
						<div className="absolute bottom-0 w-[300px] xs:w-[370px] sm:w-[480px] md:w-[580px] lg:w-[650px] h-[180px] xs:h-[220px] sm:h-[290px] md:h-[350px] lg:h-[400px] bg-accent-orange rounded-t-full shadow-xs" />

						{/* Jenny's Portrait - Enlarged image extending high above the arch and overlapping title text */}
						<div className="relative z-10 w-full h-full flex justify-center items-end">
							<Image
								src="/hero-person.png"
								alt="Jenny - Product Designer"
								width={953}
								height={636}
								priority
								className="object-contain object-bottom w-full h-full drop-shadow-md"
							/>
						</div>
					</div>
				</div>

				{/* Right Side: Rating & Experience (Desktop) */}
				<div className="hidden md:flex md:col-span-3 justify-end items-center pb-28 lg:pb-36 z-30 pr-2">
					<RatingExperience />
				</div>

				{/* Mobile Side Elements Layout */}
				<div className="flex md:hidden w-full items-center justify-between px-2 pt-4 pb-2 z-30 relative">
					<Testimonial />
					<RatingExperience />
				</div>
			</div>
		</section>
	);
};


