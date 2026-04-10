import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="label">Kind Words</p>
            <h2 className="h-display mt-4">
              What Clients <span className="italic text-gold">Are Saying</span>
            </h2>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 bg-bgSection border border-gold/30 rounded-[2px] shadow-warm overflow-hidden">
            {/* Client photo placeholder */}
            <div className="relative h-[280px] md:h-auto min-h-[360px]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(145deg, #D4B896 0%, #C8A97E 35%, #A8845A 70%, #8B7355 100%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/15 border border-white/30 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-white text-[28px]">
                      M
                    </span>
                  </div>
                  <p className="text-[11px] tracking-button uppercase font-medium text-white/70">
                    Client Photo
                  </p>
                  <p className="text-[10px] text-white/50 mt-1">Coming Soon</p>
                </div>
              </div>
            </div>

            {/* Testimonial content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <Quote
                size={36}
                className="text-gold/40 mb-6"
                strokeWidth={1}
              />
              <p className="font-display italic text-[20px] md:text-[24px] text-darkText leading-[1.5]">
                Nancy made the entire process of buying our home in Bent Tree
                incredibly smooth. She was detail-oriented, always available, and
                made us feel taken care of every step of the way.
              </p>
              <AnimatedDivider className="w-12 mt-8" />
              <div className="mt-6">
                <p className="text-[12px] tracking-button uppercase font-medium text-darkText">
                  The Martinez Family
                </p>
                <p className="text-[11px] tracking-label uppercase font-medium text-gold mt-1">
                  Bought their home in Bent Tree
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
