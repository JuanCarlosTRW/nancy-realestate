import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export const metadata: Metadata = {
  title: "Contact Nancy Musselman | Dallas Real Estate",
  description:
    "Get in touch with Nancy Musselman, Dallas real estate agent with Beam Real Estate. No pressure, no sales pitch.",
};

export default function ContactPage() {
  return (
    <section className="section-pad bg-warmWhite pt-28 md:pt-40">
      <div className="container-x grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
        <ContactForm />
        <ContactSidebar />
      </div>
    </section>
  );
}
