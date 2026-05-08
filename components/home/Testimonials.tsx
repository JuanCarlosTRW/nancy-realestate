import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-bgSection">
      <div className="container-x max-w-6xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-[45%_55%] overflow-hidden border border-gold/[0.12] shadow-warm"
            style={{ borderRadius: "4px", borderTop: "3px solid #C8A97E", background: "#FFFCF5" }}
          >
            {/* Left — property photo */}
            <div className="relative h-[280px] md:h-auto md:min-h-[460px]">
              <Image
                src="https://static.wixstatic.com/media/62f926_a22adc913a92483a81f67cd676406e51~mv2.png"
                alt="A home Nancy Musselman recently sold in the Dallas area"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Right — testimonial content */}
            <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-14">
              {/* Decorative quotation mark */}
              <span
                className="font-display absolute top-3 right-6 md:top-4 md:right-10 leading-none select-none pointer-events-none"
                style={{
                  fontSize: "clamp(80px, 9vw, 130px)",
                  color: "rgba(196, 169, 108, 0.18)",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="font-display italic relative z-10"
                style={{
                  fontSize: "clamp(1.05rem, 1.7vw, 1.35rem)",
                  lineHeight: 1.65,
                  color: "#1A1510",
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

              <div className="w-[60px] h-px bg-gold/40 mt-8" />

              <div className="mt-6">
                <p className="text-[0.8rem] tracking-[0.15em] uppercase font-semibold text-darkText">
                  Christina Keck
                </p>
                <p className="text-[0.7rem] tracking-[0.12em] uppercase mt-1.5" style={{ color: "#7A6A52" }}>
                  Business Development Officer
                  <span className="mx-2 text-gold/60">&middot;</span>
                  MH Title
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
