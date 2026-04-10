"use client";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export interface BenefitData {
  icon: string;
  title: string;
  body: string;
}

export default function BenefitCards({ benefits }: { benefits: BenefitData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((b, i) => (
        <Reveal key={b.title} delay={i * 0.1}>
          <div className="h-full p-10 md:p-12 bg-warmWhite border border-bordr rounded-[2px] border-t-[3px] border-t-gold/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-t-gold transition-all duration-300">
            {/* Small gold dash accent */}
            <div className="w-[30px] h-[2px] bg-gold/50 mb-6" />
            <h3 className="font-display text-[22px] md:text-[24px] text-darkText leading-[1.25]">
              {b.title}
            </h3>
            <AnimatedDivider className="mt-4 w-10" />
            <p className="body-p mt-5">{b.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
