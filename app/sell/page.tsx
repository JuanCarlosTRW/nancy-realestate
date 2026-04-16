import type { Metadata } from "next";
import GoldParticleHero from "@/components/sell/GoldParticleHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Selling Your Home in Dallas | Nancy Musselman",
  description:
    "Sell your Dallas home with Nancy Musselman. Strategic pricing, presentation, and professional execution from a lifelong Dallasite.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

const STEPS = [
  {
    n: "01",
    title: "I Walk Your Home Like a Buyer Would",
    body: "I\u2019ll prepare a detailed Comparative Market Analysis so you can see where your home stands in today\u2019s market. No inflated numbers, no surprises. I\u2019ll also share honest recommendations on what may be worth addressing before we list and what you can leave as-is, because not every update adds value.",
    closing:
      "I see your home through a buyer\u2019s eyes before they ever walk in.",
  },
  {
    n: "02",
    title: "Price It Right From Day One",
    body: "Pricing your home well from the start makes everything easier. More showings, stronger offers, and a smoother timeline. I study what comparable homes in your area have actually sold for so we can land on a number that works. The right price on day one creates momentum. A price that\u2019s too high can slow everything down.",
    closing: "Good pricing creates momentum from the start.",
  },
  {
    n: "03",
    title: "The First Ten Seconds Matter Most",
    body: "Buyers usually decide how they feel about a home in the first few seconds. From the listing photos to the way each room presents on a walkthrough, I\u2019ll make sure those early impressions are working in your favor. I\u2019ll share which rooms might benefit from staging and which ones really just need to be clean and clear.",
    closing: "",
  },
  {
    n: "04",
    title: "Get Your Home in Front of the Right Buyers",
    body: "Your home goes on the MLS and gets in front of every serious buyer actively searching in Dallas. But I do not just post it and wait. I make sure the listing stands out with the right photos, the right description, and the right price, so it gets saved, shared, and scheduled for showings, not scrolled past.",
    closing: "Getting seen is the start. Getting saved and scheduled is what matters.",
  },
  {
    n: "05",
    title: "I Walk You Through Every Offer",
    body: "When offers come in, I\u2019ll walk you through every detail. Terms, contingencies, timelines, and what each one means for you. Twenty-two years in HR taught me to handle complex conversations gracefully and with poise. I\u2019ll bring every offer to you and help you feel confident in whatever you decide.",
    closing:
      "Every offer deserves a clear head and a careful eye.",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function SellPage() {
  return (
    <>
      {/* ─── SECTION 1: PARALLAX HERO ─────────────────────────────── */}
      <GoldParticleHero />

      {/* ─── SECTION 2: WHAT MOST SELLERS GET WRONG (DARK) ────────── */}
      <section className="bg-charcoal px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold mb-6">
              What Every Seller Should Know
            </p>
            <h2
              className="font-display font-light text-white leading-[1.1]"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              Pricing Your Home Is the Most
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                Important Conversation We&apos;ll Have.
              </span>
            </h2>

            <div className="mt-10 space-y-5 text-[15px] md:text-[16px] font-light text-white/70 leading-[1.85] max-w-2xl mx-auto text-left md:text-center">
              <p>
                When a home is priced above what the market will support, it
                tends to sit. Days on market add up, buyers move on, and a
                price reduction usually follows &mdash; but by then the
                listing has lost some of its momentum.
              </p>
              <p>
                I won&apos;t inflate a number just to win your listing. I&apos;ll
                prepare a detailed Comparative Market Analysis based on what
                comparable homes have actually sold for, so we can land on a
                number together with full confidence.
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
                I give you the data. You make the decision.
              </p>
            </div>

            {/* Pricing comparison visual */}
            <div className="grid grid-cols-2 gap-6 mt-12 max-w-lg mx-auto">
              <div className="text-center p-6 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase font-medium" style={{ color: "rgba(196, 90, 90, 0.8)" }}>Priced Too High at List</p>
                <p className="font-display text-2xl text-white mt-2">90+ Days</p>
                <p className="text-[0.8rem] text-white/50 mt-1 font-light">Often leads to price cuts and a slower path to offers.</p>
              </div>
              <div className="text-center p-6 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,126,0.3)" }}>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-medium">Priced Well From Day One</p>
                <p className="font-display text-2xl text-white mt-2">14&ndash;30 Days</p>
                <p className="text-[0.8rem] text-white/50 mt-1 font-light">More showings, stronger offers, a smoother close.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 3: THE SELLING PROCESS (LIGHT) ───────────────── */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-6xl">
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
                  No Surprises.
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 max-w-lg mx-auto">
                Every step is designed to protect your equity, your timeline,
                and your peace of mind.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <article
                  className="group relative h-full flex flex-col overflow-hidden p-8 md:p-10 transition-all duration-500 hover:-translate-y-[6px] hover:shadow-warmLg border border-gold/[0.12] hover:border-gold/30"
                  style={{
                    background: "#FFFCF5",
                    borderRadius: "6px",
                    borderTop: "3px solid #C8A97E",
                  }}
                >
                  {/* Gold step-number watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 right-3 font-display text-[6.5rem] font-extralight leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-gold/20"
                    style={{ color: "rgba(196, 169, 108, 0.08)" }}
                  >
                    {s.n}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <p className="text-[0.62rem] tracking-[0.22em] uppercase font-semibold text-gold mb-4">
                      Step {s.n}
                    </p>
                    <h3
                      className="font-display text-[1.3rem] md:text-[1.45rem] text-darkText leading-[1.25] mb-4"
                      style={{ fontWeight: 500 }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-[0.9rem] font-light leading-[1.75] flex-1"
                      style={{ color: "#2A211C" }}
                    >
                      {s.body}
                    </p>
                    {s.closing && (
                      <>
                        <div className="mt-6 h-px w-10 bg-gold/30 transition-all duration-500 group-hover:w-16" />
                        <p
                          className="mt-4 font-display text-[0.88rem] italic leading-[1.5]"
                          style={{ color: "#A8893F" }}
                        >
                          {s.closing}
                        </p>
                      </>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA (DARK) ─────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Your Home&apos;s Next Chapter</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4 max-w-[700px] mx-auto"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              Let&apos;s Start With a Real
              <br />
              <span style={{ color: "rgba(250, 247, 242, 0.9)" }}>
                Conversation About Your Home.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              No pressure, no pitch. Just an honest look at your home, your
              timeline, and what you&apos;re hoping to do next.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="gold">
                Let&apos;s Talk About Your Home
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
