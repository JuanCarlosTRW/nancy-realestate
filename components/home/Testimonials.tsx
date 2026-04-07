import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      className="section-pad bg-charcoal text-white relative"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(198,169,108,0.06) 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }}
    >
      <div className="container-x text-center mb-16 relative z-10">
        <p className="label">Kind Words</p>
        <h2 className="h-display mt-3 text-white">
          What Clients <span className="italic text-goldLight">Say</span>
        </h2>
      </div>
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="border border-white/10 p-10 md:p-12 bg-white/[0.02]"
          >
            <p className="font-display text-7xl text-gold leading-none">"</p>
            <p className="font-display italic text-2xl text-white/90 leading-relaxed -mt-4">
              {t.quote}
            </p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="font-display text-xl text-white">{t.name}</p>
              <p className="text-[11px] tracking-label uppercase font-semibold text-gold mt-1">
                {t.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
