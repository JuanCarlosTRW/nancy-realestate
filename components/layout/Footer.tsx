import Image from "next/image";
import Link from "next/link";
import {
  NAV_ITEMS,
  NANCY_BROKERAGE,
  NANCY_PHONE,
  NANCY_PHONE_TEL,
  NANCY_EMAIL,
  TREC_IABS_URL,
  TREC_CPN_URL,
  BEAM_OFFICE_PHONE,
  BEAM_OFFICE_PHONE_TEL,
  BEAM_DESIGNATED_BROKER,
  BEAM_LEGAL_NAME,
  BEAM_LOGO_URL,
  REALTOR_LOGO_URL,
  EHO_LOGO_URL,
  COMPLIANCE_DISCLAIMER,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-charcoal mt-0">
      {/* Gold divider at top */}
      <div className="h-px w-full" style={{ background: "rgba(196, 169, 108, 0.1)" }} />

      {/* ── ZONE 1 — Personal Branding & Navigation ── */}
      <div className="container-x px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Nancy */}
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
        </div>

        {/* Col 2 — Let's Connect */}
        <div>
          <p className="text-[0.6rem] font-medium tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(250, 247, 242, 0.45)" }}>
            Let&apos;s Connect
          </p>
          <ul className="space-y-3 text-[0.8rem]">
            <li>
              <a
                href={`mailto:${NANCY_EMAIL}`}
                className="hover:text-gold transition-colors duration-200 break-all"
                style={{ color: "rgba(250, 247, 242, 0.65)" }}
              >
                {NANCY_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`tel:${NANCY_PHONE_TEL}`}
                className="hover:text-gold transition-colors duration-200"
                style={{ color: "rgba(250, 247, 242, 0.65)" }}
              >
                {NANCY_PHONE}
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Navigate */}
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
        </div>

      </div>

      {/* ── ZONE 2 — Brokerage Compliance Block (TREC §535.154) ── */}
      <div
        className="container-x px-6 md:px-12 py-10 md:py-12"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">

          {/* Left — Beam Logo */}
          <div className="flex-shrink-0">
            <Image
              src={BEAM_LOGO_URL}
              alt="Beam Real Estate, LLC"
              width={180}
              height={90}
              className="h-[70px] md:h-[90px] w-auto object-contain object-left"
              unoptimized
            />
          </div>

          {/* Right — TREC Links + Brokerage Info */}
          <div className="flex flex-col gap-5">

            {/* TREC Legal Links — minimum 13px per §535.154 */}
            <div className="flex flex-col gap-1.5">
              <a
                href={TREC_CPN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] underline underline-offset-2 hover:text-gold transition-colors duration-200"
                style={{ color: "rgba(250, 247, 242, 0.85)" }}
              >
                Texas Real Estate Commission Consumer Protection Notice
              </a>
              <a
                href={TREC_IABS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] underline underline-offset-2 hover:text-gold transition-colors duration-200"
                style={{ color: "rgba(250, 247, 242, 0.85)" }}
              >
                Texas Real Estate Commission Information About Brokerage Services
              </a>
              <a
                href={TREC_CPN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] underline underline-offset-2 hover:text-gold transition-colors duration-200"
                style={{ color: "rgba(250, 247, 242, 0.85)" }}
              >
                TREC Disclaimer
              </a>
            </div>

            {/* Brokerage Identification */}
            <div className="flex flex-col gap-1">
              <p className="text-[14px]" style={{ color: "rgba(250, 247, 242, 0.85)" }}>
                {BEAM_LEGAL_NAME} | Office Number:{" "}
                <a
                  href={`tel:${BEAM_OFFICE_PHONE_TEL}`}
                  className="hover:text-gold transition-colors duration-200 underline underline-offset-2"
                >
                  {BEAM_OFFICE_PHONE}
                </a>
              </p>
              <p className="text-[14px]" style={{ color: "rgba(250, 247, 242, 0.85)" }}>
                Designated Broker: {BEAM_DESIGNATED_BROKER}
              </p>
            </div>

            {/* Reliability Disclaimer */}
            <p className="text-[12px] leading-relaxed" style={{ color: "rgba(250, 247, 242, 0.55)" }}>
              {COMPLIANCE_DISCLAIMER}
            </p>

            {/* Trust Badges — REALTOR® + Equal Housing Opportunity */}
            <div className="flex items-center gap-3 mt-1">
              <Image
                src={REALTOR_LOGO_URL}
                alt="REALTOR®"
                width={96}
                height={96}
                className="h-24 w-auto"
                unoptimized
              />
              <Image
                src={EHO_LOGO_URL}
                alt="Equal Housing Opportunity"
                width={96}
                height={96}
                className="h-24 w-auto"
                unoptimized
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── ZONE 3 — Bottom Strip ── */}
      <div
        className="container-x px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-[0.7rem]"
        style={{ color: "rgba(250, 247, 242, 0.35)" }}
      >
        <p>
          &copy; {new Date().getFullYear()} Nancy Musselman. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
