import type { Metadata } from "next";
import ParallaxHero from "@/components/ui/ParallaxHero";
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
    body: "I will come to your home and tell you exactly what it is worth and why. No inflated number to win your listing. No lowball to make myself look good later. I will also tell you what to fix before we list and what to leave alone \u2014 because the wrong renovation can cost you thousands with zero return.",
    closing:
      "I see your home through a buyer\u2019s eyes before they ever walk in.",
  },
  {
    n: "02",
    title: "Price It Right From Day One",
    body: "Overpricing is the number one mistake sellers make, and most agents let it happen because they do not want the uncomfortable conversation. I will have that conversation. I study what comparable homes actually sold for \u2014 not what they were listed at. The right price on day one attracts multiple offers. The wrong price leads to price drops and a stale listing that buyers ignore.",
    closing: "The right price attracts. The wrong price repels.",
  },
  {
    n: "03",
    title: "Make Buyers Feel It in the First Ten Seconds",
    body: "Buyers decide in the first ten seconds whether a home feels right. From professional photography to listing copy that highlights what makes your home worth it, I will make sure those ten seconds work in your favor. I will tell you exactly which rooms to stage and which ones just need to be clean.",
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
    title: "I Handle the Negotiation So You Don\u2019t Have To",
    body: "When offers come in, the real work starts. Counteroffers, inspection negotiations, appraisal disputes, buyer financing issues \u2014 I have spent twenty-two years in professional environments where high-stakes conversations and tight deadlines were the job. I handle the negotiation so you get the best possible outcome without the stress of doing it yourself.",
    closing:
      "I negotiate like your equity depends on it \u2014 because it does.",
  },
];

const CARDS = [
  {
    number: "01",
    title: "Honesty Before Everything",
    body: "I will tell you what your home is worth \u2014 not what you want to hear. I study what comparable homes actually sold for, not what they were listed at. That precision is the difference between a bidding war and a stale listing. You deserve the truth on day one, not a correction on day sixty.",
  },
  {
    number: "02",
    title: "Preparation That Protects Your Equity",
    body: "I grew up around construction. I will walk your home and tell you exactly what to fix, what to stage, and what to leave alone. The wrong renovation before listing can cost thousands with zero return. The right preparation can add tens of thousands to your final price.",
  },
  {
    number: "03",
    title: "Calm, Focused Negotiation",
    body: "When offers come in, emotions run high. That is when mistakes happen \u2014 accepting too fast, rejecting too quickly, missing leverage you did not know you had. Twenty-two years of professional negotiation experience means I stay clear-headed when it matters most. Your outcome is too important for emotional decisions.",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function SellPage() {
  return (
    <>
      {/* ─── SECTION 1: PARALLAX HERO ─────────────────────────────── */}
      <ParallaxHero
        imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        imageAlt="Warm suburban home front view with traditional style in Dallas Texas"
        overlayOpacity={0.6}
      >
        <p className="label mb-4 !text-gold">For Sellers</p>
        <h1
          className="font-display font-light text-white leading-[1.08] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Your Home Deserves More Than a Sign in the Yard.
          <br />
          <span
            className="italic text-gold"
            style={{
              fontFamily: "var(--font-accent, 'Playfair Display', serif)",
            }}
          >
            It Deserves a Strategy.
          </span>
        </h1>
        <p className="mt-6 text-[15px] md:text-[16px] font-light text-white/90 max-w-xl mx-auto leading-[1.7]">
          Honest pricing. Precise preparation. The kind of attention your home
          gets when it&apos;s not one of thirty listings.
        </p>
      </ParallaxHero>

      {/* ─── SECTION 2: WHAT MOST SELLERS GET WRONG (DARK) ────────── */}
      <section className="bg-charcoal px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold mb-6">
              What Most Sellers Get Wrong
            </p>
            <h2
              className="font-display font-light text-white leading-[1.1]"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              The Biggest Mistake Isn&apos;t Pricing Too Low.
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                It&apos;s Pricing Too High.
              </span>
            </h2>

            <div className="mt-10 space-y-5 text-[15px] md:text-[16px] font-light text-white/70 leading-[1.85] max-w-2xl mx-auto text-left md:text-center">
              <p>
                An overpriced home doesn&apos;t attract higher offers &mdash; it
                attracts silence. Days on market climb. Buyers scroll past.
                Eventually, you drop the price anyway, but now your listing
                looks desperate instead of desirable.
              </p>
              <p>
                I will not inflate your number to win your listing. I will tell
                you what your home is actually worth, based on what comparable
                homes actually sold for &mdash; not what they were listed at.
              </p>
              <p>
                That conversation is uncomfortable. But it is the single most
                important thing I do for every seller I work with.
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
                I price based on what sold, not what you want to hear.
              </p>
            </div>

            {/* Pricing comparison visual */}
            <div className="grid grid-cols-2 gap-6 mt-12 max-w-lg mx-auto">
              <div className="text-center p-6 rounded" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase font-medium" style={{ color: "rgba(196, 90, 90, 0.8)" }}>Overpriced Listing</p>
                <p className="font-display text-2xl text-white mt-2">90+ Days</p>
                <p className="text-[0.8rem] text-white/50 mt-1 font-light">Price drops. Stale listing. Desperate look.</p>
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
                  I price based on what sold, not what you want to hear. That precision attracts offers instead of silence.
                </p>
              </div>
              <div className="text-center py-10 md:py-12 px-6 md:px-8">
                <p className="text-[0.65rem] font-medium tracking-[0.2em] uppercase text-gold mb-4">
                  22 Years of Calm Negotiation
                </p>
                <p className="text-[0.85rem] font-light leading-[1.7]" style={{ color: "rgba(250, 247, 242, 0.7)" }}>
                  High-stakes experience means I stay level when it matters most.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT YOU GET — 3 CARDS (LIGHT) ────────────── */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warmWhite">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">The Difference</p>
              <h2 className="h-display mt-4" style={{ fontWeight: 400 }}>
                What You Get When I Represent{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}>
                  Your Home
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 text-[15px]">
                Three things that change how your sale goes.
              </p>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            {CARDS.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.12}>
                <div
                  className="grid grid-cols-[60px_1fr] gap-5 items-start py-7 md:py-9"
                  style={i < CARDS.length - 1 ? { borderBottom: "1px solid rgba(196, 169, 108, 0.12)" } : {}}
                >
                  <span className="font-display text-[2rem] font-light leading-none select-none" style={{ color: "rgba(196, 169, 108, 0.25)" }}>
                    {card.number}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.3rem] leading-[1.2] mb-3" style={{ fontWeight: 600, color: "#1A1510" }}>
                      {card.title}
                    </h3>
                    <p className="text-[0.9rem] font-light leading-[1.8]" style={{ color: "#2A211C" }}>
                      {card.body}
                    </p>
                  </div>
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
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Your Home&apos;s Next Chapter</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4 max-w-[700px] mx-auto"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              I&apos;ll Tell You What Your Home Is Worth.
              <br />
              <span style={{ color: "rgba(250, 247, 242, 0.9)" }}>
                Even If It&apos;s Not What You Want to Hear.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              That honesty is exactly why my sellers don&apos;t sit on the
              market. Let&apos;s start with a real conversation about your
              home, your timeline, and your goals.
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
