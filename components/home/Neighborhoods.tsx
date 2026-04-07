import Image from "next/image";

const HOODS = [
  {
    name: "Highland Park",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Preston Hollow",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Lakewood",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Uptown",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Neighborhoods() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x text-center mb-16">
        <p className="label">Where I Work</p>
        <h2 className="h-display mt-3">
          Dallas <span className="italic text-gold">Neighborhoods</span>
        </h2>
      </div>
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {HOODS.map((n) => (
          <article
            key={n.name}
            className="group relative h-[280px] md:h-[400px] overflow-hidden cursor-pointer border-b-2 border-transparent hover:border-gold transition-all duration-500"
          >
            <Image
              src={n.img}
              alt={n.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/70" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
              <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
                {n.name}
              </h3>
              <p className="text-[10px] md:text-[11px] tracking-label uppercase font-semibold text-goldLight mt-2">
                Dallas, TX
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
