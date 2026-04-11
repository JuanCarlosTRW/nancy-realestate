import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    photo:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    photoAlt: "Bent Tree neighborhood, Dallas",
    quote:
      "Nancy made the entire process of buying our home in Bent Tree incredibly smooth. She was detail-oriented, always available, and made us feel taken care of every step of the way.",
    name: "The Martinez Family",
    subtitle: "Bought Their Home in Bent Tree",
    placeholder: false,
  },
  {
    photo:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    photoAlt: "Preston Hollow home exterior",
    quote:
      "We looked at over twenty homes before Nancy found the one. She knew exactly which streets to focus on and which to skip. That saved us months.",
    name: "The Richardson Family",
    subtitle: "Bought in Preston Hollow",
    placeholder: true,
  },
  {
    photo:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop",
    photoAlt: "North Dallas home exterior",
    quote:
      "Nancy priced our home correctly from day one. We had three offers in the first week. Her advice on what to fix and what to leave alone saved us thousands in unnecessary renovations.",
    name: "The Okafor Family",
    subtitle: "Sold Their Home in North Dallas",
    placeholder: true,
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-warmWhite">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="label">A Kind Word</p>
            <h2 className="h-display mt-4">
              What Clients <span className="italic text-gold">Are Saying</span>
            </h2>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              {/* PLACEHOLDER: Replace with real testimonial from Nancy */}
              {t.placeholder && (
                <span className="hidden">
                  {/* PLACEHOLDER: Replace with real testimonial from Nancy */}
                </span>
              )}
              <div className="h-full bg-bgSection border border-bordr overflow-hidden flex flex-col">
                {/* Photo */}
                <div className="relative h-[220px] md:h-[200px]">
                  <Image
                    src={t.photo}
                    alt={t.photoAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-8 flex flex-col flex-1">
                  <Quote
                    size={28}
                    className="text-gold/40 mb-4 shrink-0"
                    strokeWidth={1}
                  />
                  <p className="font-display italic text-[17px] md:text-[18px] text-darkText leading-[1.5] flex-1">
                    {t.quote}
                  </p>
                  <div className="mt-6 pt-6 border-t border-bordr">
                    <p className="text-[12px] tracking-button uppercase font-medium text-darkText">
                      {t.name}
                    </p>
                    <p className="text-[11px] tracking-label uppercase font-medium text-gold mt-1">
                      {t.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
