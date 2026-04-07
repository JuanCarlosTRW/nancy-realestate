import type { Metadata } from "next";
import MinimalistAboutHero from "@/components/ui/minimalist-hero";
import GoldDivider from "@/components/ui/GoldDivider";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import CTABanner from "@/components/layout/CTABanner";
import { IMG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Nancy | Dallas Real Estate",
  description:
    "More than an agent. Your advocate. Get to know Nancy, your Dallas real estate guide.",
};

export default function AboutPage() {
  return (
    <>
      <MinimalistAboutHero />

      <section id="bio" className="section-pad bg-warmWhite">
        <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <PlaceholderImage
            src={IMG.agentTall}
            alt="Nancy"
            className="aspect-[4/5] w-full"
          />
          <div>
            <p className="label">The Story</p>
            <h2 className="h-display mt-3">
              [PLACEHOLDER — <span className="italic text-gold">A Headline About Nancy</span>]
            </h2>
            <GoldDivider className="mt-6" />
            <p className="body-p mt-8">
              [PLACEHOLDER — Nancy's origin story. Where she grew up, what
              brought her to Dallas, what brought her to real estate.]
            </p>
            <p className="body-p mt-4">
              [PLACEHOLDER — Her philosophy and approach with clients.]
            </p>
            <p className="body-p mt-4">
              [PLACEHOLDER — Personal note: family, hobbies, what she loves
              about Dallas.]
            </p>

            <div className="mt-10 p-8 bg-bgSection border border-bordr">
              <p className="text-[11px] tracking-label uppercase font-semibold text-gold mb-4">
                Credentials
              </p>
              <ul className="space-y-2 text-[14px] text-mediumText font-light">
                <li>License: [TX #XXXXXXX]</li>
                <li>Certifications: [PLACEHOLDER]</li>
                <li>Member: [Greater Dallas Association of REALTORS]</li>
                <li>Brokerage: [PLACEHOLDER Brokerage Name]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bgSection">
        <div className="container-x text-center mb-16">
          <p className="label">The Promise</p>
          <h2 className="h-display mt-3">
            What You Can <span className="italic text-gold">Count On</span>
          </h2>
        </div>
        <div className="container-x grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Clear Communication", d: "Honest updates, fast replies, no jargon. You always know where things stand." },
            { t: "Your Goals First", d: "I work for you — not the deal. The right move is the one that fits your life." },
            { t: "Honest Guidance", d: "If a home isn't right or a price isn't fair, I'll tell you. Even if it costs me the deal." },
          ].map((v) => (
            <div
              key={v.t}
              className="bg-warmWhite p-10 border border-bordr text-center"
            >
              <h3 className="font-display text-2xl text-darkText">{v.t}</h3>
              <GoldDivider className="mx-auto mt-4" />
              <p className="body-p mt-6">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
