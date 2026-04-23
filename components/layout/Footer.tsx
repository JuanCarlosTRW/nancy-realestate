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
    <footer className="bg-charcoal mt-0">
      {/* Gold divider at top */}
      <div className="h-px w-full" style={{ background: "rgba(196, 169, 108, 0.1)" }} />

      <div className="container-x px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="md:col-span-2">
          {/* Part 8A: full brightness name */}
          <p className="font-display text-[1.25rem] tracking-[0.05em]" style={{ color: "#FAF7F2" }}>
            Nancy Musselman
          </p>
          {/* Part 8B: gold brand identity */}
          <p className="text-[0.55rem] tracking-[0.2em] uppercase font-medium text-gold mt-2">
            {NANCY_BROKERAGE} &middot; Dallas, TX
          </p>
          <p className="text-[0.55rem] tracking-[0.12em] font-light mt-1" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            14455 Webb Chapel Road
          </p>
          <p className="text-[0.55rem] tracking-[0.12em] font-light" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            Farmers Branch, TX 74234
          </p>
          {/* Part 8C: brighter bio text */}
          <p className="mt-6 text-[0.8rem] leading-[1.9] font-light max-w-sm" style={{ color: "rgba(250, 247, 242, 0.6)" }}>
            Years of local knowledge, professional experience, and a
            people-first approach to every transaction.
          </p>
        </div>

        {/* Navigate column */}
        <div>
          {/* Part 8D: structural section header */}
          <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV_ITEMS.map((i) => (
              <li key={i.href}>
                {/* Part 8E: readable nav links */}
                <Link
                  href={i.href}
                  className="text-[0.8rem] hover:text-gold transition-colors duration-200"
                  style={{ color: "rgba(250, 247, 242, 0.6)" }}
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            Contact
          </p>
          <ul className="space-y-3 text-[0.8rem]">
            {/* Part 8F: readable contact info */}
            <li>
              <a
                href={`tel:${NANCY_PHONE_TEL}`}
                className="hover:text-gold transition-colors duration-200"
                style={{ color: "rgba(250, 247, 242, 0.65)" }}
              >
                {NANCY_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${NANCY_EMAIL}`}
                className="hover:text-gold transition-colors duration-200 break-all"
                style={{ color: "rgba(250, 247, 242, 0.65)" }}
              >
                {NANCY_EMAIL}
              </a>
            </li>
            <li style={{ color: "rgba(250, 247, 242, 0.5)" }}>Dallas, TX</li>
          </ul>
        </div>
      </div>

      {/* TREC compliance — Part 8G: findable but not prominent */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-x px-6 md:px-12 py-6 text-[0.65rem] leading-[1.9]" style={{ color: "rgba(250, 247, 242, 0.35)" }}>
          <p className="mb-2">
            Texas law requires all license holders to provide clients with:
            {" "}
            <a
              href={TREC_IABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2 transition-colors"
              style={{ color: "rgba(196, 169, 108, 0.5)" }}
            >
              Information About Brokerage Services
            </a>
            {" &middot; "}
            <a
              href={TREC_CPN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2 transition-colors"
              style={{ color: "rgba(196, 169, 108, 0.5)" }}
            >
              Consumer Protection Notice
            </a>
          </p>
          <p>
            {NANCY_LEGAL_NAME} &middot; {NANCY_LICENSE} &middot; {NANCY_BROKERAGE}
          </p>
        </div>
        <div className="container-x px-6 md:px-12 pb-8 flex flex-col md:flex-row justify-between gap-2 text-[0.65rem]" style={{ color: "rgba(250, 247, 242, 0.2)" }}>
          <p>&copy; {new Date().getFullYear()} Nancy Musselman. All rights reserved.</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </footer>
  );
}
