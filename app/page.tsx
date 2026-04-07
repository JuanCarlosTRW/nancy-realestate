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
      title="Your Elevated"
      date="Dallas · Fort Worth · North Texas"
      scrollToExpand="Scroll to Begin"
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
