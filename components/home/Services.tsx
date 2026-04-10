import Link from "next/link";
import { ArrowRight, Home as HomeIcon, Key } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CARDS = [
  {
    icon: HomeIcon,
    label: "For Buyers",
    title: "Ready to Buy?",
    body: "Finding the right home in Dallas takes more than browsing Zillow. It takes someone who knows which streets to avoid and which neighborhoods are quietly becoming the next big thing.",
    cta: "Start Your Search",
    href: "/buy",
  },
  {
    icon: Key,
    label: "For Sellers",
    title: "Time to Sell?",
    body: "Most homes sit on the market because they were overpriced from day one. I will tell you what your home is actually worth, prep it to show at its best, and get it in front of serious buyers fast. You focus on your next chapter. I will handle this one.",
    cta: "Get Your Home Sold",
    href: "/sell",
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
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.12}>
                <Link
                  href={c.href}
                  className="group block h-full p-12 md:p-14 bg-bgSection border border-gold/30 rounded-[2px] shadow-warm hover:shadow-warmLg hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-gold/50 rounded-full mb-8 group-hover:bg-gold/10 transition-colors">
                    <Icon size={22} className="text-gold" strokeWidth={1.5} />
                  </div>
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
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
