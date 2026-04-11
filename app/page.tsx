import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroIntro from "@/components/home/HeroIntro";
import ParallaxHero from "@/components/ui/ParallaxHero";
import Button from "@/components/ui/Button";
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

const CARDS = [
  {
    number: "01",
    title: "You\u2019ll See Homes Others Miss",
    body: "I have lived in DFW for over fifty years. I know the neighborhoods most agents overlook \u2014 the quiet streets with great schools, the blocks where values are climbing, the areas that are about to become the next big thing. You get the benefit of a lifetime of local knowledge, not just an MLS search.",
  },
  {
    number: "02",
    title: "You\u2019ll Never Feel Rushed or Pressured",
    body: "I don\u2019t push clients toward a decision to close a deal faster. Twenty-two years in professional environments taught me that the best outcomes come from clear thinking, not urgency. Whether it takes two weeks or two months, you move at the pace that\u2019s right for you.",
  },
  {
    number: "03",
    title: "Nothing Gets Past Us",
    body: "I grew up around construction and spent decades in careers where missing a detail had real consequences. When I walk a property, I see what most people miss. When I review a contract, I catch what doesn\u2019t add up. You get a second set of trained eyes on every part of the process.",
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
        <p className="label mb-4 !text-gold">
          Dallas &middot; Fort Worth &middot; North Texas
        </p>
        <h1
          className="font-display font-light text-white leading-[1.08] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Your Next Chapter Starts
          <br />
          <span
            className="italic text-gold"
            style={{
              fontFamily: "var(--font-accent, 'Playfair Display', serif)",
            }}
          >
            With the Right Guide.
          </span>
        </h1>
        <p className="mt-6 text-[15px] md:text-[16px] font-light text-white/90 max-w-xl mx-auto leading-[1.7]">
          You deserve someone who knows these neighborhoods and puts your
          interests first. Every time.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="gold">
            Let&apos;s Talk
          </Button>
          <Button href="/buy" variant="outline-white">
            See How I Help &rarr;
          </Button>
        </div>
      </ParallaxHero>

      {/* ─── SECTION 2: STATS BAR (DARK) ──────────────────────────── */}
      <section className="bg-charcoal border-y border-white/5 px-6 md:px-12">
        <div className="container-x max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0 py-8 md:py-10">
          <div className="flex-1 text-center">
            <p className="font-display text-[28px] md:text-[32px] font-light text-white leading-none">
              50+ Years
            </p>
            <p className="mt-2 text-[11px] tracking-label uppercase font-medium text-white/50">
              Calling DFW Home
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gold/30" />
          <div className="flex-1 text-center">
            <p className="font-display text-[28px] md:text-[32px] font-light text-white leading-none">
              22 Years
            </p>
            <p className="mt-2 text-[11px] tracking-label uppercase font-medium text-white/50">
              Of Reading People and Details
            </p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gold/30" />
          <div className="flex-1 text-center">
            <p className="font-display text-[28px] md:text-[32px] font-light text-white leading-none">
              Beam Real Estate
            </p>
            <p className="mt-2 text-[11px] tracking-label uppercase font-medium text-white/50">
              Licensed &middot; TX #844625
            </p>
          </div>
        </div>
      </section>

      {/* ─── Micro authority line ────────────────────────────────── */}
      <div className="bg-warmWhite py-4 text-center md:py-6">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-mediumText/70">
          Trusted by families across Bent Tree, Plano, Richardson, and North Dallas
        </p>
      </div>

      {/* ─── SECTION 3: TESTIMONIAL — PROOF EARLY (LIGHT) ─────────── */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-warmWhite">
        <div className="container-x max-w-3xl mx-auto">
          <Reveal>
            <div className="border border-bordr bg-white p-8 md:p-12 text-center shadow-sm">
              <p className="label mb-4">Don&apos;t Take My Word for It</p>

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
                Nancy made the entire process of buying our home in Bent Tree
                incredibly smooth. She was detail-oriented, always available,
                and made us feel taken care of every step of the way.
              </blockquote>

              <div className="w-[60px] h-px bg-gold/40 mx-auto mb-5" />

              <p className="text-[13px] tracking-button uppercase font-medium text-darkText">
                The Martinez Family
              </p>
              <p className="text-[11px] tracking-label uppercase text-gold mt-1 font-light">
                Bought Their Home in Bent Tree
              </p>
            </div>
          </Reveal>
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

      {/* ─── SECTION 4: WHAT YOU CAN EXPECT — 3 CARDS (LIGHT) ─────── */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-bgSection">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">What You Can Expect</p>
              <h2 className="h-display mt-4">
                Working With Me Feels Different.{" "}
                <span
                  className="italic text-gold"
                  style={{
                    fontFamily:
                      "var(--font-accent, 'Playfair Display', serif)",
                  }}
                >
                  Here&apos;s How.
                </span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 text-[15px]">
                I take on a handful of clients at a time. That means you get
                my full attention &mdash; not a fraction of it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDS.map((card, i) => (
              <Reveal key={card.number} delay={i * 0.12}>
                <div className="group relative h-full min-h-[280px] flex flex-col overflow-hidden border border-bordr bg-white p-8 md:p-10 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/40">
                  <span
                    className="absolute -top-6 -left-3 font-display text-[150px] font-thin leading-none select-none transition-opacity duration-500 group-hover:opacity-[0.12]"
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
                    <h3 className="font-display text-[22px] md:text-[24px] text-darkText leading-[1.2] mb-4 mt-6 transition-colors duration-300 group-hover:text-gold">
                      {card.title}
                    </h3>
                    <p className="body-p text-[14px] md:text-[15px] leading-[1.8]">
                      {card.body}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
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

      {/* ─── SECTION 5: ABOUT NANCY (LIGHT) ───────────────────────── */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo — left with gold offset border */}
          <Reveal>
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="aspect-[3/4] w-full overflow-hidden border border-bordr shadow-lg">
                <Image
                  src={IMG.nancy}
                  alt="Nancy Musselman, Dallas real estate agent"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          {/* Text — right */}
          <Reveal delay={0.15}>
            <p className="label">About Nancy</p>
            <h2 className="h-display mt-4">
              A Dallasite{" "}
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                Through and Through
              </span>
            </h2>
            <AnimatedDivider className="w-14 mt-6" />
            <div className="mt-10 space-y-5 body-p text-[15px] md:text-[16px] leading-[1.85]">
              <p>
                I did not become a REALTOR by accident. I spent decades watching
                this city grow, raising my family here, and waiting for the
                right moment. Real estate lets me combine everything I am good
                at &mdash; knowing Dallas, reading people, and making sure
                every detail is right.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-block text-[12px] tracking-button uppercase font-medium text-gold hover:text-goldDark transition-colors"
            >
              Read My Story &rarr;
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 6: ACCENT QUOTE (DARK) ───────────────────────── */}
      <section className="bg-charcoal px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            {/* Top decorative line */}
            <div className="mx-auto mb-8 h-px w-16 bg-gold" />

            <p
              className="text-3xl font-normal italic leading-relaxed text-white md:text-4xl lg:text-5xl"
              style={{
                fontFamily:
                  "var(--font-accent, 'Playfair Display', serif)",
              }}
            >
              Some people sell houses.
              <br />
              I help people{" "}
              <span className="text-gold">come home.</span>
            </p>

            {/* Bottom decorative line */}
            <div className="mx-auto mt-8 h-px w-16 bg-gold" />
          </Reveal>
        </div>
      </section>

      {/* ─── SECTION 7: BUY / SELL DUAL CARDS (LIGHT) ─────────────── */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buy Card */}
          <Reveal>
            <div className="group relative overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm">
              <BorderBeam
                size={250}
                duration={12}
                delay={0}
                colorFrom="#C8A97E"
                colorTo="#A8845A"
                borderWidth={1.5}
              />
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80"
                  alt="Happy couple standing in front of their new home"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4 pt-12">
                  <span className="text-[11px] tracking-label uppercase font-medium text-white">
                    For Buyers
                  </span>
                </div>
              </div>
              <div className="flex min-h-[220px] flex-col justify-between border border-bordr border-t-0 bg-white p-6 md:p-8">
                <div>
                  <h3 className="font-display text-[24px] md:text-[26px] text-darkText leading-tight mb-3">
                    Find the Right Home &mdash; Not Just Any Home
                  </h3>
                  <p className="body-p text-[14px] md:text-[15px]">
                    Finding the right home in Dallas takes more than browsing
                    listings. It takes someone who knows which streets to skip,
                    which neighborhoods are climbing, and what a listing photo
                    isn&apos;t showing you.
                  </p>
                </div>
                <Link
                  href="/buy"
                  className="mt-4 inline-block text-[12px] tracking-button uppercase font-medium text-gold hover:text-goldDark transition-colors"
                >
                  Start Your Search &rarr;
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Sell Card */}
          <Reveal delay={0.1}>
            <div className="group relative overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm">
              <BorderBeam
                size={250}
                duration={12}
                delay={6}
                colorFrom="#C8A97E"
                colorTo="#A8845A"
                borderWidth={1.5}
              />
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
                  alt="Beautifully staged bedroom — a seller-ready home"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 to-transparent p-4 pt-12">
                  <span className="text-[11px] tracking-label uppercase font-medium text-white">
                    For Sellers
                  </span>
                </div>
              </div>
              <div className="flex min-h-[220px] flex-col justify-between border border-bordr border-t-0 bg-white p-6 md:p-8">
                <div>
                  <h3 className="font-display text-[24px] md:text-[26px] text-darkText leading-tight mb-3">
                    Price It Right. Prep It Smart. Sell It Fast.
                  </h3>
                  <p className="body-p text-[14px] md:text-[15px]">
                    Most homes sit on the market because they were overpriced
                    from day one. I will price it based on what actually sold,
                    prep it for what buyers actually notice, and get it in front
                    of serious buyers fast.
                  </p>
                </div>
                <Link
                  href="/sell"
                  className="mt-4 inline-block text-[12px] tracking-button uppercase font-medium text-gold hover:text-goldDark transition-colors"
                >
                  Get Your Home Sold &rarr;
                </Link>
              </div>
            </div>
          </Reveal>
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

      {/* ─── SECTION 8: NEIGHBORHOODS GRID (LIGHT) ────────────────── */}
      <section className="section-pad bg-bgSection">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="label">Dallas Neighborhoods</p>
              <h2 className="h-display mt-4">
                The City I&apos;ve Called Home for{" "}
                <span
                  className="italic text-gold"
                  style={{
                    fontFamily:
                      "var(--font-accent, 'Playfair Display', serif)",
                  }}
                >
                  50+ Years
                </span>
              </h2>
              <p className="body-p mt-6 max-w-2xl mx-auto">
                From North Dallas to Colleyville, I know these streets and the
                stories behind them.
              </p>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {HOODS.slice(0, 4).map((hood, i) => (
              <Reveal key={hood.name} delay={i * 0.08}>
                <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-default">
                  <Image
                    src={hood.img}
                    alt={`${hood.name} neighborhood`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                    <h3 className="font-display font-medium text-[22px] md:text-[24px] text-white leading-[1.1]">
                      {hood.name}
                    </h3>
                    <div className="w-[30px] group-hover:w-[60px] h-[2px] bg-gold mt-2 mb-2 transition-all duration-500" />
                    <p className="text-[12px] text-white/80 font-light leading-[1.5] tracking-[0.02em]">
                      {hood.descriptor}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
            {HOODS.slice(4).map((hood, i) => (
              <Reveal key={hood.name} delay={(i + 4) * 0.08}>
                <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-default">
                  <Image
                    src={hood.img}
                    alt={`${hood.name} neighborhood`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                    <h3 className="font-display font-medium text-[22px] md:text-[24px] text-white leading-[1.1]">
                      {hood.name}
                    </h3>
                    <div className="w-[30px] group-hover:w-[60px] h-[2px] bg-gold mt-2 mb-2 transition-all duration-500" />
                    <p className="text-[12px] text-white/80 font-light leading-[1.5] tracking-[0.02em]">
                      {hood.descriptor}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="text-center text-[14px] font-light text-mediumText mt-14">
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

      {/* ─── SECTION 9: CTA (DARK) ────────────────────────────────── */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal overflow-hidden">
        {/* Gold sparkle / snow effect */}
        <CTASparkles />
        <div className="relative z-10 container-x max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Your Next Step</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              Tell Me What You Need.
              <br />
              <span
                className="italic text-gold"
                style={{
                  fontFamily:
                    "var(--font-accent, 'Playfair Display', serif)",
                }}
              >
                I&apos;ll Tell You What Actually Makes Sense.
              </span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              No sales pitch. No pressure. Just an honest conversation about
              your goals and a clear plan for how to get there.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="gold">
                Start a Conversation
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
