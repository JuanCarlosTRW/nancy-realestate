import Image from "next/image";
import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import Reveal from "@/components/ui/Reveal";
import { IMG } from "@/lib/constants";

export default function MeetAgent() {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Contained portrait */}
        <Reveal>
          <div className="relative w-full max-w-[440px] mx-auto aspect-[4/5] bg-cream">
            <Image
              src={IMG.nancy}
              alt="Nancy, Dallas real estate advisor"
              fill
              sizes="(max-width: 768px) 100vw, 440px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="label">Meet Your Agent</p>
            <h2 className="h-display mt-3">
              Real Estate,{" "}
              <span className="italic text-gold">Done Personally</span>
            </h2>
            <GoldDivider className="mt-6" />
          </Reveal>
          <Reveal delay={0.1}>
            {/* REPLACE WITH REAL CONTENT */}
            <p className="body-p mt-8">
              I got into real estate because I love helping people navigate one
              of the biggest decisions of their lives. Buying or selling a home
              can feel overwhelming, and I believe having someone in your
              corner who genuinely cares makes all the difference.
            </p>
            {/* REPLACE WITH REAL CONTENT */}
            <p className="body-p mt-4">
              I&apos;m not the agent who&apos;s going to pressure you or rush
              you. I listen, I communicate, and I make sure you feel confident
              every step of the way. Whether you&apos;re a first-time buyer or
              you&apos;ve done this before, my job is to make the process as
              smooth and stress-free as possible.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-bordr">
              {/* REPLACE WITH REAL CONTENT */}
              {[
                { n: "50+", l: "Homes Sold" },
                { n: "5+", l: "Years Experience" },
                { n: "$15M+", l: "In Sales Volume" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-display text-4xl text-gold">{s.n}</p>
                  <p className="text-[10px] tracking-label uppercase font-semibold text-lightText mt-2">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Learn More About Nancy
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
