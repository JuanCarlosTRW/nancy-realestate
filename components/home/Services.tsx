import Button from "@/components/ui/Button";
import { Home, Key } from "lucide-react";

const cards = [
  {
    icon: Key,
    title: "For Buyers",
    desc: "From the first showing to the closing table — guidance that's calm, clear, and on your side.",
    bullets: [
      "Personalized neighborhood matching",
      "Private tours and market insights",
      "Skilled offer negotiation",
      "End-to-end closing support",
    ],
    cta: "Start Buying",
    href: "/buy",
  },
  {
    icon: Home,
    title: "For Sellers",
    desc: "Strategic pricing, beautiful marketing, and full-service representation to maximize your sale.",
    bullets: [
      "Comparative market analysis",
      "Professional photography & staging",
      "Targeted digital exposure",
      "Smooth, coordinated closing",
    ],
    cta: "Start Selling",
    href: "/sell",
  },
];

export default function Services() {
  return (
    <section className="section-pad bg-bgSection">
      <div className="container-x text-center mb-16">
        <p className="label">What I Do</p>
        <h2 className="h-display mt-3">
          Service Built <span className="italic text-gold">Around You</span>
        </h2>
      </div>
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className="bg-warmWhite border border-bordr p-10 md:p-12 transition-all duration-300 hover:-translate-y-1 hover:border-gold"
            >
              <Icon className="text-gold mb-6" size={32} strokeWidth={1.5} />
              <h3 className="font-display text-3xl text-darkText">{c.title}</h3>
              <p className="body-p mt-4">{c.desc}</p>
              <ul className="mt-8 space-y-3">
                {c.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start text-[14px] text-mediumText font-light"
                  >
                    <span className="text-gold mr-3 mt-2">●</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href={c.href} variant="outline">
                  {c.cta}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
