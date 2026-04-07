import Button from "@/components/ui/Button";

export default function CTABanner({
  title = "Ready to Make Your Move?",
  subtitle = "Whether you're buying, selling, or just curious about the market — let's talk.",
  cta = "Get in Touch",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section
      className="px-6 md:px-12 py-24 text-center text-white"
      style={{
        background:
          "linear-gradient(135deg, #C6A96C 0%, #D4BC8A 50%, #A8893F 100%)",
      }}
    >
      <h2 className="font-display font-light text-4xl md:text-5xl mb-6">
        {title}
      </h2>
      <p className="max-w-xl mx-auto text-[15px] leading-[1.9] font-light text-white/90 mb-10">
        {subtitle}
      </p>
      <Button href={href} variant="outline-white">
        {cta}
      </Button>
    </section>
  );
}
