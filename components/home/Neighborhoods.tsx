import { NEIGHBORHOODS } from "@/lib/constants";

export default function Neighborhoods() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x text-center mb-16">
        <p className="label">Where I Work</p>
        <h2 className="h-display mt-3">
          Dallas <span className="italic text-gold">Neighborhoods</span>
        </h2>
      </div>
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
        {NEIGHBORHOODS.map((n) => (
          <div
            key={n}
            className="bg-warmWhite border border-bordr p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold"
          >
            <p className="font-display text-2xl text-darkText">{n}</p>
            <p className="text-[10px] tracking-label uppercase font-semibold text-gold mt-2">
              Dallas, TX
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
