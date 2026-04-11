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
        imageSrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
        imageAlt="Beautifully staged warm living room interior in Dallas Texas"
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
                    {s.closing && (
                      <p className="mt-4 font-sans text-xs font-medium italic tracking-wide text-gold">
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

      {/* ─── SECTION 4: ACCENT QUOTE (DARK) ───────────────────────── */}
      <section className="bg-charcoal px-6 py-14 md:py-20">
        <div className="container-x max-w-[700px] text-center">
          <Reveal>
            <span
              className="block text-[100px] md:text-[120px] font-light text-gold/15 leading-none select-none -mb-6 md:-mb-8"
              style={{
                fontFamily:
                  "var(--font-accent, 'Playfair Display', serif)",
              }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p
              className="text-xl md:text-2xl lg:text-3xl italic text-white leading-relaxed"
              style={{
                fontFamily:
                  "var(--font-accent, 'Playfair Display', serif)",
              }}
            >
              Every home I list gets my full attention. I do not juggle 30
              listings at once. When I represent your home, it gets the focus
              it deserves.
            </p>
            <div className="w-[80px] h-px bg-gold/30 mx-auto mt-8" />
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 5: WHAT YOU GET — 3 CARDS (LIGHT) ────────────── */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warmWhite">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">The Difference</p>
              <h2 className="h-display mt-4">
                What You Get When I Represent{" "}
                <span
                  className="italic text-gold"
                  style={{
                    fontFamily:
                      "var(--font-accent, 'Playfair Display', serif)",
                  }}
                >
                  Your Home
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 text-[15px]">
                Three things that change how your sale goes.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDS.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.12}>
                <div className="group relative h-full min-h-[280px] flex flex-col border border-bordr bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm overflow-hidden">
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

      {/* ─── SECTION 6: TESTIMONIAL (LIGHT) ───────────────────────── */}
      <section className="py-14 md:py-20 px-6 md:px-12 lg:px-20 bg-bgSection">
        <div className="container-x max-w-3xl mx-auto">
          <Reveal>
            <div className="border border-bordr bg-white p-8 md:p-12 text-center shadow-sm">
              <p className="label mb-4">From a Real Sale</p>
              <p className="text-[14px] font-light text-mediumText mb-6">
                Priced right. Prepped smart. Three offers in the first week.
              </p>

              <span
                className="block text-[80px] md:text-[100px] font-light text-gold/30 leading-none -mb-4 select-none"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote
                className="italic text-[20px] md:text-[24px] text-darkText leading-[1.6] mb-8"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                Nancy priced our home correctly from day one. We had three
                offers in the first week. Her advice on what to fix and what to
                leave alone saved us thousands in unnecessary renovations.
              </blockquote>

              <div className="w-[60px] h-px bg-gold/40 mx-auto mb-5" />

              <p className="text-[13px] tracking-button uppercase font-medium text-darkText">
                The Okafor Family
              </p>
              <p className="text-[11px] tracking-label uppercase text-gold mt-1 font-light">
                Sold Their Home in North Dallas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 7: CTA (DARK) ────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal">
        <div className="container-x max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Your Home&apos;s Next Chapter</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              I&apos;ll Tell You What Your Home Is Worth.
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
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
            <p className="mt-6 text-[14px] text-white/50">
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
