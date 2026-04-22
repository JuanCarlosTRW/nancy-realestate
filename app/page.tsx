import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroIntro from "@/components/home/HeroIntro";
import SplitHero from "@/components/home/SplitHero";

import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import CTASparkles from "@/components/home/CTASparkles";
import Testimonials from "@/components/home/Testimonials";
import { NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nancy Musselman | Dallas Real Estate Agent | Beam Real Estate",
  description:
    "Nancy Musselman, a Dallasite born and raised in DFW with decades of professional experience. Buying or selling, detail and care in every transaction.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

/* Part 4: Tightened copy with bold-first-sentence structure */
const CARDS = [
  {
    number: "01",
    title: "You\u2019ll See Homes With Fresh Eyes",
    hook: "Being a Dallas native, I know the quiet streets, the hidden gems, and what to watch for in every neighborhood.",
    body: "",
  },
  {
    number: "02",
    title: "You\u2019ll Never Feel Rushed or Pressured",
    hook: "",
    body: "The best outcomes come from clear thinking, not urgency. You move at the pace that\u2019s right for you.",
  },
  {
    number: "03",
    title: "An Eye for What Others Might Miss",
    hook: "I was raised around construction, and I spent years in careers where missing a detail had real consequences.",
    body: "When I walk a property, I notice what\u2019s easy to overlook. When I read a contract, I take my time with the fine print. It\u2019s not about catching anyone \u2014 it\u2019s about making sure you see the full picture before you decide.",
  },
];

const HOODS = [
  {
    name: "North Dallas",
    descriptor: "Established neighborhoods with easy access to everything",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    name: "Carrollton",
    descriptor: "Family-friendly with character and value",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
  },
  {
    name: "Preston Hollow",
    descriptor: "One of Dallas\u2019s most sought-after addresses",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
  {
    name: "Frisco",
    descriptor: "Fast-growing, family-friendly North Dallas",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    name: "Flower Mound",
    descriptor: "Lakeside living with a small-town feel",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
  {
    name: "Grapevine",
    descriptor: "Historic charm with modern convenience",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
  },
  {
    name: "Colleyville",
    descriptor: "Refined North Texas living with small-town character",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    name: "Richardson",
    descriptor: "A thriving tech corridor with strong community roots",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  },
  {
    name: "Plano",
    descriptor: "Legacy West, great dining, and master-planned communities",
    img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ─── CINEMATIC INTRO OVERLAY ─────────────────────────────── */}
      <HeroIntro />

      {/* ─── SECTION 1: SPLIT HERO ───────────────────────────────── */}
      <SplitHero />

      {/* ─── Micro authority line ────────────────────────────────── */}
      <div className="bg-warmWhite py-4 text-center md:py-12">
        <Reveal y={12}>
          {/* Part 1A: darker trust line text */}
          <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em]" style={{ color: "#4A3F35" }}>
            Serving individuals and families in North Texas &mdash; North Dallas, Frisco, Grapevine, Colleyville, and beyond
          </p>
        </Reveal>
      </div>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div className="mx-auto h-px w-full max-w-4xl" style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }} />

      {/* ─── SECTION 3: WHAT YOU CAN EXPECT — Premium cards ──────── */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-bgSection">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold">
                What You Can Expect
              </p>
              <h2 className="font-display font-normal text-darkText mt-4" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.15 }}>
                What You Can Expect{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}>
                  When We Work Together.
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              {/* Part 1A: darker section subtext */}
              <p className="mt-6 text-[0.9rem] font-light leading-[1.7]" style={{ color: "#3D342B" }}>
                When you are my client, you get my full attention &mdash; not a
                fraction of it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDS.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.15}>
                <div
                  className="group relative h-full min-h-[280px] flex flex-col overflow-hidden p-10 md:p-12 transition-all duration-500 hover:-translate-y-[6px] hover:shadow-warmLg border border-gold/[0.12] hover:border-gold/25"
                  style={{ background: "#FFFCF5", borderRadius: "4px", borderTop: "3px solid #C8A97E" }}
                >
                  {/* Gold number watermark — top right */}
                  <span
                    className="absolute -top-2 right-3 font-display text-[7rem] font-extralight leading-none select-none transition-colors duration-400 group-hover:text-gold/[0.15]"
                    style={{ color: "rgba(196, 169, 108, 0.07)", pointerEvents: "none", zIndex: 0 }}
                    aria-hidden="true"
                  >
                    {card.number}
                  </span>
                  <div className="relative z-10">
                    {/* Part 4C: larger card heading */}
                    <h3
                      className="font-display text-darkText leading-[1.2] mb-5 mt-4 transition-colors duration-300 group-hover:text-gold"
                      style={{ fontSize: "1.45rem", fontWeight: 600 }}
                    >
                      {card.title}
                    </h3>
                    {/* Part 4A+B: bold hook + lighter body */}
                    <p className="text-[0.9rem] leading-[1.7]">
                      <span className="font-medium" style={{ color: "#1A1510" }}>{card.hook}</span>
                      {" "}
                      <span className="font-light" style={{ color: "#2A211C" }}>{card.body}</span>
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
      <div className="mx-auto h-px w-full max-w-4xl" style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }} />

      {/* ─── SECTION 5: ABOUT NANCY — Full-bleed editorial split ─── */}
      {/* Part 6A: warmer text-side background */}
      <section className="bg-bgSection">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Reveal y={0} className="relative">
            <div className="relative w-full h-[400px] md:h-auto md:min-h-[600px] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/62f926_59c50cdac54448d3a4fe4072288285a1~mv2.png"
                alt="Nancy Musselman, Dallas real estate agent"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="flex flex-col justify-center px-8 py-12 md:px-16 md:py-20 lg:px-20" style={{ background: "#EDE7DC" }}>
            <Reveal delay={0.15}>
              <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold mb-4">
                About Nancy
              </p>
              <h2
                className="font-display font-normal text-darkText"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
              >
                A Dallasite{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}>
                  Through and Through
                </span>
              </h2>
              <AnimatedDivider className="w-14 mt-6" />
              {/* Part 1A: darker body text */}
              <div className="mt-8 space-y-5 text-[0.9rem] font-light leading-[1.8]" style={{ color: "#2A211C" }}>
                <p>
                  I didn&apos;t become a REALTOR<sup>&reg;</sup> by accident. I
                  was born and raised in the same area as I live now, and
                  I&apos;ve watched this city grow for decades. I&apos;ve been
                  involved with multiple facets of real estate including
                  construction and renovation projects, which has taught me how
                  to stay composed, read people, and handle difficult
                  conversations gracefully. I bring all of that to every family
                  I work with.
                </p>
              </div>
              {/* Part 5C: assertive arrow link */}
              <Link
                href="/about"
                className="mt-8 relative inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-gold hover:text-goldDark hover:gap-[14px] transition-all duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                Read My Story <span>&rarr;</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BUY / SELL DUAL CARDS ─────────────────────── */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-warmWhite">
        <div className="container-x max-w-5xl mx-auto">
          {/* Part 6B: decorative divider above buy/sell cards */}
          <div className="mx-auto mb-12" style={{ width: "60px", height: "1px", background: "#C8A97E" }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buy Card */}
            <Reveal>
              <div
                className="group relative flex flex-col justify-between overflow-hidden border border-gold/[0.12] hover:border-gold/25 bg-[#FFFCF5] p-10 md:p-12 min-h-[320px] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-warmLg"
                style={{ borderRadius: "4px", borderTop: "3px solid #C8A97E" }}
              >
                {/* Watermark */}
                <span
                  className="absolute -top-2 right-3 font-display text-[7rem] font-extralight leading-none select-none transition-colors duration-400 group-hover:text-gold/[0.15]"
                  style={{ color: "rgba(196, 169, 108, 0.07)", pointerEvents: "none", zIndex: 0 }}
                  aria-hidden="true"
                >B</span>
                <div className="relative z-10">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-gold mb-4">For Buyers</p>
                  <h3 className="font-display font-medium text-darkText leading-tight mb-4" style={{ fontSize: "1.45rem" }}>
                    Find the Right Home, Not Just Any Home
                  </h3>
                  <p className="text-[0.9rem] font-light leading-[1.7]" style={{ color: "#2A211C" }}>
                    Finding the right home in Dallas takes more than browsing
                    listings. It takes someone who knows the neighborhoods,
                    understands what&apos;s behind the listing photos, and can
                    point out what matters during a walkthrough.
                  </p>
                </div>
                <Link
                  href="/buy"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-gold hover:text-goldDark hover:gap-[14px] transition-all duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  Start Your Search <span>&rarr;</span>
                </Link>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>

            {/* Sell Card */}
            <Reveal delay={0.1}>
              <div
                className="group relative flex flex-col justify-between overflow-hidden border border-gold/[0.12] hover:border-gold/25 bg-[#FFFCF5] p-10 md:p-12 min-h-[320px] transition-all duration-500 hover:-translate-y-[6px] hover:shadow-warmLg"
                style={{ borderRadius: "4px", borderTop: "3px solid #C8A97E" }}
              >
                {/* Watermark */}
                <span
                  className="absolute -top-2 right-3 font-display text-[7rem] font-extralight leading-none select-none transition-colors duration-400 group-hover:text-gold/[0.15]"
                  style={{ color: "rgba(196, 169, 108, 0.07)", pointerEvents: "none", zIndex: 0 }}
                  aria-hidden="true"
                >S</span>
                <div className="relative z-10">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-gold mb-4">For Sellers</p>
                  <h3 className="font-display font-medium text-darkText leading-tight mb-4" style={{ fontSize: "1.45rem" }}>
                    Price It Thoughtfully. Prep It Well. Sell It With Confidence.
                  </h3>
                  <p className="text-[0.9rem] font-light leading-[1.7]" style={{ color: "#2A211C" }}>
                    Most homes that sit on the market were priced a little too
                    high from the start. I&apos;ll prepare a Comparative Market
                    Analysis so we can price it right together, prep it for
                    what buyers actually notice, and get it in front of the
                    right people from day one.
                  </p>
                </div>
                <Link
                  href="/sell"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-gold hover:text-goldDark hover:gap-[14px] transition-all duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                >
                  Get Your Home Sold <span>&rarr;</span>
                </Link>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div className="mx-auto h-px w-full max-w-4xl" style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }} />

      {/* ─── SECTION 7: NEIGHBORHOODS GRID ─────────────────────────── */}
      <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-bgSection">
        <div className="container-x">
          <Reveal>
            {/* Part 6C: left-aligned heading cluster for visual variety */}
            <div className="max-w-[600px] mb-16">
              <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold">
                Dallas Neighborhoods
              </p>
              <h2
                className="font-display font-normal text-darkText mt-4"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
              >
                The City I&apos;ve Called Home
              </h2>
              <p className="mt-6 text-[0.9rem] font-light leading-[1.7]" style={{ color: "#4A3F35" }}>
                From North Dallas to Flower Mound, I know these streets and the
                stories behind them.
              </p>
              <AnimatedDivider className="w-16 mt-8" />
            </div>
          </Reveal>

          {/* Neighborhood cards — text-only editorial grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HOODS.map((hood, i) => (
              <Reveal key={hood.name} delay={i * 0.06}>
                <Link
                  href="/about#neighborhoods"
                  className="group relative flex min-h-[140px] flex-col h-full border border-bordr bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-warm overflow-hidden"
                  style={{ borderTop: "3px solid #C8A97E" }}
                >
                  <h3 className="font-display text-[20px] text-darkText leading-[1.2] mb-1">
                    {hood.name}
                  </h3>
                  <p className="text-[11px] tracking-[0.15em] uppercase font-medium text-gold mb-2">
                    {hood.descriptor}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="text-center text-[0.85rem] font-light mt-14" style={{ color: "#2A211C" }}>
              Looking for a specific area?{" "}
              <Link
                href="/contact"
                className="text-gold hover:text-goldDark underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all"
              >
                Let&apos;s talk
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 8: TESTIMONIAL ──────────────────────────────── */}
      <Testimonials />

      {/* ─── SECTION 9: CTA (DARK) ────────────────────────────────── */}
      <section className="relative px-6 md:px-12 lg:px-20 bg-charcoal overflow-hidden" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <CTASparkles />
        <div className="relative z-10 container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold mb-5">
              Your Next Step
            </p>
            <h2
              className="font-display font-normal leading-[1.1] mt-4"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#FAF7F2" }}
            >
              Tell Me What You Need.
              <br />
              <span style={{ color: "rgba(250, 247, 242, 0.9)" }}>
                Let&apos;s Figure Out Your Next Move Together.
              </span>
            </h2>
            {/* Part 1B: brighter body text on dark bg */}
            <p className="mt-6 text-[0.95rem] font-light leading-[1.6] max-w-[500px] mx-auto" style={{ color: "rgba(250, 247, 242, 0.75)" }}>
              No sales pitch. No pressure. Just an honest conversation about
              your goals and a clear plan for how to get there.
            </p>
            {/* Part 5B: assertive final CTA with gold glow */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[0.85rem] font-semibold tracking-[0.12em] uppercase bg-gold text-charcoal hover:bg-[#D4B87A] hover:-translate-y-[2px] hover:shadow-[0_8px_36px_rgba(196,169,108,0.45)] transition-all duration-300"
                style={{
                  borderRadius: "2px",
                  padding: "18px 48px",
                  boxShadow: "0 6px 28px rgba(196, 169, 108, 0.3)",
                }}
              >
                Start a Conversation
              </Link>
            </div>
            {/* Part 1B: brighter phone text */}
            <p className="mt-6 text-[0.85rem]" style={{ color: "rgba(250, 247, 242, 0.6)" }}>
              Or call directly:{" "}
              <a
                href={`tel:${NANCY_PHONE_TEL}`}
                className="underline underline-offset-[3px] hover:text-gold transition-colors duration-200"
                style={{ color: "rgba(250, 247, 242, 0.75)" }}
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
