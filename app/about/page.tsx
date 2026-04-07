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
            src={IMG.nancy}
            alt="Nancy"
            className="aspect-[4/5] w-full max-w-[480px]"
          />
          <div>
            <p className="label">The Story</p>
            {/* REPLACE WITH REAL CONTENT */}
            <h2 className="h-display mt-3">
              Helping Dallas Families{" "}
              <span className="italic text-gold">Find Home</span>
            </h2>
            <GoldDivider className="mt-6" />
            {/* REPLACE WITH REAL CONTENT */}
            <p className="body-p mt-8">
              I didn&apos;t come from a real estate dynasty or a big-name
              brokerage. I got into this business because I genuinely enjoy
              helping people find the right home — and I believe everyone
              deserves an agent who puts their needs first, not the commission.
            </p>
            {/* REPLACE WITH REAL CONTENT */}
            <p className="body-p mt-4">
              When I&apos;m not showing homes or negotiating contracts,
              you&apos;ll find me exploring Dallas neighborhoods, discovering
              new restaurants, and spending time with the people I love. I
              bring that same energy to my work — real, personal, and always
              in your corner.
            </p>
            {/* Credentials box hidden until real data is available */}
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
