import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroIntro from "@/components/home/HeroIntro";
import ParallaxHero from "@/components/ui/ParallaxHero";

import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { BorderBeam } from "@/components/ui/border-beam";
import CTASparkles from "@/components/home/CTASparkles";
import { IMG, NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nancy Musselman | Dallas Real Estate Agent | Beam Real Estate",
  description:
    "Nancy Musselman — a lifelong Dallasite with 50+ years in DFW and 22 years of professional experience. Buying or selling, I see what others miss.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

/* Part 4: Tightened copy with bold-first-sentence structure */
const CARDS = [
  {
    number: "01",
    title: "You\u2019ll See Homes Others Miss",
    hook: "I have lived in DFW for over fifty years.",
    body: "I know the quiet streets most agents drive past, the blocks where values are climbing, and the areas about to become the next big thing. A lifetime of local knowledge \u2014 not just an MLS search.",
  },
  {
    number: "02",
    title: "You\u2019ll Never Feel Rushed or Pressured",
    hook: "I don\u2019t push clients toward a decision to close a deal faster.",
    body: "Twenty-two years in professional environments taught me that the best outcomes come from clear thinking, not urgency. You move at the pace that\u2019s right for you.",
  },
  {
    number: "03",
    title: "Nothing Gets Past Us",
    hook: "I grew up around construction and spent decades where missing a detail had real consequences.",
    body: "When I walk a property, I see what most people miss. When I review a contract, I catch what doesn\u2019t add up. A second set of trained eyes on every part of the process.",
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
    descriptor: "Top-rated schools and a small-town feel",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  },
  {
    name: "Grapevine",
    descriptor: "Historic charm with modern convenience",
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
  },
  {
    name: "Colleyville",
    descriptor: "Quiet luxury in the heart of DFW",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ─── CINEMATIC INTRO OVERLAY ─────────────────────────────── */}
      <HeroIntro />

      {/* ─── SECTION 1: PARALLAX HERO ─────────────────────────────── */}
      <ParallaxHero
        imageSrc="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80"
        imageAlt="Warm staged living room interior in Dallas Texas"
        overlayOpacity={0.6}
      >
        <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase mb-6" style={{ color: "rgba(255, 255, 255, 0.85)", textShadow: "0 1px 8px rgba(0, 0, 0, 0.4)" }}>
          Dallas &middot; Fort Worth &middot; North Texas
        </p>
        {/* Part 2C: headline with text-shadow for definition */}
        <h1
          className="font-display font-light text-white max-w-[750px] mx-auto"
          style={{
            fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
            lineHeight: 1.1,
            textShadow: "0 2px 16px rgba(0, 0, 0, 0.3)",
          }}
        >
          Your Next Chapter Starts
          <br />
          <span
            className="italic text-gold"
            style={{
              fontFamily: "var(--font-accent, 'Playfair Display', serif)",
              fontSize: "clamp(3.2rem, 6vw, 5rem)",
            }}
          >
            With the Right Guide.
          </span>
        </h1>
        {/* Part 2B: brighter sub-headline */}
        <p className="mt-6 text-[1rem] font-light max-w-xl mx-auto leading-[1.7]" style={{ color: "rgba(255, 255, 255, 0.92)", textShadow: "0 1px 12px rgba(0, 0, 0, 0.4)" }}>
          Born and raised in DFW. Twenty-two years catching what others miss.
          Your home search deserves that kind of attention.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Part 5A: Hero primary CTA — assertive gold */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-[0.8rem] font-semibold tracking-[0.12em] uppercase bg-gold text-charcoal hover:bg-[#D4B87A] hover:-translate-y-[2px] transition-all duration-300"
            style={{
              borderRadius: "2px",
              padding: "16px 40px",
              boxShadow: "0 4px 20px rgba(196, 169, 108, 0.3)",
            }}
          >
            Let&apos;s Talk
          </Link>
          {/* Part 2D: secondary CTA — brighter border */}
          <Link
            href="/buy"
            className="inline-flex items-center justify-center text-[0.8rem] font-medium tracking-[0.12em] uppercase text-white hover:bg-white/5 hover:-translate-y-[2px] transition-all duration-300"
            style={{
              borderRadius: "2px",
              padding: "16px 36px",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            See How I Help &rarr;
          </Link>
        </div>
      </ParallaxHero>

      {/* ─── SECTION 2: STATS BAR (DARK) ──────────────────────────── */}
      <section className="bg-charcoal px-6 md:px-12">
        <Reveal y={16}>
          <div className="container-x max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 py-12 md:py-14">
            {/* Part 3: Outcome-oriented stats with third micro-line */}
            <div className="flex-1 text-center">
              <p className="font-display font-light text-white leading-none" style={{ fontSize: "2.25rem" }}>
                50+ Years
              </p>
              <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase font-normal text-white/60">
                Born &amp; Raised in DFW
              </p>
              <p className="mt-1.5 text-[0.8rem] italic font-light" style={{ color: "rgba(250, 247, 242, 0.6)" }}>
                I know what others overlook
              </p>
            </div>
            <div className="hidden md:block w-px h-10 bg-gold/30" />
            <div className="flex-1 text-center">
              <p className="font-display font-light text-white leading-none" style={{ fontSize: "2.25rem" }}>
                22 Years
              </p>
              <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase font-normal text-white/60">
                In Professional Contracts &amp; Details
              </p>
              <p className="mt-1.5 text-[0.8rem] italic font-light" style={{ color: "rgba(250, 247, 242, 0.6)" }}>
                Fewer surprises. Cleaner closings.
              </p>
            </div>
            <div className="hidden md:block w-px h-10 bg-gold/30" />
            <div className="flex-1 text-center">
              <p className="font-display font-light text-white leading-none" style={{ fontSize: "2.25rem" }}>
                Beam Real Estate
              </p>
              <p className="mt-1 text-[0.65rem] tracking-[0.2em] uppercase font-normal text-white/60">
                Licensed &middot; TX #844625
              </p>
              <p className="mt-1.5 text-[0.8rem] italic font-light" style={{ color: "rgba(250, 247, 242, 0.6)" }}>
                Full brokerage support behind every transaction.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── Micro authority line ────────────────────────────────── */}
      <div className="bg-warmWhite py-4 text-center md:py-12">
        <Reveal y={12}>
          {/* Part 1A: darker trust line text */}
          <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em]" style={{ color: "#4A3F35" }}>
            Trusted by families across Bent Tree, Plano, Richardson, and North Dallas
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
                Working With Me Feels Different.{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}>
                  Here&apos;s How.
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              {/* Part 1A: darker section subtext */}
              <p className="mt-6 text-[0.9rem] font-light leading-[1.7]" style={{ color: "#3D342B" }}>
                I take on a handful of clients at a time. That means you get
                my full attention &mdash; not a fraction of it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDS.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.15}>
                <div
                  className="group relative h-full min-h-[280px] flex flex-col overflow-hidden p-10 md:p-12 transition-all duration-500 hover:-translate-y-[6px] hover:shadow-warmLg border border-gold/[0.12] hover:border-gold/25"
                  style={{ background: "#FFFCF5", borderRadius: "4px", ...(i === 0 ? { borderTop: "3px solid #C8A97E" } : {}) }}
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
                src={IMG.nancy}
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
                  I did not become a REALTOR by accident. I spent decades watching
                  this city grow, raising my family here, and building a career
                  where missing a detail had real consequences. Real estate lets me
                  combine everything I am good at &mdash; knowing Dallas, reading
                  people, and making sure every contract, every negotiation, and
                  every detail is right.
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
            {/* Buy Card — Part 10: gold bottom accent */}
            <Reveal>
              <div className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-warm" style={{ borderRadius: "4px", borderBottom: "3px solid #C8A97E" }}>
                <BorderBeam size={250} duration={12} delay={0} colorFrom="#C8A97E" colorTo="#A8845A" borderWidth={1.5} />
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
                    alt="Happy couple standing in front of their new home"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-4 left-4 px-4 py-1.5 backdrop-blur-sm" style={{ background: "rgba(26, 21, 16, 0.85)", borderRadius: "2px" }}>
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-white">For Buyers</span>
                  </div>
                </div>
                <div className="flex min-h-[220px] flex-col justify-between border border-bordr border-t-0 bg-white p-6 md:p-8">
                  <div>
                    {/* Part 10: larger card heading */}
                    <h3 className="font-display font-medium text-darkText leading-tight mb-3" style={{ fontSize: "1.5rem" }}>
                      Find the Right Home &mdash; Not Just Any Home
                    </h3>
                    <p className="text-[0.9rem] font-light leading-[1.7]" style={{ color: "#2A211C" }}>
                      Finding the right home in Dallas takes more than browsing
                      listings. It takes someone who knows which streets to skip,
                      which neighborhoods are climbing, and what a listing photo
                      isn&apos;t showing you.
                    </p>
                  </div>
                  <Link
                    href="/buy"
                    className="mt-4 relative inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-gold hover:text-goldDark hover:gap-[14px] transition-all duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Start Your Search <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Sell Card — Part 10: dark charcoal bottom accent */}
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-warm" style={{ borderRadius: "4px", borderBottom: "3px solid #2A211C" }}>
                <BorderBeam size={250} duration={12} delay={6} colorFrom="#C8A97E" colorTo="#A8845A" borderWidth={1.5} />
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                    alt="Beautifully staged bedroom — a seller-ready home"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-4 left-4 px-4 py-1.5 backdrop-blur-sm" style={{ background: "rgba(26, 21, 16, 0.85)", borderRadius: "2px" }}>
                    <span className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-white">For Sellers</span>
                  </div>
                </div>
                <div className="flex min-h-[220px] flex-col justify-between border border-bordr border-t-0 bg-white p-6 md:p-8">
                  <div>
                    <h3 className="font-display font-medium text-darkText leading-tight mb-3" style={{ fontSize: "1.5rem" }}>
                      Price It Right. Prep It Smart. Sell It Fast.
                    </h3>
                    <p className="text-[0.9rem] font-light leading-[1.7]" style={{ color: "#2A211C" }}>
                      Most homes sit on the market because they were overpriced
                      from day one. I will price it based on what actually sold,
                      prep it for what buyers actually notice, and get it in front
                      of serious buyers fast.
                    </p>
                  </div>
                  <Link
                    href="/sell"
                    className="mt-4 relative inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-semibold text-gold hover:text-goldDark hover:gap-[14px] transition-all duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Get Your Home Sold <span>&rarr;</span>
                  </Link>
                </div>
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
                The City I&apos;ve Called Home for{" "}
                <span className="italic text-gold" style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}>
                  50+ Years
                </span>
              </h2>
              <p className="mt-6 text-[0.9rem] font-light leading-[1.7]" style={{ color: "#4A3F35" }}>
                From North Dallas to Colleyville, I know these streets and the
                stories behind them.
              </p>
              <AnimatedDivider className="w-16 mt-8" />
            </div>
          </Reveal>

          {/* Part 9: Stronger gradients and larger text on neighborhood cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
            {HOODS.slice(0, 4).map((hood, i) => (
              <Reveal key={hood.name} delay={i * 0.08}>
                <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-default">
                  <Image
                    src={hood.img}
                    alt={`${hood.name} neighborhood`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-80"
                    style={{ background: "linear-gradient(to top, rgba(20,16,12,0.8) 0%, rgba(20,16,12,0.35) 45%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                    <h3
                      className="font-display font-medium text-white leading-[1.1]"
                      style={{ fontSize: "1.6rem", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
                    >
                      {hood.name}
                    </h3>
                    <div className="w-6 group-hover:w-12 h-[2px] bg-gold mt-2 mb-2 transition-all duration-500" />
                    <p className="text-[0.8rem] font-light leading-[1.5]" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {hood.descriptor}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 mt-1">
            {HOODS.slice(4).map((hood, i) => (
              <Reveal key={hood.name} delay={(i + 4) * 0.08}>
                <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-default">
                  <Image
                    src={hood.img}
                    alt={`${hood.name} neighborhood`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-80"
                    style={{ background: "linear-gradient(to top, rgba(20,16,12,0.8) 0%, rgba(20,16,12,0.35) 45%, transparent 100%)" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                    <h3
                      className="font-display font-medium text-white leading-[1.1]"
                      style={{ fontSize: "1.6rem", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
                    >
                      {hood.name}
                    </h3>
                    <div className="w-6 group-hover:w-12 h-[2px] bg-gold mt-2 mb-2 transition-all duration-500" />
                    <p className="text-[0.8rem] font-light leading-[1.5]" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {hood.descriptor}
                    </p>
                  </div>
                </div>
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

      {/* ─── SECTION 8: ACCENT QUOTE — Part 6D: tighter gap ─────── */}
      <section className="bg-charcoal px-6" style={{ paddingTop: "48px", paddingBottom: "24px" }}>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="mx-auto mb-10" style={{ width: "40px", height: "1.5px", background: "#C8A97E" }} />
            <p
              className="font-normal italic"
              style={{
                fontFamily: "var(--font-accent, 'Playfair Display', serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1.4,
                color: "#FAF7F2",
              }}
            >
              Some people sell houses.
              <br />
              I help people{" "}
              <span className="text-gold">come home.</span>
            </p>
            <div className="mx-auto mt-10" style={{ width: "40px", height: "1.5px", background: "#C8A97E" }} />
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 9: CTA (DARK) — Part 6D: tighter gap ─────────── */}
      <section className="relative px-6 md:px-12 lg:px-20 bg-charcoal overflow-hidden" style={{ paddingTop: "48px", paddingBottom: "80px" }}>
        <CTASparkles />
        <div className="relative z-10 container-x max-w-2xl mx-auto text-center">
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
                I&apos;ll Tell You What Actually Makes Sense.
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
                className="inline-flex items-center justify-center text-[0.85rem] font-semibold tracking-[0.12em] uppercase bg-gold text-charcoal hover:bg-goldLight hover:scale-[1.03] transition-all duration-300"
                style={{
                  borderRadius: "2px",
                  padding: "18px 48px",
                  boxShadow: "0 6px 24px rgba(196, 169, 108, 0.25)",
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
