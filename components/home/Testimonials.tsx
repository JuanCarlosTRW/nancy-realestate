import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-bgSection">
      <div className="container-x max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[0.65rem] font-medium tracking-[0.25em] uppercase text-gold">
              A Kind Word
            </p>
            <h2
              className="font-display font-normal text-darkText mt-4"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
            >
              From a Trusted{" "}
              <span
                className="italic text-gold"
                style={{ fontFamily: "var(--font-accent, 'Playfair Display', serif)" }}
              >
                Industry Partner
              </span>
            </h2>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative overflow-hidden border border-gold/20 shadow-warmLg"
            style={{ borderRadius: "4px", borderTop: "3px solid #C8A97E" }}
          >
            {/* Background — house image */}
            <div className="relative w-full min-h-[520px] md:min-h-[560px]">
              <Image
                src="https://static.wixstatic.com/media/62f926_a22adc913a92483a81f67cd676406e51~mv2.png"
                alt="A home Nancy Musselman recently sold"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority={false}
              />

              {/* Light brown wash — keeps photo visible underneath */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(74, 56, 38, 0.78) 0%, rgba(120, 90, 60, 0.68) 50%, rgba(160, 125, 85, 0.55) 100%)",
                }}
              />

              {/* Subtle vignette for legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(40, 28, 18, 0.35) 100%)",
                }}
              />

              {/* Decorative quotation mark */}
              <span
                className="font-display absolute leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(140px, 18vw, 240px)",
                  color: "rgba(245, 230, 200, 0.18)",
                  top: "0.5rem",
                  left: "1.5rem",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Content overlay */}
              <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-16 md:px-16 md:py-20 lg:px-24 min-h-[520px] md:min-h-[560px]">
                <p
                  className="font-display italic max-w-2xl"
                  style={{
                    fontSize: "clamp(1.05rem, 1.9vw, 1.5rem)",
                    lineHeight: 1.65,
                    color: "#FBF5E8",
                    textShadow: "0 2px 24px rgba(40, 28, 18, 0.6)",
                  }}
                >
                  Working with Nancy has been an outstanding experience. She is
                  professional, knowledgeable, and genuinely cares about her
                  clients every step of the way. From contract to closing, she
                  stays proactive, communicates clearly, and makes the entire
                  process feel seamless. Her clients are truly in great hands,
                  and it&rsquo;s a pleasure partnering with her on transactions.
                  We highly recommend her to anyone looking for a trusted real
                  estate professional.
                </p>

                <div
                  className="mt-10 mx-auto"
                  style={{
                    width: "60px",
                    height: "1px",
                    background: "rgba(232, 205, 156, 0.6)",
                  }}
                />

                <div className="mt-6">
                  <p
                    className="font-display italic"
                    style={{
                      fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
                      color: "#F2DDB0",
                      fontFamily: "var(--font-accent, 'Playfair Display', serif)",
                      letterSpacing: "0.01em",
                      textShadow: "0 2px 18px rgba(40, 28, 18, 0.55)",
                    }}
                  >
                    Christina
                  </p>
                  <p
                    className="text-[0.7rem] tracking-[0.25em] uppercase font-medium mt-2"
                    style={{ color: "rgba(245, 225, 188, 0.85)" }}
                  >
                    MH Title
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
