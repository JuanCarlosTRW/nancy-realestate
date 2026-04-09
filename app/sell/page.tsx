import type { Metadata } from "next";
import { Scale, ClipboardCheck, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/layout/CTABanner";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Selling Your Home in Dallas | Nancy Musselman",
  description:
    "Sell your Dallas home with Nancy Musselman — strategic pricing, presentation, and professional execution from a lifelong Dallasite.",
};

const STEPS = [
  {
    n: "01",
    title: "Home Walkthrough",
    body: "I'll come to your home, assess it honestly, and tell you exactly what it's worth and what to do before listing.",
  },
  {
    n: "02",
    title: "Pricing Strategy",
    body: "Overpricing is the #1 mistake sellers make. I'll price it right to attract serious buyers fast.",
  },
  {
    n: "03",
    title: "Presentation",
    body: "From photos to listing copy, we'll present your home in its best light.",
  },
  {
    n: "04",
    title: "Marketing & Exposure",
    body: "Your home goes on the MLS and gets in front of serious buyers actively searching in Dallas.",
  },
  {
    n: "05",
    title: "Negotiate & Close",
    body: "When offers come in, I handle the negotiation so you get the best possible outcome.",
  },
];

const BENEFITS = [
  {
    icon: Scale,
    title: "Honest Pricing Advice",
    body: "Not what you want to hear, but what the market will actually pay. That's how homes sell fast — and above ask.",
  },
  {
    icon: ClipboardCheck,
    title: "Detail-Oriented Prep Guidance",
    body: "I'll tell you exactly what to fix and what to skip. No wasted money on upgrades buyers won't notice.",
  },
  {
    icon: Shield,
    title: "Composed Under Pressure",
    body: "If something unexpected comes up at inspection, I've seen it before. I keep the deal on the rails.",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        label="For Sellers"
        titleStart="Sell Your Dallas Home With"
        titleAccent="Someone Who Knows It"
        subtitle="Pricing strategy, presentation, and professional execution — I'll handle it all."
      />

      {/* Process Steps */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <p className="label">How It Works</p>
              <h2 className="h-display mt-4">
                The Selling <span className="italic text-gold">Process</span>
              </h2>
              <div className="gold-divider w-16 mx-auto mt-8" />
            </div>
          </Reveal>
          <div className="space-y-2">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 py-10 border-b border-bordr last:border-0 items-start">
                  <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-gold/40 bg-bgSection">
                    <span className="font-display text-gold text-[20px] md:text-[22px]">
                      {s.n}
                    </span>
                  </div>
                  <div>
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

      {/* Benefits */}
      <section className="section-pad bg-bgSection">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">What Sellers Get</p>
              <h2 className="h-display mt-4">
                Working With{" "}
                <span className="italic text-gold">Nancy</span>
              </h2>
              <div className="gold-divider w-16 mx-auto mt-8" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.1}>
                  <div className="h-full p-10 bg-warmWhite border border-bordr rounded-[2px] shadow-warm">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/40 rounded-full mb-6">
                      <Icon size={20} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-[22px] md:text-[24px] text-darkText leading-[1.25]">
                      {b.title}
                    </h3>
                    <GoldDivider className="mt-4 w-10" />
                    <p className="body-p mt-5">{b.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-warmWhite text-center">
        <div className="container-x max-w-2xl">
          <h2 className="h-display">
            Thinking About{" "}
            <span className="italic text-gold">Selling?</span>
          </h2>
          <div className="gold-divider w-16 mx-auto mt-6" />
          <p className="body-p mt-8">
            Start with a no-pressure conversation. I&apos;ll tell you exactly
            where your home stands.
          </p>
          <div className="mt-10">
            <Button href="/contact">Request a Home Consultation</Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
