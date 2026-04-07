import Image from "next/image";
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
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=1920&auto=format&fit=crop"
        alt="Dallas skyline"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(198,169,108,0.92) 0%, rgba(212,188,138,0.88) 50%, rgba(168,137,63,0.94) 100%)",
        }}
      />
      <div className="relative px-6 md:px-12 py-24 md:py-28 text-center text-white">
        <h2 className="font-display font-light text-4xl md:text-5xl mb-6">
          {title}
        </h2>
        <p className="max-w-xl mx-auto text-[15px] leading-[1.9] font-light text-white/95 mb-10">
          {subtitle}
        </p>
        <Button href={href} variant="outline-white">
          {cta}
        </Button>
      </div>
    </section>
  );
}
