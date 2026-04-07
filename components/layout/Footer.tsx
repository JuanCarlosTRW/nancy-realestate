import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 mt-20">
      <div className="container-x px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <p className="font-display text-3xl text-white">Nancy</p>
          <p className="text-[10px] tracking-label uppercase font-semibold text-gold mt-2">
            Real Estate · Dallas
          </p>
          <p className="mt-6 text-[13px] leading-[1.9] font-light max-w-xs">
            Personalized real estate service across Dallas–Fort Worth and North
            Texas.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-label uppercase text-gold mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV_ITEMS.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="text-[13px] hover:text-gold transition-colors"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-label uppercase text-gold mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-[13px]">
            <li>[XXX-XXX-XXXX]</li>
            <li>[nancy@email.com]</li>
            <li>Dallas, TX</li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-label uppercase text-gold mb-5">
            Follow
          </p>
          <ul className="space-y-3 text-[13px]">
            <li><a href="#" className="hover:text-gold">Instagram</a></li>
            <li><a href="#" className="hover:text-gold">Facebook</a></li>
            <li><a href="#" className="hover:text-gold">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Nancy Real Estate. All rights reserved.</p>
          <p>
            Designed by <span className="text-gold">Client Growth</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
