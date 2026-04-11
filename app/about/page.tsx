import type { Metadata } from "next";
import Image from "next/image";
import ParallaxHero from "@/components/ui/ParallaxHero";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import Button from "@/components/ui/Button";
import { IMG, NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Nancy Musselman | Dallas Real Estate",
  description:
    "Meet Nancy Musselman, a Dallasite with 50+ years in the DFW Metroplex and 22 years of professional experience, now putting it all to work for her clients.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

const SKILLS = [
  {
    number: "01",
    title: "I Read People, Not Scripts",
    description:
      "Twenty-two years in HR taught me to listen before I speak, understand what someone actually needs (not just what they say), and navigate tough conversations without anyone feeling steamrolled. In real estate, that means better negotiations, smoother closings, and an agent who genuinely hears you.",
  },
  {
    number: "02",
    title: "Details Don\u2019t Slip Past Me",
    description:
      "Between my accounting background and growing up around construction, I see what most people miss. I catch the line items that don\u2019t add up in a contract and the foundation crack hiding behind fresh paint. You get a second set of eyes that\u2019s been trained to protect you.",
  },
  {
    number: "03",
    title: "Calm When It Counts",
    description:
      "Real estate transactions get stressful. Deals fall through, inspections surface surprises, timelines shift. I\u2019ve spent two decades handling high-pressure workplace situations with poise. You\u2019ll never see me panic \u2014 and that steadiness is contagious when things get complicated.",
  },
];

const NEIGHBORHOODS = [
  { name: "Bent Tree", tagline: "Preston Trails Golf Course & established family living", detail: "Where I helped my first buyers find their dream home." },
  { name: "Richardson", tagline: "Top-rated schools & Telecom Corridor opportunities", detail: "A city I\u2019ve watched evolve from quiet suburb to thriving hub." },
  { name: "Plano", tagline: "Legacy West, dining, and master-planned communities", detail: "From open fields to one of the best cities in Texas." },
  { name: "North Dallas", tagline: "Central location with quick access to everything", detail: "The neighborhood I know like the back of my hand." },
  { name: "Carrollton", tagline: "Affordable charm minutes from Dallas & Plano", detail: "One of DFW\u2019s best-kept secrets for value and community." },
  { name: "Preston Hollow", tagline: "Mature trees, estate lots, and quiet prestige", detail: "Where Dallas history lives on every street." },
  { name: "Frisco", tagline: "Explosive growth, new construction, and young energy", detail: "The fastest-growing city in America \u2014 and I\u2019ve watched every phase." },
  { name: "Flower Mound", tagline: "Lakeside living with top Lewisville ISD schools", detail: "Small-town feel with big-city convenience." },
  { name: "Grapevine", tagline: "Historic Main Street charm near DFW Airport", detail: "Wine trails, festivals, and real Texas character." },
  { name: "Colleyville", tagline: "Upscale suburban living in the heart of DFW", detail: "Where families put down roots and stay." },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ─── SECTION 1: PARALLAX HERO ─────────────────────────────── */}
      <ParallaxHero
        imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        imageAlt="Beautiful home exterior in Dallas Texas"
        overlayOpacity={0.5}
      >
        <p className="label mb-4 !text-gold">About Nancy</p>
        <h1
          className="font-display font-light text-white leading-[1.08] max-w-3xl mx-auto"
          style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}
        >
          Born Here. Raised Here.
          <br />
          <span className="italic text-gold">
            Ready to Help You Find Home Here.
          </span>
        </h1>
        <p className="mt-6 text-[15px] md:text-[16px] font-light text-white/80 max-w-xl mx-auto leading-[1.7]">
          Five decades of DFW roots. Twenty-two years of professional precision.
          <br className="hidden md:block" />
          A lifetime of wanting to do exactly this.
        </p>
      </ParallaxHero>

      {/* ─── SECTION 2: ORIGIN STORY ──────────────────────────────── */}
      <section className="section-pad bg-bgSection">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo — left */}
          <Reveal>
            <div className="relative w-full max-w-[460px] mx-auto">
              <div className="absolute -bottom-3 -right-3 h-full w-full border-2 border-gold/30 hidden md:block" />
              <div className="relative aspect-[3/4] overflow-hidden shadow-warmLg">
                <Image
                  src={IMG.nancy}
                  alt="Nancy Musselman, Dallas real estate agent"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>

          {/* Story — right */}
          <Reveal delay={0.15}>
            <p className="label">My Story</p>
            <h2 className="h-display mt-4">
              50+ Years of Watching{" "}
              <span className="italic text-gold">This City Become Home</span>
            </h2>
            <AnimatedDivider className="w-14 mt-6" />

            <div className="mt-10 space-y-5 body-p text-[15px] md:text-[16px] leading-[1.85]">
              <p>
                I was born and raised right where I live now. For over fifty
                years, I&apos;ve watched the DFW metroplex grow from open land
                into one of the most dynamic communities in Texas. I know which
                streets flood after a storm. I know which neighborhoods have
                transformed and which ones have stayed exactly the same. That
                kind of knowledge doesn&apos;t come from a license &mdash; it
                comes from living it.
              </p>
              <p>
                Before real estate, I spent 22 years in human resources and
                accounting. Two decades of reading people, navigating difficult
                conversations, catching details others miss, and staying composed
                under pressure. I didn&apos;t leave that career behind &mdash; I
                brought every bit of it with me.
              </p>
              <p>
                I always wanted to be a Realtor. But life, career, and raising
                my kids came first. Now my kids are grown, the timing was finally
                right, and I&apos;m doing what I&apos;ve always wanted to
                do &mdash; helping people find the right home in the city I know
                better than almost anyone.
              </p>
              <p>
                Rooted in my faith, grounded in this city, and driven by genuine
                love for helping people. That&apos;s who I am.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div
        className="mx-auto h-px w-full max-w-6xl"
        style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }}
      />

      {/* ─── ACCENT QUOTE ─────────────────────────────────────────── */}
      <section className="bg-charcoal px-6 py-16 md:py-20">
        <Reveal>
          <p
            className="mx-auto max-w-3xl text-center text-xl md:text-3xl lg:text-4xl font-normal italic leading-relaxed text-white/90"
            style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
          >
            &ldquo;I didn&apos;t start a new career.
            <br />
            I finally started the one{" "}
            <span className="text-gold">I was always meant for.</span>&rdquo;
          </p>
        </Reveal>
      </section>

      {/* ─── SECTION 3: SKILL CARDS ───────────────────────────────── */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">Why Work With Me</p>
              <h2 className="h-display mt-4">
                22 Years Before Real Estate{" "}
                <span className="italic text-gold">Made Me Better At It</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 text-[15px]">
                Most agents learn people skills on the job. I walked in with 22
                years of them.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill.number} delay={i * 0.12}>
                <div className="group relative h-full border border-bordr bg-white p-8 md:p-10 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-warm overflow-hidden">
                  <span className="block font-display text-[60px] font-extralight text-gold/20 mb-4 leading-none">
                    {skill.number}
                  </span>
                  <h3 className="font-display text-[22px] md:text-[24px] text-darkText leading-[1.2] mb-4">
                    {skill.title}
                  </h3>
                  <p className="body-p text-[14px] md:text-[15px] leading-[1.8]">
                    {skill.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div
        className="mx-auto h-px w-full max-w-6xl"
        style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }}
      />

      {/* ─── SECTION 4: NEIGHBORHOODS (DARK) ──────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label !text-gold">Where I Work</p>
              <h2
                className="font-display font-light text-white leading-[1.1] mt-4"
                style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
              >
                The Neighborhoods I Know{" "}
                <br className="hidden md:block" />
                <span
                  className="italic text-gold"
                  style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
                >
                  Because I&apos;ve Lived the Change
                </span>
              </h2>
              <div className="gold-divider w-16 mx-auto mt-8" />
              <p className="mt-6 text-[15px] font-light text-white/60">
                50+ years of watching DFW transform gives you a perspective no
                MLS search can replicate.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEIGHBORHOODS.map((hood, i) => (
              <Reveal key={hood.name} delay={i * 0.06}>
                <div className="group relative h-full border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/10 overflow-hidden">
                  <h3 className="font-display text-[20px] text-white leading-[1.2] mb-1">
                    {hood.name}
                  </h3>
                  <p className="text-[11px] tracking-label uppercase font-medium text-gold mb-2">
                    {hood.tagline}
                  </p>
                  <p className="text-[14px] font-light italic text-white/50 leading-[1.6]">
                    {hood.detail}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: TESTIMONIAL ───────────────────────────────── */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x max-w-3xl mx-auto">
          <Reveal>
            <div className="border border-bordr bg-white p-10 md:p-14 text-center shadow-sm">
              <p className="label mb-6">What My Clients Say</p>

              <span
                className="block text-[80px] md:text-[100px] font-light text-gold/30 leading-none -mb-4 select-none"
                style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote
                className="italic text-[20px] md:text-[24px] text-darkText leading-[1.6] mb-8"
                style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
              >
                Nancy made our dream home on the Preston Trails Golf Course in
                Bent Tree a reality. Her attention to detail, patience through
                every step, and genuine care for what we wanted made all the
                difference. She wasn&apos;t just our agent &mdash; she felt like
                family guiding us home.
              </blockquote>

              <div className="w-[60px] h-px bg-gold/40 mx-auto mb-5" />

              <p className="text-[13px] tracking-button uppercase font-medium text-darkText">
                Bent Tree Homebuyer
              </p>
              <p className="text-[11px] tracking-label uppercase text-gold mt-1 font-light">
                Preston Trails Golf Course, Dallas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div
        className="mx-auto h-px w-full max-w-6xl"
        style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }}
      />

      {/* ─── SECTION 6: CTA (DARK) ────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 bg-charcoal">
        <div className="container-x max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="label !text-gold">Let&apos;s Talk</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              Whether You&apos;re Buying, Selling,
              <br />
              <span className="italic text-gold">or Just Have Questions</span>
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              No pressure, no pitch. Just a real conversation about your goals
              and how I can help. I&apos;d love to hear what you&apos;re looking
              for.
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
