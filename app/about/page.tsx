import type { Metadata } from "next";
import MinimalistHero from "@/components/about/MinimalistHero";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import Button from "@/components/ui/Button";
import { NANCY_PHONE, NANCY_PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Nancy Musselman | Dallas Real Estate",
  description:
    "Meet Nancy Musselman, a Dallasite with 50+ years in the DFW Metroplex and two decades of professional experience, now putting it all to work for her clients.",
};

/* ── Data ──────────────────────────────────────────────────────────── */

const SKILLS = [
  {
    number: "01",
    title: "Listening Before Speaking",
    description:
      "My years of professional experience taught me to listen before I talk, understand what someone actually needs, and work through hard conversations without anyone feeling pushed. In real estate, that shows up in calmer negotiations, smoother closings, and conversations where you always feel heard.",
  },
  {
    number: "02",
    title: "An Eye for Seeing Things Others Don\u2019t",
    description:
      "I was raised around construction, which gave me an eye for seeing things others don\u2019t. The line item in a contract that doesn\u2019t quite add up. The small thing in a walkthrough that\u2019s worth a second look. It\u2019s a quiet kind of care, but it\u2019s the kind that tends to matter most later on.",
  },
  {
    number: "03",
    title: "Steady Hands in a Stressful Process",
    description:
      "Real estate can get stressful. Deals shift, inspections surface things, timelines move. Decades of professional experience taught me how to handle tough situations gracefully and with poise \u2014 and that calm tends to rub off on the people I\u2019m working with when things get complicated.",
  },
];

/* ── Page ───────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ─── SECTION 1: MINIMALIST HERO ───────────────────────────── */}
      <MinimalistHero
        mainText="A people person, a master at multitasking, and always the one who wants to help. Rooted in this city, grounded in faith, and happy to finally be doing something I&rsquo;ve wanted to do for years."
        readMoreLabel="Start a conversation"
        readMoreHref="/contact"
        imageSrc="https://static.wixstatic.com/media/62f926_e81e37a81dd94340b92c9d9db1eeae24~mv2.png"
        imageAlt="Nancy Musselman, Dallas real estate agent"
        overlayText={{ part1: "meet", part2: "nancy." }}
        locationText="Dallas, Texas"
      />

      {/* ─── PULL QUOTE STRIP ─────────────────────────────────────── */}
      <section className="bg-bgSection px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="container-x max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="label">The Person Behind the License</p>
            <AnimatedDivider className="w-14 mx-auto mt-6" />
            <p className="mt-10 text-[15px] md:text-[16px] font-light leading-[1.85] text-mediumText max-w-2xl mx-auto">
              I wanted to be a REALTOR<sup>&reg;</sup> for years, but between
              my career and raising a family, the timing never worked out. My
              decades of professional experience taught me how to read people,
              catch every detail, and handle tough situations gracefully and
              with poise. My kids are grown now, the timing is right. Families
              find their dream homes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Gold divider ─────────────────────────────────────────── */}
      <div
        className="mx-auto h-px w-full max-w-4xl"
        style={{ background: "linear-gradient(90deg, transparent, #C8A97E, transparent)" }}
      />

      {/* ─── ACCENT QUOTE ─────────────────────────────────────────── */}
      <section className="bg-charcoal px-6 py-12 md:py-16">
        <Reveal>
          <p
            className="mx-auto max-w-3xl text-center text-2xl md:text-4xl lg:text-5xl font-normal italic leading-relaxed text-white"
            style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
          >
            Some people sell houses.
            <br />
            I help people{" "}
            <span className="text-gold">come home.</span>
          </p>
        </Reveal>
      </section>

      {/* ─── SECTION 3: SKILL CARDS ───────────────────────────────── */}
      <section className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warmWhite">
        <div className="container-x max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">The Edge</p>
              <h2 className="h-display mt-4">
                Years of Reading People and Catching Details.
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
              <p className="body-p mt-6 text-[15px]">
                Before I ever opened a lockbox, I spent years in careers where
                paying attention to people and details was part of every day.
              </p>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            {SKILLS.map((skill, i) => (
              <Reveal key={skill.number} delay={i * 0.12}>
                <div
                  className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 md:gap-6 items-start py-8 md:py-10"
                  style={i < SKILLS.length - 1 ? { borderBottom: "1px solid rgba(196, 169, 108, 0.15)" } : {}}
                >
                  <h3 className="font-display text-[1.3rem] text-darkText leading-[1.2]" style={{ fontWeight: 500 }}>
                    {skill.title}
                  </h3>
                  <p className="text-[0.9rem] font-light leading-[1.8]" style={{ color: "#2A211C" }}>
                    {skill.description}
                  </p>
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
            <p className="label !text-gold">Your Next Move</p>
            <h2
              className="font-display font-light text-white leading-[1.1] mt-4 max-w-[700px] mx-auto"
              style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
            >
              The Right Agent Makes the Difference.
            </h2>
            <p className="mt-6 text-[15px] font-light text-white/70 leading-[1.8] max-w-lg mx-auto">
              No pressure. No pitch. Just a real conversation about what you
              need and how I can help you get there.
            </p>
            <div className="mt-10">
              <Button href="/contact" variant="gold">
                Start a Conversation
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
