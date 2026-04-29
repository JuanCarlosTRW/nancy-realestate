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

              {/* Trust Badges — official mark layout with text labels */}
              <div className="flex items-center gap-3 mt-2">

                {/* REALTOR® Mark with Text */}
                <div
                  className="flex items-center justify-center"
                  style={{ backgroundColor: "#FAF7F2", padding: "6px 10px", height: "44px" }}
                  aria-label="REALTOR®"
                  title="REALTOR®"
                >
                  <svg
                    viewBox="0 0 120 60"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: "32px", width: "auto" }}
                    aria-hidden="true"
                  >
                    <rect x="0" y="0" width="56" height="60" fill="#2A2A2A" />
                    <path
                      d="M 14 12 L 14 48 L 22 48 L 22 34 L 28 34 L 36 48 L 46 48 L 36 32 C 42 30 44 25 44 20 C 44 14 39 12 32 12 L 14 12 Z M 22 18 L 30 18 C 33 18 35 19 35 22 C 35 25 33 27 30 27 L 22 27 L 22 18 Z"
                      fill="#FAF7F2"
                    />
                    <circle cx="50" cy="16" r="3" fill="none" stroke="#FAF7F2" strokeWidth="0.8" />
                    <text x="50" y="17.5" textAnchor="middle" fontSize="4" fontFamily="serif" fontWeight="bold" fill="#FAF7F2">R</text>
                    <text x="62" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" fontWeight="700" letterSpacing="0.5" fill="#2A2A2A">REALTOR</text>
                    <text x="108" y="32" fontFamily="Arial, Helvetica, sans-serif" fontSize="6" fontWeight="700" fill="#2A2A2A">®</text>
                  </svg>
                </div>

                {/* Equal Housing Opportunity with Text */}
                <div
                  className="flex items-center justify-center"
                  style={{ backgroundColor: "#FAF7F2", padding: "6px 10px", height: "44px" }}
                  aria-label="Equal Housing Opportunity"
                  title="Equal Housing Opportunity"
                >
                  <svg
                    viewBox="0 0 160 60"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height: "32px", width: "auto" }}
                    aria-hidden="true"
                  >
                    <path
                      d="M 28 14 L 8 30 L 14 30 L 14 50 L 42 50 L 42 30 L 48 30 Z"
                      fill="none"
                      stroke="#2A2A2A"
                      strokeWidth="2.5"
                      strokeLinejoin="miter"
                    />
                    <rect x="20" y="34" width="16" height="2.5" fill="#2A2A2A" />
                    <rect x="20" y="40" width="16" height="2.5" fill="#2A2A2A" />
                    <text x="56" y="28" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.3" fill="#2A2A2A">EQUAL HOUSING</text>
                    <text x="56" y="42" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.3" fill="#2A2A2A">OPPORTUNITY</text>
                  </svg>
                </div>

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
