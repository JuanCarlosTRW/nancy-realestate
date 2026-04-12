import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function Testimonials() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="label">A Kind Word</p>
            <h2 className="h-display mt-4">
              What Clients <span className="italic text-gold">Are Saying</span>
            </h2>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[45%_55%] gap-0 overflow-hidden">
            {/* Left — property photo */}
            <div className="relative h-[250px] md:h-auto md:min-h-[450px]">
              <Image
                src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&q=80"
                alt="Bent Tree neighborhood, Dallas"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Right — testimonial content */}
            <div className="bg-warmWhite p-8 md:p-14 lg:pl-14 lg:pr-16 flex flex-col justify-center relative">
              {/* Decorative quotation mark */}
              <span
                className="font-display text-[80px] md:text-[120px] text-goldLight/30 leading-none select-none absolute top-4 md:top-6 right-6 md:right-10 pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <p
                className="font-display italic text-darkText leading-[1.6] relative z-10"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
              >
                Nancy helped us find our home on the Preston Trails Golf Course
                in Bent Tree. She was incredibly detail-oriented &mdash; she caught
                things during walkthroughs that we never would have noticed. She
                made us feel like we were her only clients.
              </p>

              <div className="w-[60px] h-px bg-gold/30 mt-8" />

              <div className="mt-6">
                <p className="text-[13px] tracking-[0.15em] uppercase font-semibold text-darkText">
                  The Martinez Family
                </p>
                <p className="text-[11px] tracking-[0.1em] uppercase text-goldLight mt-1">
                  Homeowners &mdash; Preston Trails, Bent Tree
                </p>
              </div>

              {/* Client photo placeholder */}
              <div className="mt-8">
                {/* PLACEHOLDER: Replace with Martinez family photo */}
                <div className="w-[60px] h-[60px] rounded-full border-2 border-gold bg-bordr/50 overflow-hidden" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
