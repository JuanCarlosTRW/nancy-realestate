"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export interface SplitItem {
  label: string;
  image: string;
  imageAlt?: string;
  description: string;
  pullQuote: string;
}

interface InteractiveSplitSectionProps {
  sectionLabel: string;
  sectionTitle: string;
  sectionTitleAccent: string;
  items: SplitItem[];
}

export default function InteractiveSplitSection({
  sectionLabel,
  sectionTitle,
  sectionTitleAccent,
  items,
}: InteractiveSplitSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-warmWhite">
      {/* Header */}
      <div className="pt-20 md:pt-28 pb-10 md:pb-14 px-6 md:px-12 lg:px-20">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="label">{sectionLabel}</p>
              <h2 className="h-display mt-4">
                {sectionTitle}{" "}
                <span className="italic text-gold">{sectionTitleAccent}</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Desktop: side-by-side interactive layout */}
      <div className="hidden md:block pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="container-x">
          <Reveal>
            <div className="grid grid-cols-[2fr_3fr] gap-0 max-w-6xl mx-auto">
              {/* Left — clickable labels */}
              <div className="flex flex-col justify-center pr-10 lg:pr-16">
                {items.map((item, i) => (
                  <div key={item.label}>
                    <button
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left py-5 transition-all duration-300 ${
                        activeIndex === i
                          ? "border-l-[3px] border-gold pl-6 text-gold"
                          : "border-l-[3px] border-transparent pl-6 text-darkText hover:text-gold/70"
                      }`}
                    >
                      <span
                        className="font-display leading-[1.2] block"
                        style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                      >
                        {item.label}
                      </span>
                    </button>
                    {i < items.length - 1 && (
                      <div className="w-[60px] h-px bg-gold/20 ml-6 my-1" />
                    )}
                  </div>
                ))}
              </div>

              {/* Right — image + overlay */}
              <div className="relative min-h-[500px] overflow-hidden bg-charcoal">
                {/* Image layers for crossfade */}
                {items.map((item, i) => (
                  <div
                    key={item.label}
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt || item.label}
                      fill
                      sizes="60vw"
                      className="object-cover"
                    />
                  </div>
                ))}

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  {items.map((item, i) => (
                    <div
                      key={item.label}
                      className="transition-opacity duration-300"
                      style={{
                        opacity: activeIndex === i ? 1 : 0,
                        position: activeIndex === i ? "relative" : "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      {activeIndex === i && (
                        <>
                          <p className="text-[15px] text-white/90 leading-[1.8] font-light max-w-lg">
                            {item.description}
                          </p>
                          <p className="font-display italic text-[16px] text-goldLight mt-4">
                            &ldquo;{item.pullQuote}&rdquo;
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile: accordion layout */}
      <div className="md:hidden pb-16 px-6">
        <div className="container-x space-y-0">
          {items.map((item, i) => {
            const isActive = activeIndex === i;
            return (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="border-b border-bordr">
                  <button
                    onClick={() => setActiveIndex(i)}
                    className={`w-full text-left py-5 transition-all duration-300 ${
                      isActive
                        ? "border-l-[3px] border-gold pl-5 text-gold"
                        : "border-l-[3px] border-transparent pl-5 text-darkText"
                    }`}
                  >
                    <span className="font-display text-[22px] leading-[1.2] block">
                      {item.label}
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className="overflow-hidden transition-all duration-400 ease-in-out"
                    style={{
                      maxHeight: isActive ? "700px" : "0px",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="pb-6">
                      {/* Image */}
                      <div className="relative w-full h-[250px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.label}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                      {/* Description */}
                      <div className="mt-5 pl-5">
                        <p className="body-p text-[15px] leading-[1.8]">
                          {item.description}
                        </p>
                        <p className="font-display italic text-[15px] text-gold/80 mt-3">
                          &ldquo;{item.pullQuote}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
