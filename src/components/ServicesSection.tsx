import React from "react";
import Image from "next/image";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";
import { SliderIndicators } from "./SliderIndicators";

const servicesData: ServiceCardProps[] = [
	{
		title: "UI/ UX Design",
		imageSrc: "/uiux-design.png",
		altText: "UI/UX Design Mobile Application Showcase Mockup",
	},
	{
		title: "Web Design",
		imageSrc: "/web-design.png",
		altText: "Web Design Application Desktop Mockup",
	},
	{
		title: "Landing Page",
		imageSrc: "/landing-page.png",
		altText: "High-Converting Landing Page Design Showcase Mockup",
	},
];

/**
 * Showcase section displaying offered design services in a responsive grid layout
 * on desktop screens and a smooth snap-slider on mobile devices.
 */
export const ServicesSection: React.FC = () => {
	return (
		<section
			id="services"
			aria-labelledby="services-heading"
			className="w-full bg-dark-bg text-white rounded-t-[40px] sm:rounded-t-[60px] pt-12 sm:pt-20 pb-16 px-4 sm:px-8 relative overflow-hidden border-t border-white/10"
		>
			<div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
				<Image
					src="/services-pattern-bg.jpg"
					alt=""
					fill
					sizes="100vw"
					className="object-cover object-center"
					priority
				/>
			</div>

			<div className="absolute inset-0 pointer-events-none opacity-90 mix-blend-screen" aria-hidden="true">
				<Image
					src="/services-bg.png"
					alt=""
					fill
					sizes="100vw"
					className="object-cover object-center"
				/>
			</div>

			<div className="relative z-10 max-w-300 mx-auto flex flex-col gap-10">
				<div className="flex px-6 pb-6 flex-col md:flex-row md:items-end justify-between gap-4">
					<h2
						id="services-heading"
						className="text-3xl sm:text-2xl md:text-5xl font-medium tracking-tight"
					>
						My <span className="text-accent-orange">Services</span>
					</h2>
					<p className="max-w-115 text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-normal">
						Crafting intuitive digital experiences, engaging user interfaces, and high-converting landing pages tailored to scale your brand.
					</p>
				</div>

				<div className="w-full px-6">
					<div className="hidden md:grid grid-cols-3 gap-6">
						{servicesData.map((service, index) => (
							<ServiceCard key={index} {...service} />
						))}
					</div>

					<div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4">
						{servicesData.map((service, index) => (
							<ServiceCard key={index} {...service} />
						))}
					</div>
				</div>

				<div className="pt-2">
					<SliderIndicators total={3} activeIndex={0} />
				</div>
			</div>
		</section>
	);
};
