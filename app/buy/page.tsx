import type { Metadata } from "next";
import ParallaxHero from "@/components/ui/ParallaxHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buying a Home in Dallas | Nancy Musselman",
  description:
    "Finding your Dallas home starts here. Work with Nancy Musselman, a Dallas agent with 50+ years in the DFW Metroplex.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

const STEPS = [
  {
    n: "01",
    title: "We Start With What Actually Matters",
    body: "Most buyers start by scrolling listings online for months. That is backwards. I start by understanding what actually matters to you \u2014 not just bedrooms and budget, but the street you want to live on, the commute you can tolerate, and the neighborhood that fits how your family actually lives. The more honest this conversation is, the fewer wrong houses we waste time on.",
    closing: "",
  },
  {
    n: "02",
    title: "Be Ready Before the Right Home Appears",
    body: "In this market, a home you love will not wait for your financing to catch up. I will connect you with lenders I trust in the Dallas area so you are ready to move the same day you find the right one. Being pre-approved is not just smart \u2014 it is the difference between getting the house and watching someone else get it.",
    closing: "The best homes don\u2019t wait. Be ready before they appear.",
  },
  {
    n: "03",
    title: "I Show You What You Won\u2019t See Online",
    body: "I do not just open doors and let you wander. I grew up around construction. I will point out the things you will not notice in photos \u2014 the water stain that means a roof problem, the slope in the floor that means foundation work, the renovation that looks beautiful but was done without permits. That is the difference between buying a home and buying a problem.",
    closing:
      "Listing photos show you the best angles. I show you the full picture.",
  },
  {
    n: "04",
    title: "Winning the Home Without Overpaying",
    body: "The right offer is not just about price. It is about terms, timing, and knowing what the seller actually cares about. My background in HR taught me how to read people and negotiate situations where both sides feel good about the outcome. I will help you win the house without overpaying for it.",
    closing: "The goal is not just to win. It is to win correctly.",
  },
  {
    n: "05",
    title: "Nothing Slips Between Contract and Keys",
    body: "Between the accepted offer and the keys in your hand, a hundred things can go sideways. Inspection issues, appraisal gaps, title problems, lender delays. I have spent twenty-two years managing complex, high-stakes situations where the details matter and the timeline is tight. From contract to close, nothing slips through on my watch.",
    closing:
      "Most deals don\u2019t fall apart at the beginning. They fall apart in the details.",
  },
];

