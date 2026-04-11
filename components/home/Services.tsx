import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  {
    label: "For Buyers",
    title: "Ready to Buy?",
    body: "Finding the right home in Dallas takes more than browsing Zillow. It takes someone who knows which streets to avoid and which neighborhoods are quietly becoming the next big thing.",
    cta: "Start Your Search",
    href: "/buy",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Dallas residential home exterior",
  },
  {
    label: "For Sellers",
    title: "Time to Sell?",
    body: "Most homes sit on the market because they were overpriced from day one. I will price it right, prep it well, and get it in front of serious buyers fast.",
    cta: "Get Your Home Sold",
    href: "/sell",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Beautifully staged home interior",
  },
];

export default function Services() {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="label">Services</p>
            <h2 className="h-display mt-4">
              Whether You&apos;re Buying or Selling,{" "}
              <span className="italic text-gold">I&apos;ve Got You</span>
            </h2>
            <div className="gold-divider w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {CARDS.map((c, i) => {
            return (
              <Reveal key={c.title} delay={i * 0.12}>
                <Link
                  href={c.href}
                  className="group block h-full bg-bgSection border border-bordr hover:border-gold/50 shadow-warm hover:shadow-warmLg hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                >
                  {/* Card image */}
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bgSection/60 via-transparent to-transparent" />
                  </div>

                  {/* Card content */}
                  <div className="p-10 md:p-12">
                    <div className="w-[30px] h-[2px] bg-gold/60 mb-8" />
                    <p className="text-[10px] tracking-label uppercase font-medium text-gold mb-3">
                      {c.label}
                    </p>
                    <h3 className="font-display text-3xl md:text-4xl text-darkText leading-[1.15]">
                      {c.title}
                    </h3>
                    <p className="body-p mt-6 max-w-md">{c.body}</p>
                    <div className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-button uppercase font-medium text-gold group-hover:gap-5 transition-all duration-500">
                      <span>{c.cta}</span>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
