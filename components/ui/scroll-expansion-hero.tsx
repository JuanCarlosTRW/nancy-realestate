"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  mediaSrc: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  subtitle?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaSrc,
  bgImageSrc,
  title,
  date,
  subtitle,
  textBlend,
  children,
}: Props) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const delta = e.deltaY * 0.0009;
        const next = Math.min(Math.max(scrollProgress + delta, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) {
          setShowContent(false);
        }
      }
    };
    const handleTouchStart = (e: TouchEvent) => setTouchStartY(e.touches[0].clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        const next = Math.min(Math.max(scrollProgress + deltaY * factor, 0), 1);
        setScrollProgress(next);
        if (next >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (next < 0.75) setShowContent(false);
        setTouchStartY(touchY);
      }
    };
    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div ref={sectionRef} className="transition-colors duration-700 ease-in-out overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="w-screen h-screen object-cover"
              priority
            />
            <div className="absolute inset-0 bg-charcoal/50" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0,0,0,0.3)",
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={mediaSrc}
                    alt={title || "Hero"}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Base darken */}
                  <motion.div
                    className="absolute inset-0 bg-black/40"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.5 - scrollProgress * 0.15 }}
                    transition={{ duration: 0.2 }}
                  />
                  {/* Bottom gradient for CTA legibility — only when fully expanded */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-700 pointer-events-none"
                    style={{ opacity: mediaFullyExpanded ? 1 : 0 }}
                  />
                </div>
                <div className="flex flex-col items-center text-center relative z-10 mt-4">
                  {date && (
                    <p
                      className="text-[11px] tracking-label uppercase font-semibold text-goldLight"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 flex-col ${
                  textBlend ? "mix-blend-difference" : ""
                }`}
              >
                <motion.h1
                  className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-white"
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h1>
                <motion.h1
                  className="font-display italic font-light text-5xl md:text-7xl lg:text-8xl text-goldLight"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h1>
                {subtitle && (
                  <p
                    className="text-white/85 text-[14px] md:text-[15px] font-light max-w-xl mt-4 px-6 transition-opacity duration-500"
                    style={{
                      opacity: mediaFullyExpanded ? 1 : 0,
                      pointerEvents: mediaFullyExpanded ? "auto" : "none",
                    }}
                  >
                    {subtitle}
                  </p>
                )}
                <div
                  className="flex flex-wrap items-center justify-center gap-5 mt-10 transition-opacity duration-700"
                  style={{
                    opacity: mediaFullyExpanded ? 1 : 0,
                    pointerEvents: mediaFullyExpanded ? "auto" : "none",
                  }}
                >
                  <Link
                    href="/buy"
                    className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[11px] tracking-button uppercase font-semibold text-darkText bg-white hover:bg-cream transition-all duration-500 hover:gap-5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
                  >
                    <span>I&apos;m Buying</span>
                    <span className="text-gold transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                    <span className="absolute inset-x-0 -bottom-px h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </Link>
                  <Link
                    href="/sell"
                    className="group relative inline-flex items-center gap-3 px-10 py-[18px] text-[11px] tracking-button uppercase font-semibold text-white border border-white/40 backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white/70 transition-all duration-500 hover:gap-5"
                  >
                    <span>I&apos;m Selling</span>
                    <span className="text-goldLight transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <motion.section
              className="flex flex-col w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
