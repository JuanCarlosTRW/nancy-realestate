"use client";
import Link from "next/link";
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !transparentRoute || open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        solid
          ? "bg-warmWhite/92 backdrop-blur border-b border-bordr"
          : "bg-transparent"
      )}
    >
      <div className="container-x flex items-center justify-between px-6 md:px-12 h-20">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-2xl tracking-tight",
              solid ? "text-darkText" : "text-white"
            )}
          >
            Nancy Musselman
          </span>
          <span className="text-[9px] tracking-label uppercase font-medium text-gold mt-1">
            Beam Real Estate · Dallas
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_ITEMS.filter((i) => i.href !== "/contact").map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] font-medium tracking-button uppercase transition-colors relative",
                  active
                    ? "text-gold"
                    : solid
                    ? "text-darkText hover:text-gold"
                    : "text-white hover:text-goldLight"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" />
                )}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-[11px] font-medium tracking-button uppercase px-6 py-2.5 transition-all rounded-[4px] bg-gold text-charcoal border border-gold hover:bg-goldDark hover:text-white"
          >
            Let&apos;s Talk
          </Link>
        </nav>

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

      {open && (
        <div className="md:hidden bg-warmWhite border-t border-bordr">
          <nav className="flex flex-col py-4">
            {NAV_ITEMS.filter((i) => i.href !== "/contact").map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-6 py-3 text-[12px] font-medium tracking-button uppercase",
                  pathname === item.href ? "text-gold" : "text-darkText"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mx-6 mt-3 mb-2 btn-base bg-gold text-white border border-gold"
            >
              Let&apos;s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
