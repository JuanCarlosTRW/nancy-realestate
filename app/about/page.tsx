import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Eye } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import AboutHero from "@/components/about/AboutHero";
import { IMG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Nancy Musselman | Dallas Real Estate",
  description:
    "Meet Nancy Musselman — a Dallasite with 50+ years in the DFW Metroplex and 22 years of HR experience, now putting it all to work for her clients.",
};

const FACTS = [
  {
    icon: MapPin,
    title: "50+ Years in DFW",
    body: "Born and raised here. I know this city on a personal level.",
  },
  {
    icon: Users,
    title: "22 Years in HR",
    body: "Trained in composure, communication, and navigating complexity.",
  },
  {
    icon: Eye,
    title: "Raised Around Construction",
    body: "I notice what others miss — inside and outside a home.",
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
                  years, I&apos;ve watched the DFW Metroplex grow — the
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
                <p>
                  Before I became a REALTOR, I spent 22 years in human
                  resources. That career taught me how to navigate complex,
                  high-stakes, emotionally charged situations with composure
                  and professionalism — skills that translate directly to
                  buying and selling homes.
                </p>
                <p>
                  I was also raised around construction, which means I see
                  things that other agents walk right past. I notice the
                  details. I ask the questions that matter.
                </p>
                <p>
                  Becoming a REALTOR was something I always wanted to do. I
                  waited until the timing was right — until my kids were grown
                  and I could give it everything. Now I&apos;m doing it, and I
                  love it. If you&apos;re thinking about buying or selling in
                  the DFW area, I&apos;d love to help.
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

      {/* Quick facts */}
      <section className="section-pad bg-warmWhite">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="label">Quick Facts</p>
              <h2 className="h-display mt-4">
                What I Bring{" "}
                <span className="italic text-gold">to the Table</span>
              </h2>
              <GoldDivider className="mt-8 w-16" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FACTS.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={f.title} delay={i * 0.12}>
                  <div className="h-full p-10 bg-bgSection border border-bordr rounded-[2px] shadow-warm text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/40 rounded-full mb-6">
                      <Icon size={20} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl text-darkText">
                      {f.title}
                    </h3>
                    <GoldDivider className="mt-5 w-10 mx-auto" />
                    <p className="body-p mt-6">{f.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
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
