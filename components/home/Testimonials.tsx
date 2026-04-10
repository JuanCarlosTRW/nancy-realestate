import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

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
          <div className="max-w-[600px] mx-auto relative p-12 md:p-14 bg-bgSection rounded-[2px] border border-gold/30 shadow-warm">
            <p className="font-display text-[72px] text-gold/50 leading-none absolute top-6 left-8">
              &ldquo;
            </p>
            <p className="font-display italic text-[19px] md:text-[21px] text-darkText leading-[1.55] mt-6 relative z-10">
              Nancy made the entire process of buying our home in Bent Tree
              incredibly smooth. She was detail-oriented, always available,
              and made us feel taken care of every step of the way.
            </p>
            <AnimatedDivider className="w-12 mt-8" />
            <div className="mt-6 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                <span className="font-display text-gold text-[14px]">C</span>
              </div>
              <div>
                <p className="text-[11px] tracking-button uppercase font-medium text-darkText">
                  Client
                </p>
                <p className="text-[10px] tracking-label uppercase font-medium text-gold mt-0.5">
                  Bent Tree · Dallas, TX
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
