import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export const metadata: Metadata = {
  title: "Contact Nancy | Dallas Real Estate",
  description:
    "Tell Nancy what you're looking for and she'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        titleStart="Let's Start a"
        titleAccent="Conversation"
        subtitle="No pressure, no obligation. Tell me what you're looking for and I'll get back to you within 24 hours."
      />
      <section className="section-pad bg-warmWhite">
        <div className="container-x grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>
    </>
  );
}
