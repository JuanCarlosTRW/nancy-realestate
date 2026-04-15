import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import Reveal from "@/components/ui/Reveal";
import { IMG } from "@/lib/constants";

export default function MeetAgent() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Contained portrait with warm frame */}
        <Reveal>
          <div className="relative w-full max-w-[460px] mx-auto">
            <div className="absolute -inset-4 border border-gold/30 rounded-[2px] hidden md:block" />
            <div className="relative aspect-[4/5] bg-cream rounded-[2px] overflow-hidden shadow-warmLg">
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

        <div>
          <Reveal>
            <p className="label">About Nancy</p>
            <h2 className="h-display mt-4">
              A Dallasite{" "}
              <span className="italic text-gold">Through and Through</span>
            </h2>
            <AnimatedDivider className="mt-6 w-16" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-p mt-8">
              I did not become a REALTOR by accident. I spent decades watching
              this city grow, raising my family here, and waiting for the right
              moment. Real estate lets me combine everything I am good
              at. Knowing Dallas, reading people, and making sure
              every detail is right.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-[12px] tracking-button uppercase font-medium text-gold hover:text-goldDark transition-all"
              >
                <span>Read my story</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
