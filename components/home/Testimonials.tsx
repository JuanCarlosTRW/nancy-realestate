import Reveal from "@/components/ui/Reveal";

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
            <div className="gold-divider w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[0, 1].map((i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="relative h-full p-12 md:p-14 bg-bgSection rounded-[2px] border border-dashed border-gold/50">
                <p className="font-display text-[60px] text-gold/60 leading-none">
                  &ldquo;
                </p>
                <p className="font-display italic text-[20px] md:text-[22px] text-darkText/80 leading-[1.5] -mt-4">
                  Client testimonial coming soon — check back shortly.
                </p>
                <div className="mt-10 pt-6 border-t border-bordr flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30" />
                  <div>
                    <p className="font-display text-[18px] text-darkText/70">
                      Reserved
                    </p>
                    <p className="text-[10px] tracking-label uppercase font-medium text-gold mt-1">
                      Dallas, TX
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="text-center text-[12px] tracking-wide font-light text-lightText italic mt-12">
            Reviews being collected. More coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
