"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "spring" as const,
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring" as const,
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function ShinyButton({ children, className, href }: ShinyButtonProps) {
  const content = (
    <>
      <span
        className="relative block size-full text-[11px] uppercase tracking-button font-medium text-white/90"
        style={{
          maskImage:
            "linear-gradient(-75deg, hsl(var(--primary-hsl)) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), hsl(var(--primary-hsl)) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary-hsl)/10%)_calc(var(--x)+20%),hsl(var(--primary-hsl)/50%)_calc(var(--x)+25%),hsl(var(--primary-hsl)/10%)_calc(var(--x)+100%))] p-px"
      />
    </>
  );

  const sharedClass = cn(
    "relative rounded-[4px] px-10 py-[18px] backdrop-blur-xl transition-shadow duration-300 ease-in-out bg-gold hover:shadow-[0_0_24px_rgba(200,169,126,0.3)] inline-flex items-center justify-center gap-3",
    className
  );

  if (href) {
    return (
      <motion.div {...animationProps} className="inline-block">
        <Link href={href} className={sharedClass}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button {...animationProps} className={sharedClass}>
      {content}
    </motion.button>
  );
}
