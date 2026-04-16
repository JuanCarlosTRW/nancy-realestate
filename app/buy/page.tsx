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
    body: "A lot of buyers start by scrolling listings for months, and it\u2019s easy to see why \u2014 it feels like progress. But I\u2019ve found the search goes better when we take a quiet hour together first, before looking at any homes. I want to understand what actually matters to you. Not just bedrooms and budget, but the street you\u2019d like to walk in the evening, the commute you can live with, and the kind of neighborhood that fits how your family really spends its days. The more honest that first conversation is, the less of your time we spend on homes that were never quite right.",
    closing: "",
  },
  {
    n: "02",
    title: "Being Ready Before the Right Home Appears",
    body: "In this market, the right home often moves quickly, and that part I can\u2019t control. What I can do is help you be ready. I\u2019ll introduce you to a few local lenders I know and trust here in Dallas, so when you find a home that feels right, you can move forward the same day with confidence. Being pre-approved isn\u2019t just a formality \u2014 it\u2019s one of the quieter ways I help make sure the home you love is a home you can actually have.",
    closing: "",
  },
  {
    n: "03",
    title: "Seeing What the Photos Don\u2019t Show",
    body: "Listing photos are designed to show a home at its best, which is exactly what they should do. But when we walk a property together, I\u2019ll gently point out the things the photos weren\u2019t trying to show you. A water stain that might be worth a closer look. A floor that slopes just slightly. A corner of the yard that tells you more than the wide shot did. I won\u2019t talk you out of a home you love \u2014 I just want you to see it clearly before you decide.",
    closing: "",
  },
  {
    n: "04",
    title: "Shaping an Offer That Feels Right",
    body: "The right offer is rarely about price alone. It\u2019s about terms, timing, and understanding what the seller actually cares about \u2014 which isn\u2019t always what\u2019s written on the page. My years in human resources taught me to listen for what people really need, and to shape conversations where both sides walk away feeling good. I\u2019ll help you put together an offer that protects what matters to you, without stretching past what feels comfortable.",
    closing: "",
  },
  {
    n: "05",
    title: "Staying Close From Contract to Closing",
    body: "Between the accepted offer and the keys in your hand, there\u2019s a stretch of time when small things can quietly become bigger ones. Inspection items, appraisal questions, title details, lender timelines. This is the part of the process most buyers don\u2019t see, and it\u2019s the part where I stay closest. Years of managing complex situations with moving deadlines taught me what to watch for and when to gently follow up. I\u2019ll be the steady hand in the background \u2014 so you can focus on the move itself.",
    closing: "",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function BuyPage() {
  return (
    <>
      {/* ─── SECTION 1: PARALLAX HERO ─────────────────────────────── */}
      <ParallaxHero
        imageSrc="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=3840&q=80"
        imageAlt="Warm living room interior with natural light"
        overlayOpacity={0.25}
        glassPanel="cream"
      >
        <p className="label mb-4 !text-gold">For Buyers</p>
        <h1
          className="font-display font-light text-darkText leading-[1.08] max-w-3xl mx-auto"
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
      </ParallaxHero>

      {/* ─── SECTION 2: WHAT MOST BUYERS DON'T SEE (DARK) ─────────── */}
      <section className="bg-charcoal px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold mb-6">
              What I Quietly Watch For
            </p>
            <h2
              className="font-display font-light text-white leading-[1.1]"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              The Things You Fall in Love With
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                Aren&apos;t Always the Things That Matter Most.
              </span>
            </h2>

            <div className="mt-10 space-y-5 text-[15px] md:text-[16px] font-light text-white/70 leading-[1.85] max-w-2xl mx-auto text-left md:text-center">
              <p>
                It&apos;s natural to fall for the finishes first &mdash; the
                countertops, the open floor plan, the backyard. Those are the
                things that make a house feel like home when you walk in. But
                the things that tend to matter most over time are usually
                quieter. They show up in the details you might not think to
                look at on a showing.
              </p>
              <p>
                A roof line that hints at a story the seller hasn&apos;t told.
                An HVAC system that&apos;s a little older than it looks. A
                slope in the floor that&apos;s worth a second glance.
              </p>
              <p>
                I was raised around construction, so when we walk a property
                together, I&apos;ll be noticing those things in the background.
                Not to talk you out of a home you love &mdash; just to make
                sure you&apos;re seeing the full picture before you fall all
                the way.
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
                  One Thoughtful Path.
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 max-w-lg mx-auto">
                A calm, considered way to find the right home &mdash; without
                wasting your time along the way.
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

      {/* ─── CTA (DARK) ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Your Next Step</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              Tell Me What You&apos;re Looking For.
              <br />
              <span style={{ color: "rgba(250, 247, 242, 0.9)" }}>
                We&apos;ll Take It From There.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              I&apos;d rather take the time to understand what matters to you
              before we look at a single home. That&apos;s where every good
              search begins &mdash; with a real conversation, no pressure.
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
