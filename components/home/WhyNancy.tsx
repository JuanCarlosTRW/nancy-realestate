"use client";
import { MapPin, Users, Eye } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import SpotlightCard from "@/components/SpotlightCard";

const PILLARS = [
  {
    icon: MapPin,
    title: "I Know Dallas Like Home. Because It Is.",
    body: "I have lived in the DFW Metroplex for over 50 years. When I talk about a neighborhood, I am not reading a report. I am remembering it. The schools my kids attended, the streets that flood, the blocks that have quietly doubled in value. That is the kind of knowledge you only get from living here your whole life.",
  },
  {
    icon: Users,
    title: "22 Years Before Real Estate Made Me Better At It",
    body: "Before real estate, I spent over two decades in accounting and human resources, managing sensitive situations, difficult conversations, and high-stakes decisions with composure. Real estate transactions get emotional fast. I am the steady hand that keeps yours on track.",
  },
  {
    icon: Eye,
    title: "Detail-Oriented by Nature",
    body: "I was raised around construction. I notice things other agents walk right past. From the inspection report to the fine print in a contract, nothing slips through on my watch. That attention to detail protects you from surprises down the road.",
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
