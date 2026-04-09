import Button from "@/components/ui/Button";

export default function CTABanner({
  title = "Ready to Make Your Move?",
  subtitle = "Whether you have one question or you're ready to start today, reach out. No pressure, no sales pitch.",
  cta = "Reach Out to Nancy",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Subtle gold radial warmth */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(200,169,126,0.22) 0%, rgba(28,23,18,0) 60%)",
        }}
      />
      <div className="relative container-x px-6 md:px-12 py-24 md:py-28 text-center">
        <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
          {title}
        </h2>
        <div className="gold-divider w-16 mx-auto mb-8" />
        <p className="max-w-xl mx-auto text-[15px] leading-[1.9] font-light text-white/75 mb-10">
          {subtitle}
        </p>
        <Button href={href} variant="gold">
          {cta}
        </Button>
      </div>
    </section>
  );
}
