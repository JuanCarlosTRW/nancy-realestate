import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Eye } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AboutHero from "@/components/about/AboutHero";
import { IMG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Nancy Musselman | Dallas Real Estate",
  description:
    "Meet Nancy Musselman, a Dallasite with 50+ years in the DFW Metroplex and 22 years of professional experience, now putting it all to work for her clients.",
};

const FACTS = [
  {
    num: "01",
    icon: MapPin,
    title: "50+ Years in DFW",
    body: "I have watched neighborhoods transform over decades. I know which areas are rising, which are overpriced, and which streets to avoid. This is not research. It is a lifetime of paying attention.",
  },
  {
    num: "02",
    icon: Users,
    title: "22 Years in Accounting and HR",
    body: "Two decades of managing numbers, managing people, and managing difficult situations. Precision from accounting. Composure from HR. That training shows up every time a deal gets complicated.",
  },
  {
    num: "03",
    icon: Eye,
    title: "Raised Around Construction",
    body: "I grew up on job sites. I see the foundation crack other agents step right over. I spot the patch job on the ceiling. When I walk through a home, I am reading the building, not just the listing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Bio: two-column text + photo */}
      <section className="section-pad bg-bgSection">
        <div className="container-x grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 items-start">
          <div>
            <Reveal>
              <p className="label">My Story</p>
              <h2 className="h-display mt-4">
                Born Here.{" "}
                <span className="italic text-gold">Still Here.</span>
              </h2>
              <GoldDivider className="mt-6 w-14" />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 space-y-6 body-p text-[16px]">
                <p>
                  I was born and raised right where I live now. For over 50
                  years, I&apos;ve watched the DFW Metroplex grow. The
                  neighborhoods, the highways, the communities. This isn&apos;t
                  a market I studied. It&apos;s the city I grew up in.
                </p>
                <p>
                  People who know me say I&apos;m always the one who wants to
                  help. That&apos;s always been true. I&apos;m a natural
                  multitasker, detail-oriented, and I don&apos;t get rattled
                  easily. That last part matters more than most people realize
                  in real estate.
                </p>

                <blockquote className="border-l-2 border-gold/40 pl-6 my-10">
                  <p className="font-display italic text-[22px] md:text-[26px] text-gold/80 leading-[1.4]">
                    &ldquo;I don&apos;t get rattled easily. That last part
                    matters more than most people realize in real estate.&rdquo;
                  </p>
                </blockquote>

                <p>
                  Before I became a REALTOR, I spent over two decades in
                  accounting and human resources. That career taught me how to navigate complex,
                  high-stakes, emotionally charged situations with composure
                  and professionalism. Skills that translate directly to
                  buying and selling homes.
                </p>
                <p>
                  I was also raised around construction, which means I see
                  things that other agents walk right past. I notice the
                  details. I ask the questions that matter.
                </p>

                <blockquote className="border-l-2 border-gold/40 pl-6 my-10">
                  <p className="font-display italic text-[22px] md:text-[26px] text-gold/80 leading-[1.4]">
                    &ldquo;I notice the details. I ask the questions that
                    matter.&rdquo;
                  </p>
                </blockquote>

                <p>
                  Becoming a REALTOR was something I always wanted to do. I
                  waited until the timing was right. Until my kids were grown
                  and I could give it everything. Now I&apos;m doing it, and I
                  love it. If you&apos;re thinking about buying or selling in
                  the DFW area, I&apos;d love to help.
                </p>

                {/* Visual break before personal paragraph */}
                <div className="w-16 h-px bg-gold/25 mx-auto my-10" />

                <p>
                  When I am not helping clients, you will probably find me on a
                  long walk, spending time with family and friends, or planning
                  my next trip. I love country and western music, jazz, and I am
                  rooted in my faith. That is who I am outside of real estate,
                  and it is the same person you get when we work together.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative w-full max-w-[440px] mx-auto md:sticky md:top-28">
              <div className="absolute -inset-4 border border-gold/30 rounded-[2px] hidden md:block" />
              <div className="relative aspect-[4/5] bg-cream rounded-[2px] overflow-hidden shadow-warmLg">
                <Image
                  src={IMG.nancy}
                  alt="Nancy Musselman"
                  fill
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What I Bring to the Table — Pillar format */}
      <section className="relative">
        <div className="pt-20 md:pt-28 pb-6 md:pb-8 px-6 md:px-12 lg:px-20 bg-warmWhite">
          <div className="container-x">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <p className="label">Quick Facts</p>
                <h2 className="h-display mt-4">
                  What I Bring{" "}
                  <span className="italic text-gold">to the Table</span>
                </h2>
                <GoldDivider className="mt-8 w-16" />
              </div>
            </Reveal>
          </div>
        </div>

        {FACTS.map((f, i) => {
          const Icon = f.icon;
          const isAlt = i % 2 === 1;
          return (
            <div
              key={f.num}
              className={isAlt ? "bg-bgSection" : "bg-warmWhite"}
            >
              <div className="container-x py-14 md:py-20 px-6 md:px-12 lg:px-20">
                <Reveal delay={i * 0.12}>
                  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12 items-start max-w-4xl">
                    {/* Left: Number + Icon */}
                    <div className="flex md:flex-col items-center md:items-center gap-4 md:gap-3">
                      <span className="font-display text-[56px] md:text-[72px] text-gold/20 leading-none font-light select-none">
                        {f.num}
                      </span>
                      <div className="inline-flex items-center justify-center w-11 h-11 border border-gold/40 rounded-full">
                        <Icon size={18} className="text-gold" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Right: Heading + Body */}
                    <div>
                      <h3 className="font-display text-[28px] md:text-[36px] lg:text-[42px] text-darkText leading-[1.15]">
                        {f.title}
                      </h3>
                      <AnimatedDivider className="w-12 mt-6" />
                      <p className="body-p mt-8 text-[16px] md:text-[17px] leading-[1.8] max-w-2xl">
                        {f.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* Warm CTA */}
      <section className="section-pad bg-bgSection text-center">
        <div className="container-x max-w-2xl">
          <h2 className="h-display">
            Let&apos;s Start With{" "}
            <span className="italic text-gold">a Conversation</span>
          </h2>
          <GoldDivider className="mt-6 w-16 mx-auto" />
          <p className="body-p mt-8">
            No commitment, no pressure. Just tell me what you&apos;re thinking.
          </p>
          <div className="mt-10">
            <Button href="/contact">Contact Nancy</Button>
          </div>
        </div>
      </section>
    </>
  );
}
