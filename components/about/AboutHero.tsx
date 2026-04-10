"use client";
import Image from "next/image";
import Link from "next/link";
import SplitText from "@/components/SplitText";
import AnimatedDivider from "@/components/ui/AnimatedDivider";

export default function AboutHero() {
  return (
    <section className="relative bg-warmWhite pt-40 pb-16 md:pb-20 px-6 md:px-12 overflow-hidden">
      {/* Faded background image */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="container-x max-w-4xl relative z-10">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] tracking-button uppercase font-medium text-lightText mb-8"
        >
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-3 text-gold">/</span>
          <span className="text-darkText">About</span>
        </nav>
        <p className="label">About Nancy</p>
        <div className="mt-4">
          <SplitText
            text="A Dallasite, a Professional, and Someone Who Actually Cares"
            className="font-display font-light text-darkText leading-[1.05]"
            delay={40}
            animateBy="words"
            threshold={0.3}
            tag="h1"
            textAlign="left"
          />
        </div>
        <AnimatedDivider className="w-16 mt-8" />
        <p className="body-p max-w-2xl mt-8 text-[17px]">
          Here&apos;s a little about who I am and why I do this.
        </p>
      </div>
    </section>
  );
}
