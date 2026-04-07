import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import MeetAgent from "@/components/home/MeetAgent";
import Services from "@/components/home/Services";
import FeaturedListings from "@/components/home/FeaturedListings";
import ParallaxShowcase from "@/components/home/ParallaxShowcase";
import Testimonials from "@/components/home/Testimonials";
import Neighborhoods from "@/components/home/Neighborhoods";
import CTABanner from "@/components/layout/CTABanner";
import { IMG } from "@/lib/constants";

export default function Home() {
  return (
    <ScrollExpandMedia
      mediaSrc={IMG.heroExterior}
      bgImageSrc={IMG.heroExterior}
      titleStart="Real Estate,"
      titleAccent="Done Personally"
      date="Dallas · Fort Worth · North Texas"
      subtitle="Personalized real estate service across Dallas–Fort Worth. Whether you're buying your first home or selling your fifth, Nancy guides every step with clarity and care."
      textBlend
    >
      <MeetAgent />
      <Services />
      <FeaturedListings />
      <ParallaxShowcase />
      <Testimonials />
      <Neighborhoods />
      <CTABanner />
    </ScrollExpandMedia>
  );
}
