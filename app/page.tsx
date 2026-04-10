import HeroIntro from "@/components/home/HeroIntro";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import WhyNancy from "@/components/home/WhyNancy";
import MeetAgent from "@/components/home/MeetAgent";
import Services from "@/components/home/Services";
import Neighborhoods from "@/components/home/Neighborhoods";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/layout/CTABanner";

export default function Home() {
  return (
    <>
      <HeroIntro />
      <Hero />
      <TrustBar />
      <WhyNancy />
      <MeetAgent />
      <Services />
      <Neighborhoods />
      <Testimonials />
      <CTABanner />
    </>
  );
}
