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

      {/* TREC legal links */}
      <div className="mt-10 p-6 bg-bgSection border border-bordr rounded-[2px]">
        <p className="text-[10px] tracking-label uppercase font-medium text-gold mb-4">
          Texas Law Requires
        </p>
        <ul className="space-y-3 text-[12px] font-light text-mediumText">
          <li className="flex items-start gap-2">
            <FileText size={14} className="text-gold mt-0.5 shrink-0" />
            <a
              href={TREC_IABS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2 decoration-gold/40"
            >
              Information About Brokerage Services
            </a>
          </li>
          <li className="flex items-start gap-2">
            <FileText size={14} className="text-gold mt-0.5 shrink-0" />
            <a
              href={TREC_CPN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold underline underline-offset-2 decoration-gold/40"
            >
              Consumer Protection Notice
            </a>
          </li>
        </ul>
        <p className="text-[11px] text-lightText mt-4 pt-4 border-t border-bordr">
          {NANCY_LICENSE}
        </p>
      </div>
    </div>
  );
}
