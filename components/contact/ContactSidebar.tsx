import Image from "next/image";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import {
  IMG,
  NANCY_NAME,
  NANCY_BROKERAGE,
  NANCY_PHONE,
  NANCY_PHONE_TEL,
  NANCY_EMAIL,
  NANCY_LICENSE,
  TREC_IABS_URL,
  TREC_CPN_URL,
} from "@/lib/constants";

export default function ContactSidebar() {
  return (
    <div>
      <div className="relative w-full max-w-[380px] mx-auto lg:mx-0">
        <div className="absolute -inset-3 border border-gold/30 rounded-[2px] hidden md:block" />
        <div className="relative aspect-[4/5] bg-cream rounded-[2px] overflow-hidden shadow-warmLg">
          <Image
            src={IMG.nancy}
            alt="Nancy Musselman"
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover object-top"
          />
        </div>
      </div>

      <div className="mt-10">
        <p className="font-display text-3xl text-darkText">{NANCY_NAME}</p>
        <p className="text-[11px] tracking-label uppercase font-medium text-gold mt-2">
          {NANCY_BROKERAGE}
        </p>
        <div className="gold-divider w-12 mt-5" />
        <ul className="mt-6 space-y-4 text-[14px] text-mediumText font-light">
          <li className="flex items-start gap-3">
            <Phone size={16} className="text-gold mt-1 shrink-0" />
            <a
              href={`tel:${NANCY_PHONE_TEL}`}
              className="hover:text-gold transition-colors"
            >
              {NANCY_PHONE}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Mail size={16} className="text-gold mt-1 shrink-0" />
            <a
              href={`mailto:${NANCY_EMAIL}`}
              className="hover:text-gold transition-colors break-all"
            >
              {NANCY_EMAIL}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <MapPin size={16} className="text-gold mt-1 shrink-0" />
            <span>Dallas, Texas · DFW Metroplex</span>
          </li>
        </ul>
      </div>

      {/* Testimonial */}
      <div className="mt-10 p-6 bg-bgSection rounded-[2px]">
        <span
          className="font-display text-[40px] text-goldLight/30 leading-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-display italic text-darkText text-[15px] leading-[1.6] -mt-4">
          Nancy helped us find our home on the Preston Trails Golf Course in
          Bent Tree. She made us feel like we were her only clients.
        </p>
        <div className="w-8 h-px bg-gold/30 mt-4" />
        <p className="text-[11px] tracking-[0.1em] uppercase font-semibold text-darkText mt-3">
          The Martinez Family
        </p>
        <p className="text-[10px] tracking-[0.08em] uppercase text-goldLight mt-0.5">
          Homeowners &mdash; Preston Trails, Bent Tree
        </p>
      </div>

      {/* TREC legal links */}
      <div className="mt-8 p-4 bg-bgSection/50 border border-bordr/60 rounded-[2px]">
        <p className="text-[9px] tracking-label uppercase font-medium text-lightText mb-3">
          Texas Law Requires
        </p>
        <ul className="space-y-2 text-[11px] font-light text-lightText">
          <li className="flex items-start gap-2">
            <FileText size={12} className="text-gold/60 mt-0.5 shrink-0" />
            <a
              href={TREC_IABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2 decoration-gold/30"
            >
              Information About Brokerage Services
            </a>
          </li>
          <li className="flex items-start gap-2">
            <FileText size={12} className="text-gold/60 mt-0.5 shrink-0" />
            <a
              href={TREC_CPN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2 decoration-gold/30"
            >
              Consumer Protection Notice
            </a>
          </li>
        </ul>
        <p className="text-[10px] text-lightText/70 mt-3 pt-3 border-t border-bordr/40">
          {NANCY_LICENSE}
        </p>
      </div>
    </div>
  );
}
