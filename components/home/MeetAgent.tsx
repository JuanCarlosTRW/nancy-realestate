import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import Reveal from "@/components/ui/Reveal";

const ABOUT_IMAGE =
  "https://static.wixstatic.com/media/62f926_e81e37a81dd94340b92c9d9db1eeae24~mv2.png";

export default function MeetAgent() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Portrait with soft gold halo — matches About page hero */}
        <Reveal>
          <div className="relative flex justify-center items-center w-full max-w-[460px] mx-auto">
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: "min(70vw, 420px)",
                height: "min(70vw, 420px)",
                background:
                  "radial-gradient(circle, rgba(200,169,126,0.55) 0%, rgba(200,169,126,0.35) 60%, rgba(200,169,126,0) 100%)",
              }}
            />
            <div
              className="relative z-10"
              style={{ width: "min(68vw, 400px)", aspectRatio: "4 / 5" }}
            >
              <Image
                src={ABOUT_IMAGE}
                alt="Nancy Musselman, Dallas real estate agent"
                fill
                sizes="(max-width: 768px) 68vw, 400px"
                className="object-cover object-top rounded-[2px] shadow-warmLg"
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
              Born and raised in Dallas. Two decades in accounting and human
              resources before real estate. Rooted in this city, grounded in
              faith, and driven by a genuine love for helping people find
              where they belong.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-[12px] tracking-button uppercase font-medium text-gold hover:text-goldDark transition-all"
              >
                <span>Start a conversation</span>
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
