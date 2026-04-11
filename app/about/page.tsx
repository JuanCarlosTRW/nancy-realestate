import type { Metadata } from "next";
import Image from "next/image";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AboutHero from "@/components/about/AboutHero";
import InteractiveSplitSection from "@/components/ui/InteractiveSplitSection";
import { IMG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Nancy Musselman | Dallas Real Estate",
  description:
    "Meet Nancy Musselman, a Dallasite with 50+ years in the DFW Metroplex and 22 years of professional experience, now putting it all to work for her clients.",
};

const SPLIT_ITEMS = [
  {
    label: "50+ Years in DFW",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dallas skyline and residential neighborhood",
    description:
      "I have watched neighborhoods transform over decades. I know which areas are rising, which are overpriced, and which streets to avoid. This is not research. It is a lifetime of paying attention.",
    pullQuote: "This is not research. It is a lifetime of paying attention.",
  },
  {
    label: "22 Years in Accounting and HR",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Professional workspace environment",
    description:
      "Two decades of managing numbers, managing people, and managing difficult situations. Precision from accounting. Composure from HR. That training shows up every time a deal gets complicated.",
    pullQuote: "Precision from accounting. Composure from HR.",
  },
  {
    label: "Raised Around Construction",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Home exterior craftsman detail",
    description:
      "I grew up on job sites. I see the foundation crack other agents step right over. I spot the patch job on the ceiling. When I walk through a home, I am reading the building, not just the listing.",
    pullQuote:
      "When I walk through a home, I am reading the building, not just the listing.",
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
                    &ldquo;Most agents have never had to fire someone, deliver
                    hard news to a boardroom, or hold a company together through
                    a crisis. I have.&rdquo;
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
                    &ldquo;Other agents see a beautiful kitchen. I see the patch
                    job on the ceiling and the foundation crack behind the
                    pantry.&rdquo;
                  </p>
                </blockquote>

                <p>
                  Becoming a REALTOR was something I always wanted to do. I
                  waited until the timing was right. Until my kids were grown
                  and I could give it everything. Now I&apos;m doing it, and I
                  love it. If you&apos;re thinking about buying or selling in
                  the DFW area, I&apos;d love to help.
                </p>

                {/* Second Nancy photo — contextual/casual */}
                <div className="mt-12 mb-10">
                  <div className="relative w-full max-w-[500px] aspect-[3/2] overflow-hidden border border-bordr">
                    <Image
                      src={IMG.nancy}
                      alt="Nancy Musselman in Dallas"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Visual break before personal paragraph */}
                <div className="w-20 h-px bg-gold/25 mx-auto mt-6 mb-6" />

                <div className="border-l-2 border-gold/20 pl-6">
                  <p>
                    When I am not helping clients, you will probably find me on a
                    long walk, spending time with family and friends, or planning
                    my next trip. I love country and western music, jazz, and I am
                    rooted in my faith. That is who I am outside of real estate,
                    and it is the same person you get when we work together.
                  </p>
                </div>
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

      {/* What I Bring to the Table — Interactive Split */}
      <InteractiveSplitSection
        sectionLabel="Quick Facts"
        sectionTitle="What I Bring"
        sectionTitleAccent="to the Table"
        items={SPLIT_ITEMS}
      />

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
          <p className="font-display italic text-[18px] text-goldLight mt-6">
            If I am not the right fit, I will tell you that too.
          </p>
          <div className="mt-10">
            <Button href="/contact">Contact Nancy</Button>
          </div>
        </div>
      </section>
    </>
  );
}
