"use client";
import SplitText from "@/components/SplitText";
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
    <section className="bg-bgSection pt-40 pb-24 px-6 md:px-12 text-center">
      <p className="label">{label}</p>
      <div className="mt-4">
        <SplitText
          text={`${titleStart} ${titleAccent}`}
          className="font-display font-light text-darkText text-5xl md:text-6xl lg:text-7xl leading-[1.05]"
          delay={40}
          animateBy="words"
          threshold={0.3}
          tag="h1"
        />
      </div>
      <AnimatedDivider className="w-16 mx-auto mt-8" />
      {subtitle && (
        <p className="body-p max-w-2xl mx-auto mt-6">{subtitle}</p>
      )}
    </section>
  );
}
