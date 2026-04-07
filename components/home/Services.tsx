import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const panels = [
  {
    title: "For Buyers",
    desc: "From the first showing to closing day — calm, clear guidance and a curated search built around the life you're moving toward.",
    cta: "I'm Buying",
    href: "/buy",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "For Sellers",
    desc: "Strategic pricing, elevated marketing, and full-service representation designed to maximize your sale without the stress.",
    cta: "I'm Selling",
    href: "/sell",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="bg-bgSection">
      <Reveal>
        <div className="text-center py-20 px-6">
          <p className="label">What I Do</p>
          <h2 className="h-display mt-3">
            Service Built <span className="italic text-gold">Around You</span>
          </h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {panels.map((p) => (
          <Link
            href={p.href}
            key={p.title}
            className="group relative min-h-[380px] md:min-h-[460px] overflow-hidden"
          >
            <Image
              src={p.img}
              alt={p.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/65 transition-all duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14 text-white">
              <p className="text-[11px] tracking-label uppercase font-semibold text-goldLight">
                {p.title}
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-[1.8] font-light text-white/90">
                {p.desc}
              </p>
              <span className="inline-block mt-7 text-[11px] tracking-button uppercase font-semibold text-gold group-hover:text-goldLight">
                {p.cta} →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
