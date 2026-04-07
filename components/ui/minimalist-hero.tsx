"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Globe, AtSign } from "lucide-react";
import { IMG } from "@/lib/constants";

export default function MinimalistAboutHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-warmWhite px-6 pt-32 pb-12 md:px-12">
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3 gap-8">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="label">About Nancy</p>
          <p className="body-p mt-4 max-w-xs mx-auto md:mx-0">
            More than an agent — your advocate. Helping Dallas families find
            home for over a decade.
          </p>
          <a
            href="#bio"
            className="mt-6 inline-block text-[11px] tracking-button uppercase font-semibold text-gold hover:text-goldDark"
          >
            Read More →
          </a>
        </motion.div>

        {/* Center image with circle */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-0 h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px]"
            style={{
              background:
                "radial-gradient(circle, #D4BC8A 0%, #C6A96C 70%, #A8893F 100%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10 w-56 md:w-64 lg:w-72 aspect-[3/4]"
          >
            <Image
              src={IMG.nancy}
              alt="Nancy"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 224px, 288px"
            />
          </motion.div>
        </div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-3 flex items-center justify-center md:justify-start"
        >
          <h1 className="font-display font-light text-darkText text-6xl md:text-7xl lg:text-8xl leading-none text-center md:text-left">
            a little
            <br />
            <span className="italic text-gold">about me.</span>
          </h1>
        </motion.div>
      </div>

      <footer className="z-30 flex w-full max-w-7xl items-center justify-between mt-12">
        <div className="flex items-center space-x-5 text-mediumText">
          <a href="#" aria-label="Instagram"><Camera className="h-5 w-5 hover:text-gold" /></a>
          <a href="#" aria-label="Web"><Globe className="h-5 w-5 hover:text-gold" /></a>
          <a href="#" aria-label="Email"><AtSign className="h-5 w-5 hover:text-gold" /></a>
        </div>
        <p className="text-[11px] tracking-label uppercase font-semibold text-gold">
          Dallas, TX
        </p>
      </footer>
    </section>
  );
}
