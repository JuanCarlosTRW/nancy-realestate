"use client";
import { MapPin, Users, Hammer, Scale, ClipboardCheck, Shield, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import SpotlightCard from "@/components/SpotlightCard";

const ICON_MAP: Record<string, LucideIcon> = {
  MapPin,
  Users,
  Hammer,
  Scale,
  ClipboardCheck,
  Shield,
};

export interface BenefitData {
  icon: string; // key into ICON_MAP
  title: string;
  body: string;
}

export default function BenefitCards({ benefits }: { benefits: BenefitData[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {benefits.map((b, i) => {
        const Icon = ICON_MAP[b.icon] ?? MapPin;
        return (
          <Reveal key={b.title} delay={i * 0.1}>
            <SpotlightCard
              spotlightColor="rgba(200, 169, 126, 0.12)"
              className="h-full !p-10 !bg-warmWhite !border !border-bordr !rounded-[2px] shadow-warm hover:shadow-warmLg hover:-translate-y-[3px] hover:!border-gold/50 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/40 rounded-full mb-6">
                  <Icon size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[22px] md:text-[24px] text-darkText leading-[1.25]">
                  {b.title}
                </h3>
                <AnimatedDivider className="mt-4 w-10" />
                <p className="body-p mt-5">{b.body}</p>
              </div>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  );
}
