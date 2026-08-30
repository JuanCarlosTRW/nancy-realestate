import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { NANCY_NAME, NANCY_BROKERAGE } from "@/lib/constants";

// QR sign-rider campaign spec — display/link formats are fixed by the printed
// material and intentionally differ from lib/constants.ts (dots vs dashes).
const QR_PHONE_DISPLAY = "214-797-8040";
const QR_PHONE_HREF = "tel:+12147978040";
const QR_EMAIL_DISPLAY = "Nmusselmanrealty@gmail.com";
const QR_EMAIL_HREF = "mailto:Nmusselmanrealty@gmail.com";

export const metadata: Metadata = {
  title: "Contact Nancy Musselman | Clancy Realty",
  description:
    "Contact Nancy Musselman, REALTOR® at Clancy Realty, by phone or email.",
  // QR-code utility page — keep it out of search results
  robots: { index: false },
};

export default function ContactNancyPage() {
  return (
    <section className="bg-warmWhite px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-md md:max-w-3xl lg:max-w-4xl">
        <div className="text-center md:grid md:grid-cols-[1fr_1.4fr] md:items-center md:bg-warmWhite md:border md:border-bordr md:rounded-[2px] md:shadow-warmLg md:p-10 lg:p-14">
          {/* Identity */}
          <div className="md:flex md:flex-col md:items-center md:pr-10 lg:pr-12">
            <div className="relative inline-block">
              <div
                className="absolute -inset-2 rounded-full border border-gold/40"
                aria-hidden="true"
              />
              <Image
                src="/images/nancy.jpg"
                alt={`${NANCY_NAME}, REALTOR® with ${NANCY_BROKERAGE}`}
                width={224}
                height={224}
                priority
                className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover object-top shadow-warm"
              />
            </div>

            <p className="font-display text-3xl text-darkText mt-6">
              {NANCY_NAME}
            </p>
            {/* text-accent (vs the site's gold eyebrows) keeps these 11px labels
                readable outdoors — the golds fall below AA contrast at this size */}
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] font-medium text-accent mt-2">
              REALTOR®
            </p>
            <p className="text-[11px] tracking-label uppercase font-medium text-accent mt-1">
              Clancy Realty
            </p>
          </div>

          {/* Actions */}
          <div className="md:border-l md:border-gold/20 md:pl-10 lg:pl-12 md:text-left">
            <div
              className="gold-divider w-16 mx-auto mt-7 md:hidden"
              aria-hidden="true"
            />

            <h1 className="h-display mt-8 md:mt-0">
              Interested in this property?
            </h1>
            <p className="body-p mt-4">
              Get in touch with Nancy for more information.
            </p>

            <div className="mt-10 md:mt-8 flex flex-col gap-4 md:max-w-sm">
              <a
                href={QR_PHONE_HREF}
                className="btn-base flex-col gap-1 py-5 bg-gold text-charcoal border border-gold hover:bg-goldLight hover:-translate-y-[2px] shadow-[0_6px_28px_rgba(196,169,108,0.3)] hover:shadow-[0_8px_36px_rgba(196,169,108,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-goldDark"
              >
                <span className="flex items-center gap-2.5">
                  <Phone size={18} aria-hidden="true" />
                  Call Nancy
                </span>
                <span className="normal-case tracking-normal text-[15px] font-normal">
                  {QR_PHONE_DISPLAY}
                </span>
              </a>

              <a
                href={QR_EMAIL_HREF}
                className="btn-base flex-col gap-1 py-5 bg-transparent text-darkText border border-gold hover:bg-gold/10 hover:-translate-y-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-goldDark"
              >
                <span className="flex items-center gap-2.5">
                  <Mail size={18} className="text-goldDark" aria-hidden="true" />
                  Email Nancy
                </span>
                <span className="normal-case tracking-normal text-[14px] font-normal text-mediumText break-all">
                  {QR_EMAIL_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
