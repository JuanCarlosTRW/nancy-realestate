import Image from "next/image";
import Link from "next/link";
import {
  NAV_ITEMS,
  NANCY_PHONE,
  NANCY_PHONE_TEL,
  NANCY_EMAIL,
  NANCY_LEGAL_NAME,
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
    <footer style={{ backgroundColor: "#2A2A2A", color: "#FAF7F2" }}>
      {/* Gold divider at top */}
      <div className="h-px w-full" style={{ background: "rgba(196, 169, 108, 0.1)" }} />

      <div className="px-6 md:px-12 py-16 md:py-20 flex flex-col gap-10 md:gap-12 max-w-3xl mx-auto">

        {/* ── ZONE 1 — Nancy Identity ── */}
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide" style={{ color: "#FAF7F2" }}>
            Nancy Musselman{" "}
            <span style={{ color: "#C6A96C" }}>|</span>{" "}
            REALTOR<sup className="text-base">®</sup>
          </h2>
          <p
            className="text-[0.7rem] font-medium tracking-[0.25em] uppercase"
            style={{ color: "#C6A96C" }}
          >
            Beam Real Estate
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <a
              href={`mailto:${NANCY_EMAIL}`}
              className="text-[15px] hover:text-[#C6A96C] transition-colors"
              style={{ color: "rgba(250, 247, 242, 0.85)" }}
            >
              <span style={{ color: "#C6A96C" }} className="mr-2">Email:</span>
              {NANCY_EMAIL}
            </a>
            <a
              href={`tel:${NANCY_PHONE_TEL}`}
              className="text-[15px] hover:text-[#C6A96C] transition-colors"
              style={{ color: "rgba(250, 247, 242, 0.85)" }}
            >
              <span style={{ color: "#C6A96C" }} className="mr-2">Phone:</span>
              {NANCY_PHONE}
            </a>
          </div>
        </div>

        {/* ── ZONE 2 — Brokerage Compliance Block (TREC §535.154) ── */}
        <div
          className="pt-10 md:pt-12"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start">

            {/* Beam Logo */}
            <div className="flex-shrink-0">
              <Image
                src={BEAM_LOGO_URL}
                alt="Beam Real Estate, LLC"
                width={140}
                height={70}
                className="h-[55px] md:h-[65px] w-auto object-contain object-left"
                unoptimized
              />
            </div>

            {/* TREC Links + Compliance Info */}
            <div className="flex flex-col gap-5">

              {/* TREC Legal Links — 16px = 12pt per §535.154 */}
              <div className="flex flex-col gap-1.5">
                <a
                  href={TREC_CPN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] underline underline-offset-2 hover:text-[#C6A96C] transition-colors"
                  style={{ color: "rgba(250, 247, 242, 0.85)" }}
                >
                  Texas Real Estate Commission Consumer Protection Notice
                </a>
                <a
                  href={TREC_IABS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] underline underline-offset-2 hover:text-[#C6A96C] transition-colors"
                  style={{ color: "rgba(250, 247, 242, 0.85)" }}
                >
                  Texas Real Estate Commission Information About Brokerage Services
                </a>
                <a
                  href={TREC_CPN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] underline underline-offset-2 hover:text-[#C6A96C] transition-colors"
                  style={{ color: "rgba(250, 247, 242, 0.85)" }}
                >
                  TREC Disclaimer
                </a>
              </div>

              {/* Brokerage Identification */}
              <div className="flex flex-col gap-1">
                <p className="text-[14px]" style={{ color: "rgba(250, 247, 242, 0.85)" }}>
                  {BEAM_LEGAL_NAME}{" "}
                  <span style={{ opacity: 0.5 }}>|</span>{" "}
                  Office Number:{" "}
                  <a
                    href={`tel:${BEAM_OFFICE_PHONE_TEL}`}
                    className="hover:text-[#C6A96C] transition-colors underline underline-offset-2"
                  >
                    {BEAM_OFFICE_PHONE}
                  </a>
                </p>
                <p className="text-[14px]" style={{ color: "rgba(250, 247, 242, 0.85)" }}>
                  Designated Broker: {BEAM_DESIGNATED_BROKER}
                </p>
              </div>

              {/* Reliability Disclaimer */}
              <p
                className="text-[12px] leading-relaxed"
                style={{ color: "rgba(250, 247, 242, 0.55)" }}
              >
                {COMPLIANCE_DISCLAIMER}
              </p>

              {/* Trust Badges — REALTOR® + Equal Housing Opportunity */}
              <div className="flex items-center gap-3 mt-1">
                <Image
                  src={REALTOR_LOGO_URL}
                  alt="REALTOR®"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                  unoptimized
                />
                <Image
                  src={EHO_LOGO_URL}
                  alt="Equal Housing Opportunity"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                  unoptimized
                />
              </div>

            </div>
          </div>
        </div>

        {/* ── ZONE 3 — Navigate ── */}
        <div
          className="pt-10 md:pt-12"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <p
            className="text-[0.65rem] font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: "rgba(250, 247, 242, 0.45)" }}
          >
            Navigate
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14px] hover:text-[#C6A96C] transition-colors"
                style={{ color: "rgba(250, 247, 242, 0.75)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>

      {/* ── ZONE 4 — Bottom Strip ── */}
      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div
          className="px-6 md:px-12 py-6 max-w-3xl mx-auto text-[0.7rem]"
          style={{ color: "rgba(250, 247, 242, 0.35)" }}
        >
          <p>&copy; {new Date().getFullYear()} {NANCY_LEGAL_NAME}. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}
