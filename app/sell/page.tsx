import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export const metadata: Metadata = {
  title: "Selling Your Home in Dallas | Nancy Musselman",
  description:
    "Sell your Dallas home with Nancy Musselman. Strategic pricing, presentation, and professional execution from a lifelong Dallasite.",
};

const STEPS = [
  {
    n: "01",
    title: "Home Walkthrough",
    body: "I will come to your home, assess it honestly, and tell you exactly what it is worth and what to do before listing. No sugarcoating. Just a clear plan to get you the best result.",
  },
  {
    n: "02",
    title: "Pricing Strategy",
    body: "Overpricing is the number one mistake sellers make. It does not attract better offers. It drives buyers away. I will price it right from day one to attract serious buyers fast.",
  },
  {
    n: "03",
    title: "Presentation",
    body: "From professional photos to listing copy, we will present your home in its best light. I will tell you exactly what to fix and what to skip. No wasted money on upgrades buyers will not notice.",
  },
  {
    n: "04",
    title: "Marketing & Exposure",
    body: "Your home goes on the MLS and gets in front of serious buyers actively searching in Dallas. I make sure the listing stands out, not just shows up.",
  },
  {
    n: "05",
    title: "Negotiate & Close",
    body: "When offers come in, I handle the negotiation so you get the best possible outcome. My background in accounting and HR means I manage the numbers and the people with equal precision.",
  },
];

const PILLARS = [
  {
    num: "01",
    title: "Honest Pricing Advice",
    body: "Not what you want to hear, but what the market will actually pay. That is how homes sell fast and above ask. I study what comparable homes actually sold for, not just what they listed at. That precision is the difference between a bidding war and a stale listing.",
    quote: "\u201CI price based on what sold, not what was listed.\u201D",
  },
  {
    num: "02",
    title: "Detail-Oriented Prep Guidance",
    body: "I will tell you exactly what to fix and what to skip. No wasted money on upgrades that will not move the needle. Every dollar you spend on prep should come back at closing.",
    quote: "\u201CEvery dollar on prep should come back at closing.\u201D",
  },
  {
    num: "03",
    title: "Calm When It Counts",
    body: "Inspection surprises. Last-minute buyer demands. Appraisal issues. I have seen it all before, and I do not panic. I keep the deal moving and keep you informed without the drama.",
    quote: "\u201CI have seen it before. I do not panic.\u201D",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        label="For Sellers"
        titleStart="Sell Your Dallas Home With"
        titleAccent="Someone Who Knows Every Street"
        subtitle="Pricing strategy, presentation, and professional execution. I will handle it all."
      />

      {/* Visual */}
      <Reveal>
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200"
            alt="Luxury home interior staging"
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
                The Selling <span className="italic text-gold">Process</span>
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

      {/* Personal attention callout — elevated pullout quote */}
      <Reveal>
        <div className="py-20 md:py-24 bg-bgSection px-6 md:px-12">
          <div className="container-x max-w-[700px] text-center">
            {/* Decorative quotation mark */}
            <span
              className="block font-display text-[100px] md:text-[120px] text-gold/15 leading-none select-none -mb-6 md:-mb-8"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-display italic text-[22px] md:text-[24px] text-darkText leading-[1.45]">
              Every home I list gets my full attention. I do not juggle 30 listings
              at once. When I represent your home, it gets the focus it deserves.
            </p>
            {/* Thin gold line below */}
            <div className="w-[80px] h-px bg-gold/30 mx-auto mt-8" />
          </div>
        </div>
      </Reveal>

      {/* Staged home photo */}
      <Reveal>
        <div className="container-x px-6 md:px-12 lg:px-20 py-4">
          <div className="relative w-full h-[250px] md:h-[400px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
              alt="Beautifully staged luxury home interior"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <p className="text-[12px] text-lightText mt-3 tracking-wide">
            Presenting your home at its best
          </p>
        </div>
      </Reveal>

      {/* Working With Nancy — Editorial Pillars */}
      <section className="relative">
        <div className="pt-20 md:pt-28 pb-6 md:pb-8 px-6 md:px-12 lg:px-20 bg-warmWhite">
          <div className="container-x">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="label">What Sellers Get</p>
                <h2 className="h-display mt-4">
                  Working With{" "}
                  <span className="italic text-gold">Nancy</span>
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
              className={isAlt ? "bg-bgSection" : "bg-warmWhite"}
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

      {/* Seller Testimonial */}
      <section className="section-pad bg-bgSection">
        <div className="container-x max-w-4xl">
          <Reveal>
            {/* PLACEHOLDER: Replace with real testimonial from Nancy */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-0 bg-warmWhite border border-bordr overflow-hidden">
              <div className="relative h-[260px] md:h-auto min-h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop"
                  alt="North Dallas home exterior"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <span className="block font-display text-[60px] text-gold/20 leading-none select-none -mb-2" aria-hidden="true">&ldquo;</span>
                <p className="font-display italic text-[20px] md:text-[22px] text-darkText leading-[1.5]">
                  Nancy priced our home correctly from day one. We had three offers in the first week. Her advice on what to fix and what to leave alone saved us thousands in unnecessary renovations.
                </p>
                <div className="w-10 h-px bg-gold/30 mt-8" />
                <div className="mt-6">
                  <p className="text-[12px] tracking-button uppercase font-medium text-darkText">
                    The Okafor Family
                  </p>
                  <p className="text-[11px] tracking-label uppercase font-medium text-gold mt-1">
                    Sold Their Home in North Dallas
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
