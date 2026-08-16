import React from "react";
import Image from "next/image";
import { GreetingBadge } from "./GreetingBadge";
import { Testimonial } from "./Testimonial";
import { RatingExperience } from "./RatingExperience";
import { ScribbleLeft } from "./icons/ScribbleLeft";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-300 mx-auto px-4 pt-2 sm:pt-6 pb-0 flex flex-col items-center overflow-visible">
      {/* Top Greeting Badge */}
      <div className="mb-3 sm:mb-5">
        <GreetingBadge />
      </div>

      {/* Main Title Container */}
      <div className="relative text-center max-w-212.5 mb-2 sm:mb-4 z-10">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-[72px] lg:text-[80px] font-semibold text-text-dark tracking-tight leading-[1.08]">
          I&apos;m <span className="text-accent-orange">Jenny</span>,
          <br />
          <span className="relative inline-block">
            <span className="absolute -left-6 xs:-left-8 sm:-left-10 md:-left-12 lg:-left-16 top-[70%] sm:top-[75%] md:top-[80%] pointer-events-none w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 z-10">
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

      {/* Hero Content Grid: Desktop side elements & Center Portrait */}
      <div className="w-full max-w-287.5 grid grid-cols-1 md:grid-cols-12 items-center gap-4 relative mt-2 sm:-mt-8 md:-mt-16 lg:-mt-22">
        {/* Left Side: Testimonial (Desktop) */}
        <div className="hidden md:flex md:col-span-3 justify-start items-center z-20 pl-2">
          <Testimonial />
        </div>

        {/* Center: Hero Image with Orange Arch Backdrop */}
        <div className="col-span-1 md:col-span-6 flex justify-center items-end z-10">
          <div className="relative w-[340px] xs:w-[440px] sm:w-[600px] md:w-[720px] lg:w-[800px] h-[280px] xs:h-[360px] sm:h-[490px] md:h-[580px] lg:h-[640px] flex justify-center items-end">
            {/* Orange Arch Background Shape */}
            <div className="absolute bottom-0 w-[290px] xs:w-[380px] sm:w-[520px] md:w-[620px] lg:w-[700px] h-[180px] xs:h-[235px] sm:h-[320px] md:h-[385px] lg:h-[435px] bg-accent-orange rounded-t-full shadow-md" />

            {/* Jenny's Portrait */}
            <div className="relative z-10 w-full h-full flex justify-center items-end">
              <Image
                src="/hero-person.png"
                alt="Jenny - Product Designer"
                width={800}
                height={640}
                priority
                className="object-contain object-bottom drop-shadow-md w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Rating & Experience (Desktop) */}
        <div className="hidden md:flex md:col-span-3 justify-end items-center z-20 pr-2">
          <RatingExperience />
        </div>

        {/* Mobile Side Elements Layout (Below title, above portrait) */}
        <div className="flex md:hidden w-full items-center justify-between px-2 pt-2 z-20">
          <Testimonial />
          <RatingExperience />
        </div>
      </div>
    </section>
  );
};
