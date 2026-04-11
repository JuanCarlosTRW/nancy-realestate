import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export const metadata: Metadata = {
  title: "Buying a Home in Dallas | Nancy Musselman",
  description:
    "Finding your Dallas home starts here. Work with Nancy Musselman, a Dallas agent with 50+ years in the DFW Metroplex.",
};

const STEPS = [
  {
    n: "01",
    title: "Let\u2019s Talk First",
    body: "Before we look at a single home, I want to understand what you are really looking for. Neighborhood, lifestyle, budget, timeline. The more I know upfront, the better the outcome.",
  },
  {
    n: "02",
    title: "Get Pre-Approved",
    body: "I will connect you with trusted lenders in the Dallas area so you can move fast when the right home comes along. In this market, being pre-approved is not optional. It is what separates serious buyers from window shoppers.",
  },
  {
    n: "03",
    title: "Tour Homes Together",
    body: "I know these neighborhoods personally. I will point out what to look for and what to watch out for. The things you will not notice in photos, I will catch in person.",
  },
  {
    n: "04",
    title: "Make a Strong Offer",
    body: "In this market, the right offer is not just about price. It is about terms, timing, and knowing what the seller cares about. I will help you put together an offer that wins without leaving money on the table.",
  },
  {
    n: "05",
    title: "Close With Confidence",
    body: "From inspection to keys in hand, I track every detail so nothing falls through. My background in accounting and HR means I manage the process with precision and keep you informed at every step.",
  },
];

const PILLARS = [
  {
    num: "01",
    title: "Neighborhoods You Will Not Find on a Top-10 List",
    body: "I know Dallas neighborhoods that never make the best-of lists but should. The quiet streets with great schools, the blocks where values are climbing, the areas most agents overlook. Let me show you the ones that actually fit your life.",
    quote: "\u201CThe best neighborhoods are not always the most famous ones.\u201D",
  },
  {
    num: "02",
    title: "Steady Under Pressure",
    body: "My background in accounting and HR means I do not flinch when negotiations get tense. I stay composed so you can too. When a counteroffer comes in lower than expected or a deadline is tight, I keep a clear head so you can make confident decisions. That steadiness comes from two decades of navigating high-pressure professional situations.",
    quote: "\u201CI am the calm in the room when everyone else is not.\u201D",
  },
  {
    num: "03",
    title: "Honest About What You Are Looking At",
    body: "I was raised around construction. I will tell you the truth about a home. What is solid, what needs work, and what will cost you. No surprises after closing.",
    quote: "\u201CI read the building, not just the listing.\u201D",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        label="For Buyers"
        titleStart="Finding Your Dallas Home"
        titleAccent="Starts Here"
        subtitle="The right home in the right neighborhood. I know this city well enough to help you find both."
      />

      {/* Visual */}
      <Reveal>
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"
            alt="Modern luxury home exterior"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warmWhite via-transparent to-warmWhite" />
        </div>
      </Reveal>

      {/* Process Steps */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <p className="label">How It Works</p>
              <h2 className="h-display mt-4">
                The Buying <span className="italic text-gold">Process</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>
          <div className="space-y-0">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start">
                  {/* Number column with connector line */}
                  <div className="flex flex-col items-center">
                    <span className="font-display text-[40px] md:text-[48px] text-gold/30 leading-none font-light select-none">
                      {s.n}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-gold/15 mt-3 min-h-[40px]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-10 md:pb-12">
                    <h3 className="font-display text-[26px] md:text-[30px] text-darkText leading-tight">
                      {s.title}
                    </h3>
                    <p className="body-p mt-4 max-w-2xl">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood lifestyle photo */}
      <Reveal>
        <div className="container-x px-6 md:px-12 lg:px-20 py-4">
          <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop"
              alt="Beautiful residential street in Preston Hollow, Dallas"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <p className="text-[12px] text-lightText mt-3 tracking-wide">
            Preston Hollow, Dallas
          </p>
        </div>
      </Reveal>

      {/* Why Buyers Choose Nancy — Editorial Pillars */}
      <section className="relative">
        <div className="pt-20 md:pt-28 pb-6 md:pb-8 px-6 md:px-12 lg:px-20 bg-bgSection">
          <div className="container-x">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="label">Why Nancy</p>
                <h2 className="h-display mt-4">
                  Why Buyers Choose{" "}
                  <span className="italic text-gold">to Work With Me</span>
                </h2>
                <AnimatedDivider className="w-16 mx-auto mt-8" />
              </div>
            </Reveal>
          </div>
        </div>

        {PILLARS.map((p, i) => {
          const isAlt = i % 2 === 1;
          return (
            <div
              key={p.num}
              className={isAlt ? "bg-warmWhite" : "bg-bgSection"}
            >
              <div className="container-x py-14 md:py-20 px-6 md:px-12 lg:px-20">
                <Reveal delay={0.05}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto`}
                  >
                    {/* Text column */}
                    <div
                      className={`relative ${isAlt ? "md:order-2" : "md:order-1"}`}
                    >
                      <span
                        className="font-display text-[100px] md:text-[160px] text-gold/[0.08] leading-none font-normal select-none absolute -top-6 md:-top-12 -left-2 md:-left-4 pointer-events-none"
                        aria-hidden="true"
                      >
                        {p.num}
                      </span>
                      <h3 className="font-display text-[28px] md:text-[34px] lg:text-[40px] text-darkText leading-[1.15] relative z-10 pt-8 md:pt-12">
                        {p.title}
                      </h3>
                      <div className="w-[50px] h-[2px] bg-gold/50 mt-6" />
                      <p className="body-p mt-8 text-[15px] md:text-[16px] leading-[1.8] max-w-xl">
                        {p.body}
                      </p>
                    </div>

                    {/* Pull quote column */}
                    <div
                      className={`flex items-center ${isAlt ? "md:order-1" : "md:order-2"}`}
                    >
                      <blockquote className="border-l-4 border-gold/40 pl-8 md:pl-10 py-4">
                        <p className="font-display italic text-[20px] md:text-[24px] text-darkText/80 leading-[1.5]">
                          {p.quote}
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* Buyer Testimonial */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-4xl">
          <Reveal>
            {/* PLACEHOLDER: Replace with real testimonial from Nancy */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-0 bg-bgSection border border-bordr overflow-hidden">
              <div className="relative h-[260px] md:h-auto min-h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                  alt="Preston Hollow home exterior"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="block font-display text-[60px] text-gold/20 leading-none select-none -mb-2" aria-hidden="true">&ldquo;</span>
                <p className="font-display italic text-[20px] md:text-[22px] text-darkText leading-[1.5]">
                  We looked at over twenty homes before Nancy found the one. She knew exactly which streets to focus on and which to skip. That saved us months.
                </p>
                <div className="w-10 h-px bg-gold/30 mt-8" />
                <div className="mt-6">
                  <p className="text-[12px] tracking-button uppercase font-medium text-darkText">
                    The Richardson Family
                  </p>
                  <p className="text-[11px] tracking-label uppercase font-medium text-gold mt-1">
                    Bought in Preston Hollow
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-bgSection text-center">
        <div className="container-x max-w-2xl">
          <h2 className="h-display">
            Ready to Start{" "}
            <span className="italic text-gold">Your Search?</span>
          </h2>
          <AnimatedDivider className="w-16 mx-auto mt-6" />
          <p className="body-p mt-8">
            Tell me the neighborhood. I will show you what no listing site will.
          </p>
          <div className="mt-10">
            <Button href="/contact">Start Your Search</Button>
          </div>
        </div>
      </section>

    </>
  );
}
