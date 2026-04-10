import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Hammer } from "lucide-react";
import PageHero from "@/components/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "Buying a Home in Dallas | Nancy Musselman",
  description:
    "Finding your Dallas home starts here. Work with Nancy Musselman — a Dallas agent with 50+ years in the DFW Metroplex.",
};

const STEPS = [
  {
    n: "01",
    title: "Let's Talk First",
    body: "Before we look at a single home, I want to understand what you're really looking for — neighborhood, lifestyle, budget, timeline.",
  },
  {
    n: "02",
    title: "Get Pre-Approved",
    body: "I'll connect you with trusted lenders in the Dallas area so you can move fast when the right home comes along.",
  },
  {
    n: "03",
    title: "Tour Homes Together",
    body: "I know these neighborhoods personally. I'll point out what to look for — and what to watch out for.",
  },
  {
    n: "04",
    title: "Make a Strong Offer",
    body: "When you're ready to make a move, I'll help you craft an offer that's competitive without overpaying.",
  },
  {
    n: "05",
    title: "Close With Confidence",
    body: "From inspection to keys in hand, I track every detail so nothing falls through.",
  },
];

const BENEFITS = [
  {
    icon: MapPin,
    title: "Neighborhoods You Won't Find in a Top-10 List",
    body: "I know Dallas neighborhoods that never make the best-of lists — but should. Let me show you the quiet gems.",
  },
  {
    icon: Users,
    title: "Steady Under Pressure",
    body: "My HR background means I don't flinch when negotiations get tense. I stay composed so you can too.",
  },
  {
    icon: Hammer,
    title: "Honest About What You're Looking At",
    body: "I was raised around construction. I'll tell you the truth about a home — the good, the bad, and the expensive.",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        label="For Buyers"
        titleStart="Finding Your Dallas Home"
        titleAccent="Starts Here"
        subtitle="The right home in the right neighborhood — I know this city well enough to help you find both."
      />

      {/* Visual */}
      <Reveal>
        <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200"
            alt="Beautiful Dallas-style home exterior"
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
              <p className="label">Why Nancy</p>
              <h2 className="h-display mt-4">
                Why Buyers Choose{" "}
                <span className="italic text-gold">to Work With Me</span>
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
            Ready to Start{" "}
            <span className="italic text-gold">Your Search?</span>
          </h2>
          <div className="gold-divider w-16 mx-auto mt-6" />
          <p className="body-p mt-8">
            Tell me what you&apos;re looking for. I&apos;ll take it from there.
          </p>
          <div className="mt-10">
            <Button href="/contact">Let&apos;s Talk</Button>
          </div>
        </div>
      </section>

    </>
  );
}
