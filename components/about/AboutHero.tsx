import Link from "next/link";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function AboutHero() {
  return (
    <section className="bg-warmWhite pt-36 pb-12 md:pt-40 md:pb-14 px-6 md:px-12">
      <div className="container-x max-w-4xl">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] tracking-button uppercase font-medium text-lightText mb-10"
        >
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span className="mx-3 text-gold">/</span>
          <span className="text-darkText">About</span>
        </nav>
        <p className="label">About Nancy</p>
        <h1
          className="font-display font-light text-darkText mt-5 leading-[1.05]"
          style={{ fontSize: "clamp(42px, 5.5vw, 68px)" }}
        >
          A Dallasite, a Professional, and{" "}
          <span className="italic text-gold">
            Someone Who Pays Attention
          </span>
        </h1>
        <AnimatedDivider className="w-16 mt-8" />
        <p className="body-p max-w-2xl mt-7 text-[17px]">
          Fifty years of roots. Two decades of professional discipline. A
          lifetime of paying attention.
        </p>
      </div>
    </section>
  );
}
