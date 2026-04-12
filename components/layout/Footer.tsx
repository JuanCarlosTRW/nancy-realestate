import Link from "next/link";
import {
  NAV_ITEMS,
  NANCY_LEGAL_NAME,
  NANCY_BROKERAGE,
  NANCY_PHONE,
  NANCY_PHONE_TEL,
  NANCY_EMAIL,
  NANCY_LICENSE,
  TREC_IABS_URL,
  TREC_CPN_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70 mt-0">
      {/* Gold divider at top */}
      <div className="h-px w-full" style={{ background: "rgba(196, 169, 108, 0.1)" }} />

      <div className="container-x px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="md:col-span-2">
          <p className="font-display text-[1.25rem] text-warmWhite tracking-[0.05em]">
            Nancy Musselman
          </p>
          <p className="text-[0.55rem] tracking-[0.2em] uppercase font-medium text-gold mt-2">
            {NANCY_BROKERAGE} &middot; Dallas, TX
          </p>
          <p className="mt-6 text-[0.8rem] leading-[1.9] font-light text-white/40 max-w-sm">
            Born and raised in the DFW Metroplex. Fifty-plus years of local
            knowledge, twenty-two years of professional experience in
            accounting and HR, and a people-first approach to every
            transaction.
          </p>
        </div>

        {/* Navigate column */}
        <div>
          <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV_ITEMS.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="text-[0.8rem] text-white/50 hover:text-gold transition-colors duration-200"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-[0.8rem]">
            <li>
              <a
                href={`tel:${NANCY_PHONE_TEL}`}
                className="text-white/50 hover:text-gold transition-colors duration-200"
              >
                {NANCY_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${NANCY_EMAIL}`}
                className="text-white/50 hover:text-gold transition-colors duration-200 break-all"
              >
                {NANCY_EMAIL}
              </a>
            </li>
            <li className="text-white/40">Dallas, TX</li>
          </ul>
        </div>
      </div>

      {/* TREC compliance */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-x px-6 md:px-12 py-6 text-[0.65rem] text-white/25 leading-[1.9]">
          <p className="mb-2">
            Texas law requires all license holders to provide clients with:
            {" "}
            <a
              href={TREC_IABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold underline underline-offset-2 transition-colors"
            >
              Information About Brokerage Services
            </a>
            {" &middot; "}
            <a
              href={TREC_CPN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold underline underline-offset-2 transition-colors"
            >
              Consumer Protection Notice
            </a>
          </p>
          <p>
            {NANCY_LEGAL_NAME} &middot; {NANCY_LICENSE} &middot; {NANCY_BROKERAGE}
          </p>
        </div>
        <div className="container-x px-6 md:px-12 pb-8 flex flex-col md:flex-row justify-between gap-2 text-[0.65rem] text-white/20">
          <p>&copy; {new Date().getFullYear()} Nancy Musselman. All rights reserved.</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </footer>
  );
}
