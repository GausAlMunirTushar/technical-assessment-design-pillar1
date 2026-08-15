import React from "react";
import Image from "next/image";
import { GreetingBadge } from "./GreetingBadge";
import { Testimonial } from "./Testimonial";
import { RatingExperience } from "./RatingExperience";
import { ScribbleLeft } from "./icons/ScribbleLeft";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-300 mx-auto px-4 pt-2 sm:pt-6 pb-0 flex flex-col items-center">
      {/* Top Greeting Badge */}
      <div className="mb-3 sm:mb-5">
        <GreetingBadge />
      </div>

      {/* Main Title Container */}
      <div className="relative text-center max-w-212.5 mb-4 sm:mb-8 z-10">
        {/* Left Orange Scribble Accent (vector-2) placed bottom-left near Product Designer */}
        <div className="absolute -bottom-2 -left-6 sm:-left-12 hidden xs:block pointer-events-none w-10 h-10 sm:w-14 sm:h-14">
          <Image
            src="/vector-2.png"
            alt="Decorative orange scribble left"
            width={56}
            height={56}
            className="object-contain w-full h-full"
          />
        </div>

        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-[72px] font-extrabold text-text-dark tracking-tight leading-[1.08]">
          I&apos;m <span className="text-accent-orange">Jenny</span>,
          <br />
          Product Designer
        </h1>
      </div>

      {/* Hero Content Grid: Desktop side elements & Center Portrait */}
      <div className="w-full max-w-287.5 grid grid-cols-1 md:grid-cols-12 items-center gap-4 relative mt-2 sm:-mt-6">
        {/* Left Side: Testimonial (Desktop) */}
        <div className="hidden md:flex md:col-span-3 justify-start items-center z-20 pl-2">
          <Testimonial />
        </div>

        {/* Center: Hero Image with Orange Arch Backdrop */}
        <div className="col-span-1 md:col-span-6 flex justify-center items-end z-10">
          <div className="relative w-75 xs:w-[360px] sm:w-115 md:w-130 aspect-[4/3.2] flex justify-center items-end">
            {/* Orange Arch Background Shape */}
            <div className="absolute bottom-0 w-65 xs:w-[320px] sm:w-100 md:w-115 h-42.5 xs:h-[210px] sm:h-65 md:h-75 bg-accent-orange rounded-t-full shadow-md" />

            {/* Jenny's Portrait */}
            <div className="relative z-10 w-full h-full flex justify-center items-end">
              <Image
                src="/hero-person.png"
                alt="Jenny - Product Designer"
                width={520}
                height={380}
                priority
                className="object-contain object-bottom drop-shadow-md"
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
