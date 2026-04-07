import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { IMG } from "@/lib/constants";

export default function ContactSidebar() {
  return (
    <div>
      <PlaceholderImage
        src={IMG.agent}
        alt="Nancy"
        className="aspect-square w-full"
      />
      <div className="mt-8">
        <p className="font-display text-3xl text-darkText">Nancy</p>
        <p className="text-[11px] tracking-label uppercase font-semibold text-gold mt-1">
          Real Estate Advisor
        </p>
        <ul className="mt-6 space-y-2 text-[14px] text-mediumText font-light">
          <li>📞 [XXX-XXX-XXXX]</li>
          <li>✉️ [nancy@email.com]</li>
          <li>📍 Dallas–Fort Worth · North Texas</li>
          <li>🏢 [PLACEHOLDER Brokerage]</li>
        </ul>
      </div>

      <div className="mt-10 bg-charcoal text-white p-8">
        <p className="text-[11px] tracking-label uppercase font-semibold text-gold mb-5">
          What Happens Next?
        </p>
        <ol className="space-y-4 text-[13px] font-light">
          {[
            "I'll reply within 24 hours, usually faster.",
            "We'll set up a quick call to talk through what you're looking for.",
            "I send you a personalized plan — no commitment.",
            "When you're ready, we get to work.",
          ].map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-display text-gold text-xl">0{i + 1}</span>
              <span className="leading-[1.7]">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
