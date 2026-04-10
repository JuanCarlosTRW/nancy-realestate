"use client";
import { MapPin, Users, Eye } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import SpotlightCard from "@/components/SpotlightCard";

const PILLARS = [
  {
    icon: MapPin,
    title: "I Know Dallas Like Home — Because It Is",
    body: "I\u2019ve lived in the DFW Metroplex for over 50 years. I watched this city grow from the ground up. When I talk about a neighborhood, I\u2019m not reading a report — I\u2019m remembering it.",
  },
  {
    icon: Users,
    title: "22 Years of Navigating High-Stakes Moments",
    body: "My career in human resources trained me to stay composed when things get complicated. Real estate transactions get emotional. I\u2019m the steady hand that keeps yours on track.",
  },
  {
    icon: Eye,
    title: "Detail-Oriented by Nature",
    body: "I was raised around construction. I notice things others walk past. From the inspection to the contract, nothing slips through on my watch.",
  },
];

export default function WhyNancy() {
  return (
    <section id="why-nancy" className="section-pad bg-warmWhite relative">
      <div className="container-x">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="label">Your Partner in Dallas Real Estate</p>
            <h2 className="h-display mt-4">
              Local Knowledge. Professional Edge.{" "}
              <span className="italic text-gold">Personal Attention.</span>
            </h2>
            <AnimatedDivider className="w-16 mx-auto mt-8" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 0.12}>
                <SpotlightCard
                  spotlightColor="rgba(200, 169, 126, 0.15)"
                  className="h-full !p-10 !bg-bgSection !border-bordr !rounded-[2px] shadow-warm hover:shadow-warmLg transition-shadow duration-500 !border"
                >
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 border border-gold/40 rounded-full mb-6">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <h3 className="font-display text-[26px] text-darkText leading-[1.2]">
                      {p.title}
                    </h3>
                    <AnimatedDivider className="w-10 mt-5" />
                    <p className="body-p mt-6">{p.body}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
