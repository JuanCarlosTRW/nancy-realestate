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
      <div className="container-x px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-white">Nancy Musselman</p>
          <p className="text-[10px] tracking-label uppercase font-medium text-gold mt-2">
            {NANCY_BROKERAGE} · Dallas, TX
          </p>
          <p className="mt-6 text-[13px] leading-[1.9] font-light max-w-sm">
            Born and raised in the DFW Metroplex. Fifty-plus years of local
            knowledge, twenty-two years of professional experience in
            accounting and HR, and a people-first approach to every
            transaction.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-medium tracking-label uppercase text-gold mb-5">
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
          <p className="text-[11px] font-medium tracking-label uppercase text-gold mb-5">
            Contact
          </p>
          <ul className="space-y-3 text-[13px]">
            <li>
              <a
                href={`tel:${NANCY_PHONE_TEL}`}
                className="hover:text-gold transition-colors"
              >
                {NANCY_PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${NANCY_EMAIL}`}
                className="hover:text-gold transition-colors break-all"
              >
                {NANCY_EMAIL}
              </a>
            </li>
            <li>Dallas, TX</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x px-6 md:px-12 py-6 text-[10px] text-white/50 leading-[1.9]">
          <p className="mb-2">
            Texas law requires all license holders to provide clients with:
            {" "}
            <a
              href={TREC_IABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2"
            >
              Information About Brokerage Services
            </a>
            {" · "}
            <a
              href={TREC_CPN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2"
            >
              Consumer Protection Notice
            </a>
          </p>
          <p>
            {NANCY_LEGAL_NAME} · {NANCY_LICENSE} · {NANCY_BROKERAGE}
          </p>
        </div>
        <div className="container-x px-6 md:px-12 pb-6 flex flex-col md:flex-row justify-between gap-2 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Nancy Musselman. All rights reserved.</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </footer>
  );
}
