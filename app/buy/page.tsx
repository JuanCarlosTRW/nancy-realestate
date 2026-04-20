import type { Metadata } from "next";
import ParallaxHero from "@/components/ui/ParallaxHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buying a Home in Dallas | Nancy Musselman",
  description:
    "Finding your Dallas home starts here. Work with Nancy Musselman, a Dallas agent born and raised in DFW.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

const STEPS = [
  {
    n: "01",
    title: "We Start With What Actually Matters",
    body: "I want to understand what actually matters to you \u2014 the neighborhood feel, the daily routine, the features that would make a home feel like yours. The more I understand upfront, the easier it becomes to spot the right home when we see it.",
    closing: "",
  },
  {
    n: "02",
    title: "Being Ready Before the Right Home Appears",
    body: "One of the first things I\u2019ll do is connect you with a few local lenders I know and trust here in Dallas. Getting pre-approved early means that when a home feels right, you\u2019re ready to move forward with confidence. It\u2019s a simple step, but it makes the whole process smoother \u2014 for you and for everyone involved.",
    closing: "",
  },
  {
    n: "03",
    title: "Seeing What the Photos Don\u2019t Show",
    body: "When we walk through a home together, I like to take my time. I\u2019ll point out the things that are easy to miss at first \u2014 a water stain that might be worth asking about, a floor that slopes just slightly, or a part of the yard that tells a different story up close. It\u2019s not about finding problems. It\u2019s just about making sure you feel good about what you\u2019re seeing before you take the next step.",
    closing: "",
  },
  {
    n: "04",
    title: "Shaping an Offer That Feels Right",
    body: "Putting together a good offer is about more than the number. It\u2019s about the terms, the timing, and making sure the whole picture feels right for you, and both sides feel heard and respected. I\u2019ll walk you through every part of the offer so you understand exactly what you\u2019re agreeing to \u2014 and feel comfortable with it.",
    closing: "",
  },
  {
    n: "05",
    title: "Staying Close From Contract to Closing",
    body: "Between the accepted offer and the day you get the keys, there are a lot of small details that need attention \u2014 inspection items, appraisal questions, title details, lender timelines. I\u2019ll stay on top of all of it and keep you updated along the way, and nothing falls through the cracks while you\u2019re focused on planning your move.",
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
            We&apos;ll find it together.
          </span>
        </h1>
      </ParallaxHero>

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
                A calm, considered way to find the right home &mdash; step by
                step, at your pace.
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
                I&apos;ll Take It From There.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              Let&apos;s start with a conversation about what matters to you.
              No pressure, no rush &mdash; just a chance to talk about what
              you&apos;re looking for and how I can help.
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
            <p className="mt-10 text-[12px] tracking-[0.2em] uppercase text-gold/70">
              About Me
            </p>
            <p className="mt-3 text-[14px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              Decades of local knowledge, professional experience, and a
              people-first approach to every transaction.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
