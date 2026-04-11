import InteractiveSplitSection from "@/components/ui/InteractiveSplitSection";

const ITEMS = [
  {
    label: "I Know Dallas Like Home",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Dallas residential neighborhood street",
    description:
      "I have lived in the DFW Metroplex for over 50 years. When I talk about a neighborhood, I am not reading a report. I am remembering it. The schools my kids attended, the streets that flood, the blocks that have quietly doubled in value. That is the kind of knowledge you only get from living here your whole life.",
    pullQuote:
      "The schools my kids attended, the streets that flood, the blocks that have quietly doubled in value.",
  },
  {
    label: "Steady Under Pressure",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Professional interior setting",
    description:
      "Before real estate, I spent over two decades in accounting and human resources, managing sensitive situations, difficult conversations, and high-stakes decisions with composure. Real estate transactions get emotional fast. I am the steady hand that keeps yours on track.",
    pullQuote:
      "Real estate transactions get emotional fast. I am the steady hand that keeps yours on track.",
  },
  {
    label: "Detail-Oriented by Nature",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Home architectural detail",
    description:
      "I was raised around construction. I notice things other agents walk right past. From the inspection report to the fine print in a contract, nothing slips through on my watch. That attention to detail protects you from surprises down the road.",
    pullQuote:
      "From the inspection report to the fine print in a contract, nothing slips through on my watch.",
  },
];

export default function WhyNancy() {
  return (
    <div id="why-nancy">
      <InteractiveSplitSection
        sectionLabel="Why Nancy"
        sectionTitle="Local Knowledge. Professional Edge."
        sectionTitleAccent="Personal Attention."
        items={ITEMS}
      />
    </div>
  );
}