const CARDS = [
  {
    number: "01",
    title: "I Know Where Value Actually Lives",
    body: "I know Dallas neighborhoods most agents overlook. The quiet streets with great schools, the blocks where values are climbing, the areas most agents drive past. Fifty years of living here means I don\u2019t rely on market reports to tell me what a neighborhood feels like \u2014 I already know.",
  },
  {
    number: "02",
    title: "I Stay Clear When Things Get Complicated",
    body: "When negotiations get tense, when inspections surface surprises, when timelines shift \u2014 I stay level. Twenty-two years of high-stakes professional experience means I don\u2019t panic, I don\u2019t rush, and I don\u2019t let emotions drive decisions. You get an agent whose steadiness is contagious.",
  },
  {
    number: "03",
    title: "I Tell You What Others Won\u2019t",
    body: "If something is wrong with a home, I will tell you. If a neighborhood doesn\u2019t match what you described wanting, I will say so. I would rather lose a deal than let you make a decision you\u2019ll regret. That\u2019s not just a philosophy \u2014 it\u2019s how I\u2019ve operated my entire career.",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function BuyPage() {
  return (
    <>
      {/* ─── SECTION 1: PARALLAX HERO ─────────────────────────────── */}
      <ParallaxHero
        imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
        imageAlt="Warm home interior with natural light in Dallas Texas"
        overlayOpacity={0.6}
      >
        <p className="label mb-4 !text-gold">For Buyers</p>
        <h1
          className="font-display font-light text-white leading-[1.08] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          The Right Home Is Out There.
          <br />
          <span
            className="italic text-gold"
            style={{
              fontFamily: "var(--font-accent, 'Playfair Display', serif)",
            }}
          >
            I&apos;ll Make Sure You See It Clearly.
          </span>
        </h1>
        <p className="mt-6 text-[15px] md:text-[16px] font-light text-white/90 max-w-xl mx-auto leading-[1.7]">
          The right home in the right neighborhood. I know this city well enough
          to find both &mdash; and experienced enough to spot what
          doesn&apos;t belong.
        </p>
      </ParallaxHero>

      {/* ─── SECTION 2: WHAT MOST BUYERS DON'T SEE (DARK) ─────────── */}
      <section className="bg-charcoal px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold mb-6">
              What Most Buyers Don&apos;t See
            </p>
            <h2
              className="font-display font-light text-white leading-[1.1]"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              The Perfect Kitchen Doesn&apos;t Matter
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                If the Foundation Is Failing.
              </span>
            </h2>

            <div className="mt-10 space-y-5 text-[15px] md:text-[16px] font-light text-white/70 leading-[1.85] max-w-2xl mx-auto text-left md:text-center">
              <p>
                Most people fall in love with finishes &mdash; the countertops,
                the open floor plan, the backyard. But the things that cost you
                the most are the things you never noticed.
              </p>
              <p>
                The street that floods every spring. The roof line that tells a
                story the seller didn&apos;t mention. The renovation that looks
                beautiful but was done without permits.
              </p>
              <p>
                I grew up around construction. I spent 22 years in careers where
                details were non-negotiable. When I walk a property, I&apos;m
                not just looking at what&apos;s there &mdash; I&apos;m looking
                for what&apos;s wrong, what&apos;s hidden, and what&apos;s
                going to cost you later.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mx-auto mt-10 max-w-xl border-l-2 border-gold pl-6 text-left">
              <p
                className="text-lg italic leading-relaxed text-white/90 md:text-xl"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                That&apos;s not pessimism. That&apos;s protection.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 3: THE BUYING PROCESS (LIGHT) ────────────────── */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-4xl">
          <Reveal>
            <div className="text-center mb-16">
              <p className="label">The Process</p>
              <h2 className="h-display mt-4">
                Five Steps.{" "}
                <span
                  className="italic text-gold"
                  style={{
                    fontFamily:
                      "var(--font-accent, 'Playfair Display', serif)",
                  }}
                >
                  Zero Guesswork.
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 max-w-lg mx-auto">
                Every step is designed to protect your time, your money, and
                your peace of mind.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  className={`grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-6 md:gap-10 items-start ${i % 2 === 1 ? "bg-[#F0EBE2] -mx-4 px-4 md:-mx-8 md:px-8 py-6 rounded" : ""}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-display text-[3.5rem] leading-none font-extralight select-none" style={{ color: "rgba(196, 169, 108, 0.22)" }}>
                      {s.n}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-gold/15 mt-3 min-h-[40px]" />
                    )}
                  </div>
                  <div className="pb-10 md:pb-12">
                    <h3 className="font-display text-[1.4rem] md:text-[1.6rem] text-darkText leading-tight" style={{ fontWeight: 500 }}>
                      {s.title}
                    </h3>
                    <p className="body-p mt-4 max-w-2xl">{s.body}</p>
                    {s.closing && (
                      <p className="mt-4 font-display text-[0.95rem] italic" style={{ color: "#A8893F" }}>
                        {s.closing}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THE DETAILS MATTER (DARK) ─────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-charcoal">
        <div className="container-x max-w-[700px] text-center">
          <Reveal>
            <p className="label !text-gold mb-8">The Details Matter</p>
            <p className="text-[15px] md:text-[16px] leading-[1.85] font-light text-white/70">
              I grew up on job sites watching my family build homes from the
              ground up. When I walk through a property with you, I am not just
              looking at countertops and paint colors. I am checking the
              foundation, the roof line, the drainage, the electrical panel, the
              water heater age, and the quality of every renovation. I see the
              things that do not show up in listing photos &mdash; and the
              things that will show up on your inspection report.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 5: HOW I THINK (3 CARDS — LIGHT) ─────────────── */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warmWhite">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">Why It Matters Who Walks With You</p>
              <h2 className="h-display mt-4">
                How I Think When I Walk a Property
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 text-[15px]">
                Three things set me apart from agents who just open doors.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CARDS.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.12}>
                <div className={`group relative h-full border border-bordr bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm overflow-hidden ${i === 2 ? "md:col-span-2" : ""}`}>
                  {/* Watermark number */}
                  <span
                    className="absolute -top-6 -left-3 font-display text-[150px] font-thin leading-none select-none"
                    style={{
                      color: "#C8A97E",
                      opacity: 0.06,
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                    aria-hidden="true"
                  >
                    {card.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-display text-[22px] md:text-[24px] text-darkText leading-[1.2] mb-4 mt-6">
                      {card.title}
                    </h3>
                    <p className="body-p text-[14px] md:text-[15px] leading-[1.8]">
                      {card.body}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div
        className="mx-auto h-px w-full max-w-4xl"
        style={{
          background:
            "linear-gradient(90deg, transparent, #C8A97E, transparent)",
        }}
      />

      {/* ─── CTA (DARK) ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal">
        <div className="container-x max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Your Next Step</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              Tell Me What You&apos;re Looking For.
              <br />
              <span style={{ color: "rgba(250, 247, 242, 0.9)" }}>
                I&apos;ll Tell You What&apos;s Worth Seeing.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              I won&apos;t show you a single home until I understand exactly
              what matters to you. That&apos;s where every great search starts.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="gold">
                Start Your Search
              </Button>
            </div>
            <p className="mt-6 text-[14px] text-white/60">
              Or call directly:{" "}
              <a
                href={`tel:${NANCY_PHONE_TEL}`}
                className="text-gold underline underline-offset-4 hover:text-goldLight transition-colors"
              >
                {NANCY_PHONE}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
