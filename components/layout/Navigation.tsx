"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, NANCY_PHONE_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const transparentRoute = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentRoute || open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-warmWhite/90 backdrop-blur-xl border-b border-gold/10"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between px-6 md:px-12 h-28">
        {/* Logo */}
        <Link href="/" className="flex items-start leading-none">
          <Image
            src="https://static.wixstatic.com/media/62f926_a4e8d4b1911b4aa7a3b026a0052431e7~mv2.png"
            alt="Nancy Musselman Real Estate"
            width={180}
            height={90}
            priority
            className="h-auto object-contain"
            style={{
              width: "clamp(150px, 18vw, 240px)",
              filter: solid ? "none" : "brightness(0) invert(1)",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-9" aria-label="Primary">
          {NAV_ITEMS.filter((i) => i.href !== "/contact").map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.7rem] font-medium tracking-[0.15em] uppercase transition-colors duration-200 relative after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300",
                  active
                    ? "text-gold after:w-full"
                    : solid
                    ? "text-[#4A3F35] hover:text-gold after:w-0 hover:after:w-full"
                    : "text-white hover:text-goldLight after:w-0 hover:after:w-full"
                )}
                style={{ textShadow: solid ? "none" : "0 1px 6px rgba(0,0,0,0.2)" }}
              >
                {item.label}
              </Link>
            );
          })}
          {/* CTA button — solid gold, visually pops */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-[0.7rem] font-semibold tracking-[0.12em] uppercase bg-gold text-charcoal hover:bg-goldLight transition-all duration-300"
            style={{ borderRadius: "2px" }}
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href={`tel:${NANCY_PHONE_TEL}`}
            aria-label="Call Nancy"
            className={cn("p-2", solid ? "text-darkText" : "text-white")}
          >
            <Phone size={18} />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className={solid ? "text-darkText" : "text-white"} />
            ) : (
              <Menu className={solid ? "text-darkText" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-warmWhite/95 backdrop-blur-xl border-t border-gold/10">
          <nav className="flex flex-col py-4">
            {NAV_ITEMS.filter((i) => i.href !== "/contact").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-6 py-3 text-[0.7rem] font-medium tracking-[0.15em] uppercase",
                  pathname === item.href ? "text-gold" : "text-darkText"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mx-6 mt-3 mb-2 inline-flex items-center justify-center px-5 py-3 text-[0.7rem] font-medium tracking-[0.15em] uppercase bg-gold text-charcoal"
              style={{ borderRadius: "2px" }}
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
