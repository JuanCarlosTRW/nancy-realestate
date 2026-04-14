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
    body: "I\u2019ll prepare a detailed Comparative Market Analysis so you can see where your home stands in today\u2019s market. No inflated numbers, no surprises. I\u2019ll also share honest recommendations on what may be worth addressing before we list and what you can leave as-is \u2014 because not every update adds value.",
    closing:
      "I see your home through a buyer\u2019s eyes before they ever walk in.",
  },
  {
    n: "02",
    title: "Price It Right From Day One",
    body: "Pricing your home well from the start makes everything easier \u2014 more showings, stronger offers, and a smoother timeline. I study what comparable homes in your area have actually sold for so we can land on a number that works. The right price on day one creates momentum. A price that\u2019s too high can slow everything down.",
    closing: "Good pricing creates momentum from the start.",
  },
  {
    n: "03",
    title: "Make Buyers Feel It in the First Ten Seconds",
    body: "Buyers decide in the first ten seconds whether a home feels right. From professional photography to listing copy that highlights what makes your home worth it, I will make sure those ten seconds work in your favor. I\u2019ll recommend which rooms to stage and which ones just need to be clean.",
    closing: "You never get a second chance at a first showing.",
  },
  {
    n: "04",
    title: "Get Your Home in Front of the Right Buyers",
    body: "Your home goes on the MLS and gets in front of every serious buyer actively searching in Dallas. But I do not just post it and wait. I make sure the listing stands out \u2014 the right photos, the right description, the right price \u2014 so it gets saved, shared, and scheduled for showings, not scrolled past.",
    closing: "Visibility without strategy is just noise.",
  },
  {
    n: "05",
    title: "I Walk You Through Every Offer",
    body: "When offers come in, I walk you through every detail \u2014 terms, contingencies, timelines, and what each one means for you. My background in accounting and HR gave me years of experience navigating complex conversations calmly. I bring every offer to you and help you feel confident in your decision.",
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
              The Right Price Opens Doors.
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                The Wrong One Closes Them.
              </span>
            </h2>

            <div className="mt-10 space-y-5 text-[15px] md:text-[16px] font-light text-white/70 leading-[1.85] max-w-2xl mx-auto text-left md:text-center">
              <p>
                When a home is priced above what the market supports, it tends
                to sit. Days on market climb, buyers move on, and eventually a
                price reduction becomes necessary &mdash; but by then, the
                listing has lost its momentum.
              </p>
              <p>
                I won&apos;t inflate a number just to win your listing. I
                prepare a detailed Comparative Market Analysis based on what
                comparable homes have actually sold for &mdash; so you can make
                a confident, informed decision on price.
              </p>
              <p>
                Pricing is one of the most important conversations we&apos;ll
                have. I want to make sure you have the full picture before we
                set a number.
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
                <p className="text-[0.65rem] tracking-[0.15em] uppercase font-medium" style={{ color: "rgba(196, 90, 90, 0.8)" }}>Overpriced Listing</p>
                <p className="font-display text-2xl text-white mt-2">90+ Days</p>
                <p className="text-[0.8rem] text-white/50 mt-1 font-light">Price reductions. Fewer showings. Lost momentum.</p>
              </div>
              <div className="text-center p-6 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(200,169,126,0.3)" }}>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-gold font-medium">Right Price, Day One</p>
                <p className="font-display text-2xl text-white mt-2">14&ndash;30 Days</p>
                <p className="text-[0.8rem] text-white/50 mt-1 font-light">Multiple showings. Strong offers. Clean close.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 3: THE SELLING PROCESS (LIGHT) ───────────────── */}
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

      {/* ─── SECTION 4: PROOF STRIP (DARK) ─────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-14 md:py-20" style={{ background: "#1C1814" }}>
        <div className="container-x max-w-5xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="text-center py-10 md:py-12 px-6 md:px-8" style={{ borderRight: "1px solid rgba(196, 169, 108, 0.1)" }}>
                <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  Full Attention
                </p>
                <p className="text-[0.85rem] font-light leading-[1.7]" style={{ color: "rgba(250, 247, 242, 0.7)" }}>
                  I don&apos;t juggle 30 listings. Your home gets my full focus from listing to closing.
                </p>
              </div>
              <div className="text-center py-10 md:py-12 px-6 md:px-8" style={{ borderRight: "1px solid rgba(196, 169, 108, 0.1)" }}>
                <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  Honest Pricing
                </p>
                <p className="text-[0.85rem] font-light leading-[1.7]" style={{ color: "rgba(250, 247, 242, 0.7)" }}>
                  I prepare a Comparative Market Analysis so you can price with confidence &mdash; based on what actually sold.
                </p>
              </div>
              <div className="text-center py-10 md:py-12 px-6 md:px-8">
                <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  Decades of Calm Negotiation
                </p>
                <p className="text-[0.85rem] font-light leading-[1.7]" style={{ color: "rgba(250, 247, 242, 0.7)" }}>
                  Years of professional experience help me stay steady when it matters most.
                </p>
              </div>
            </div>
          </Reveal>
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
              Let&apos;s Find Out What Your Home Is Worth.
              <br />
              <span style={{ color: "rgba(250, 247, 242, 0.9)" }}>
                With Data You Can Trust.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              That honesty is the foundation of how I work. Let&apos;s
              start with a real conversation about your home, your
              timeline, and your goals.
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
