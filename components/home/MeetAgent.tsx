import Image from "next/image";
import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import Reveal from "@/components/ui/Reveal";
import { IMG } from "@/lib/constants";

export default function MeetAgent() {
  return (
    <section className="bg-warmWhite py-20 md:py-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-10 md:gap-20 items-center">
        {/* Full-bleed photo on the left */}
        <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-[720px]">
          <Image
            src={IMG.agentTall}
            alt="Nancy, Dallas real estate advisor"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="px-6 md:px-12 lg:pr-20 max-w-2xl">
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
              With deep roots in the Dallas community and a passion for
              connecting people with the right home, Nancy brings a personal
              touch to every transaction. Her clients aren&apos;t just deals —
              they&apos;re relationships built on trust.
            </p>
            {/* REPLACE WITH REAL CONTENT */}
            <p className="body-p mt-4">
              Whether you&apos;re a first-time buyer navigating an unfamiliar
              market or a seasoned seller looking for top dollar, Nancy&apos;s
              approach is the same: listen first, strategize second, and
              deliver results that speak for themselves.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mt-10 py-8 border-y border-bordr">
              {[
                { n: "[XX]+", l: "Homes Sold" },
                { n: "[XX]", l: "Years Experience" },
                { n: "[X]M+", l: "In Sales Volume" },
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
