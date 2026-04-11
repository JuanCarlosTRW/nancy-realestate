import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import InteractiveSplitSection from "@/components/ui/InteractiveSplitSection";

export const metadata: Metadata = {
  title: "Selling Your Home in Dallas | Nancy Musselman",
  description:
    "Sell your Dallas home with Nancy Musselman. Strategic pricing, presentation, and professional execution from a lifelong Dallasite.",
};

const STEPS = [
  {
    n: "01",
    title: "Home Walkthrough",
    body: "I will come to your home and tell you exactly what it is worth and why. No inflated number to win your listing. No lowball to make myself look good later. I will also tell you what to fix before we list and what to leave alone \u2014 because the wrong renovation can cost you thousands with zero return.",
  },
  {
    n: "02",
    title: "Pricing Strategy",
    body: "Overpricing is the number one mistake sellers make, and most agents let it happen because they do not want the uncomfortable conversation. I will have that conversation. I study what comparable homes actually sold for \u2014 not what they were listed at. The right price on day one attracts multiple offers. The wrong price leads to price drops and a stale listing that buyers ignore.",
  },
  {
    n: "03",
    title: "Presentation",
    body: "Buyers decide in the first ten seconds whether a home feels right. From professional photography to listing copy that highlights what makes your home worth it, I will make sure those ten seconds work in your favor. I will tell you exactly which rooms to stage and which ones just need to be clean.",
  },
  {
    n: "04",
    title: "Marketing and Exposure",
    body: "Your home goes on the MLS and gets in front of every serious buyer actively searching in Dallas. But I do not just post it and wait. I make sure the listing stands out \u2014 the right photos, the right description, the right price \u2014 so it gets saved, shared, and scheduled for showings, not scrolled past.",
  },
  {
    n: "05",
    title: "Negotiate and Close",
    body: "When offers come in, the real work starts. Counteroffers, inspection negotiations, appraisal disputes, buyer financing issues \u2014 I have spent twenty-two years in professional environments where high-stakes conversations and tight deadlines were the job. I handle the negotiation so you get the best possible outcome without the stress of doing it yourself.",
  },
];

const SPLIT_ITEMS = [
  {
    label: "Honest Pricing Advice",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Beautiful staged living room",
    description:
      "Not what you want to hear, but what the market will actually pay. I study what comparable homes actually sold for, not just what they listed at. That precision is the difference between a bidding war and a stale listing.",
    pullQuote: "I price based on what sold, not what was listed.",
  },
  {
    label: "Detail-Oriented Prep Guidance",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Home staging interior design",
    description:
      "I will tell you exactly what to fix and what to skip. No wasted money on upgrades that will not move the needle. Every dollar you spend on prep should come back at closing.",
    pullQuote: "Every dollar on prep should come back at closing.",
  },
  {
    label: "Calm When It Counts",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Professional meeting setting",
    description:
      "Inspection surprises. Last-minute buyer demands. Appraisal issues. I have seen it all before, and I do not panic. I keep the deal moving and keep you informed without the drama.",
    pullQuote: "I have seen it before. I do not panic.",
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
                  <div className="flex flex-col items-center">
                    <span className="font-display text-[40px] md:text-[48px] text-gold/30 leading-none font-light select-none">
                      {s.n}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-gold/15 mt-3 min-h-[40px]" />
                    )}
                  </div>
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

      {/* Personal attention callout */}
      <Reveal>
        <div className="py-20 md:py-24 bg-bgSection px-6 md:px-12">
          <div className="container-x max-w-[700px] text-center">
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
            <div className="w-[80px] h-px bg-gold/30 mx-auto mt-8" />
          </div>
        </div>
      </Reveal>

      {/* Working With Nancy — Interactive Split */}
      <InteractiveSplitSection
        sectionLabel="What Sellers Get"
        sectionTitle="Working With"
        sectionTitleAccent="Nancy"
        items={SPLIT_ITEMS}
      />

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

      <CTABanner
        subtitle="Whether you have one question or you are ready to start today, reach out. No pressure, no sales pitch."
        commitment="I will tell you what your home is worth and why \u2014 even if it is not what you want to hear."
      />
    </>
  );
}
