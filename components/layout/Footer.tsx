import Image from "next/image";
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
  BEAM_OFFICE_PHONE,
  BEAM_OFFICE_PHONE_TEL,
  BEAM_DESIGNATED_BROKER,
  BEAM_LOGO_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal mt-0">
      {/* Gold divider at top */}
      <div className="h-px w-full" style={{ background: "rgba(196, 169, 108, 0.1)" }} />

      <div className="container-x px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1 — Nancy's Personal Branding */}
        <div>
          <p className="font-display text-[1.25rem] tracking-[0.05em]" style={{ color: "#FAF7F2" }}>
            Nancy Musselman
          </p>
          <p className="text-[0.55rem] tracking-[0.2em] uppercase font-medium text-gold mt-2">
            REALTOR® | {NANCY_BROKERAGE}
          </p>
          <p className="mt-6 text-[0.8rem] leading-[1.9] font-light max-w-sm" style={{ color: "rgba(250, 247, 242, 0.6)" }}>
            Years of local knowledge, professional experience, and a
            people-first approach to every transaction.
          </p>
          <ul className="mt-6 space-y-2 text-[0.8rem]">
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
          </ul>
        </div>

        {/* Column 2 — Brokerage Identification (TREC §535.154) */}
        <div>
          <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            Brokerage
          </p>
          <Image
            src={BEAM_LOGO_URL}
            alt="Beam Real Estate"
            width={200}
            height={80}
            className="mb-4 w-auto h-[60px] md:h-[80px] object-contain object-left"
            unoptimized
          />
          <h3 className="font-display text-2xl font-medium mb-3" style={{ color: "#FAF7F2" }}>
            Beam Real Estate
          </h3>
          <p className="text-[0.8rem] mb-1" style={{ color: "rgba(250, 247, 242, 0.65)" }}>
            <span style={{ color: "#C6A96C" }}>Office: </span>
            <a
              href={`tel:${BEAM_OFFICE_PHONE_TEL}`}
              className="hover:text-gold transition-colors duration-200"
            >
              {BEAM_OFFICE_PHONE}
            </a>
          </p>
          <p className="text-[0.8rem]" style={{ color: "rgba(250, 247, 242, 0.65)" }}>
            <span style={{ color: "#C6A96C" }}>Designated Broker: </span>
            {BEAM_DESIGNATED_BROKER}
          </p>
        </div>

        {/* Column 3 — Navigation & Legal */}
        <div>
          <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV_ITEMS.map((i) => (
              <li key={i.href}>
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

          {/* TREC Legal Links — TREC §535.154, minimum 13px for full titles */}
          <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase mb-3" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
              Legal
            </p>
            <a
              href={TREC_IABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] underline underline-offset-2 mb-2 hover:text-gold transition-colors duration-200"
              style={{ color: "rgba(250, 247, 242, 0.70)" }}
            >
              Texas Real Estate Commission Information About Brokerage Services
            </a>
            <a
              href={TREC_CPN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[13px] underline underline-offset-2 hover:text-gold transition-colors duration-200"
              style={{ color: "rgba(250, 247, 242, 0.70)" }}
            >
              Texas Real Estate Commission Consumer Protection Notice
            </a>
          </div>
        </div>

      </div>

      {/* Bottom compliance bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div
          className="container-x px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-[0.65rem]"
          style={{ color: "rgba(250, 247, 242, 0.25)" }}
        >
          <p>
            {NANCY_LEGAL_NAME} &middot; {NANCY_LICENSE} &middot; REALTOR® &middot; Equal Housing Opportunity
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <p>&copy; {new Date().getFullYear()} Nancy Musselman. All rights reserved.</p>
            <a
              href="https://clientgrowth.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold/50 transition-colors duration-200"
              style={{ color: "rgba(250, 247, 242, 0.25)" }}
            >
              Designed by Client Growth
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
