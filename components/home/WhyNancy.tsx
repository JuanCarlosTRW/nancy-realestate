"use client";
import Reveal from "@/components/ui/Reveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

const PILLARS = [
  {
    num: "01",
    title: "I Know Dallas Like Home. Because It Is.",
    body: "I have lived in the DFW Metroplex for over 50 years. When I talk about a neighborhood, I am not reading a report. I am remembering it. The schools my kids attended, the streets that flood, the blocks that have quietly doubled in value. That is the kind of knowledge you only get from living here your whole life.",
    quote:
      "\u201CThe schools my kids attended, the streets that flood, the blocks that have quietly doubled in value.\u201D",
  },
  {
    num: "02",
    title: "22 Years Before Real Estate Made Me Better At It",
    body: "Before real estate, I spent over two decades in accounting and human resources, managing sensitive situations, difficult conversations, and high-stakes decisions with composure. Real estate transactions get emotional fast. I am the steady hand that keeps yours on track.",
    quote:
      "\u201CReal estate transactions get emotional fast. I am the steady hand that keeps yours on track.\u201D",
  },
  {
    num: "03",
    title: "Detail-Oriented by Nature",
    body: "I was raised around construction. I notice things other agents walk right past. From the inspection report to the fine print in a contract, nothing slips through on my watch. That attention to detail protects you from surprises down the road.",
    quote:
      "\u201CFrom the inspection report to the fine print in a contract, nothing slips through on my watch.\u201D",
  },
];

export default function WhyNancy() {
  return (
    <section id="why-nancy" className="relative">
      {/* Section header */}
      <div className="pt-20 md:pt-28 pb-6 md:pb-8 px-6 md:px-12 lg:px-20 bg-warmWhite">
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

      {/* Editorial pillar blocks */}
      {PILLARS.map((p, i) => {
        const isAlt = i % 2 === 1;
        return (
          <div
            key={p.num}
            className={isAlt ? "bg-bgSection" : "bg-warmWhite"}
          >
            <div className="container-x py-14 md:py-20 px-6 md:px-12 lg:px-20">
              <Reveal delay={0.05}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto ${
                    isAlt ? "md:direction-rtl" : ""
                  }`}
                >
                  {/* Text column */}
                  <div
                    className={`relative ${isAlt ? "md:order-2" : "md:order-1"}`}
                  >
                    {/* Decorative watermark number */}
                    <span
                      className="font-display text-[100px] md:text-[160px] text-gold/[0.08] leading-none font-normal select-none absolute -top-6 md:-top-12 -left-2 md:-left-4 pointer-events-none"
                      aria-hidden="true"
                    >
                      {p.num}
                    </span>

                    {/* Heading */}
                    <h3 className="font-display text-[28px] md:text-[34px] lg:text-[40px] text-darkText leading-[1.15] relative z-10 pt-8 md:pt-12">
                      {p.title}
                    </h3>

                    {/* Thin gold line */}
                    <div className="w-[50px] h-[2px] bg-gold/50 mt-6" />

                    {/* Body copy */}
                    <p className="body-p mt-8 text-[15px] md:text-[16px] leading-[1.8] max-w-xl">
                      {p.body}
                    </p>
                  </div>

                  {/* Pull quote column */}
                  <div
                    className={`flex items-center ${isAlt ? "md:order-1" : "md:order-2"}`}
                  >
                    <blockquote className="border-l-4 border-gold/40 pl-8 md:pl-10 py-4">
                      <p className="font-display italic text-[20px] md:text-[24px] text-darkText/80 leading-[1.5]">
                        {p.quote}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
