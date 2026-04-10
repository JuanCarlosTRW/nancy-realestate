"use client";
import { MapPin, Users, Eye } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

const PILLARS = [
  {
    num: "01",
    icon: MapPin,
    title: "I Know Dallas Like Home. Because It Is.",
    body: "I have lived in the DFW Metroplex for over 50 years. When I talk about a neighborhood, I am not reading a report. I am remembering it. The schools my kids attended, the streets that flood, the blocks that have quietly doubled in value. That is the kind of knowledge you only get from living here your whole life.",
  },
  {
    num: "02",
    icon: Users,
    title: "22 Years Before Real Estate Made Me Better At It",
    body: "Before real estate, I spent over two decades in accounting and human resources, managing sensitive situations, difficult conversations, and high-stakes decisions with composure. Real estate transactions get emotional fast. I am the steady hand that keeps yours on track.",
  },
  {
    num: "03",
    icon: Eye,
    title: "Detail-Oriented by Nature",
    body: "I was raised around construction. I notice things other agents walk right past. From the inspection report to the fine print in a contract, nothing slips through on my watch. That attention to detail protects you from surprises down the road.",
  },
];

export default function WhyNancy() {
  return (
    <section id="why-nancy" className="relative">
      {/* Section header */}
      <div className="section-pad bg-warmWhite pb-10 md:pb-14">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="label">Why Nancy</p>
              <h2 className="h-display mt-4">
                Local Knowledge. Professional Edge.{" "}
                <span className="italic text-gold">Personal Attention.</span>
              </h2>
              <AnimatedDivider className="w-16 mx-auto mt-8" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Immersive pillar blocks */}
      {PILLARS.map((p, i) => {
        const Icon = p.icon;
        const isAlt = i % 2 === 1;
        return (
          <div
            key={p.num}
            className={`${isAlt ? "bg-bgSection" : "bg-warmWhite"}`}
          >
            <div className="container-x py-16 md:py-24 px-6 md:px-12 lg:px-20">
              <Reveal delay={0.05}>
                <div className="max-w-3xl mx-auto md:mx-0">
                  {/* Number + icon row */}
                  <div className="flex items-center gap-5 mb-8">
                    <span className="font-display text-[48px] md:text-[64px] text-gold/25 leading-none font-light select-none">
                      {p.num}
                    </span>
                    <div className="inline-flex items-center justify-center w-11 h-11 border border-gold/40 rounded-full">
                      <Icon size={18} className="text-gold" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="font-display text-[28px] md:text-[36px] lg:text-[42px] text-darkText leading-[1.15] max-w-2xl">
                    {p.title}
                  </h3>

                  <AnimatedDivider className="w-12 mt-6" />

                  {/* Body */}
                  <p className="body-p mt-8 text-[16px] md:text-[17px] leading-[1.8] max-w-2xl">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
