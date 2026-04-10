import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function PageHero({
  label,
  titleStart,
  titleAccent,
  subtitle,
}: {
  label: string;
  titleStart: string;
  titleAccent: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-bgSection pt-36 pb-16 md:pt-40 md:pb-20 px-6 md:px-12 text-center">
      <p className="label">{label}</p>
      <h1
        className="font-display font-light text-darkText mt-4 leading-[1.05]"
        style={{ fontSize: "clamp(38px, 5vw, 64px)" }}
      >
        {titleStart}{" "}
        <span className="italic text-gold">{titleAccent}</span>
      </h1>
      <AnimatedDivider className="w-16 mx-auto mt-8" />
      {subtitle && (
        <p className="body-p max-w-2xl mx-auto mt-6">{subtitle}</p>
      )}
    </section>
  );
}
