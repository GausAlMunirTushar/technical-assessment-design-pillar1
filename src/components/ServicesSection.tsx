import React from "react";
import Image from "next/image";
import { ServiceCard, ServiceCardProps } from "./ServiceCard";
import { SliderIndicators } from "./SliderIndicators";

const servicesData: ServiceCardProps[] = [
  {
    title: "UI/ UX Design",
    imageSrc: "/uiux-design.png",
    altText: "UI/UX Design Mobile Application Mockup",
  },
  {
    title: "Web Design",
    imageSrc: "/web-design.png",
    altText: "Web Design Application Mockup",
  },
  {
    title: "Landing Page",
    imageSrc: "/landing-page.png",
    altText: "Landing Page Mockup",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#0D0D0D] text-white rounded-t-[40px] sm:rounded-t-[60px] pt-12 sm:pt-20 pb-16 px-4 sm:px-8 relative overflow-hidden border-t border-white/10"
    >
      {/* Layer 1: Dark Pattern Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-95">
        <Image
          src="/services-pattern-bg.jpg"
          alt="Services dark pattern background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Layer 2: Abstract Orange Fluid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen">
        <Image
          src="/services-bg.png"
          alt="Abstract services background pattern"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            My <span className="text-accent-orange">Services</span>
          </h2>
          <p className="max-w-[460px] text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>
        </div>

        {/* Service Cards Container (Desktop: Grid, Mobile: Horizontal Slider) */}
        <div className="w-full">
          {/* Desktop 3-Card Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Mobile Card Slider */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-4 px-4">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Carousel Slider Indicators */}
        <div className="pt-2">
          <SliderIndicators total={4} activeIndex={0} />
        </div>
      </div>
    </section>
  );
};
