import AboutSplit from "@/components/AboutSplit";
import CardFeatureSection from "@/components/CardFeatureSection";
import PageHero from "@/components/PageHero";
import PartnerStrip from "@/components/PartnerStrip";
import { aboutVisual, excellenceFeatures, pageHeroImage, partnerLogos, services } from "@/lib/content";

export const metadata = {
  title: "About | iMentor",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" image={pageHeroImage} />
      <AboutSplit image={aboutVisual} />
      <PartnerStrip items={partnerLogos} />
      <CardFeatureSection
        title="Excellence in Tutoring Services"
        subtitle="Discover the Benefits of Personalized Learning"
        items={excellenceFeatures}
      />
      <CardFeatureSection
        title="Explore Our Services"
        subtitle="Diverse Learning Opportunities to Fit Your Needs"
        items={services}
        className="section-white"
      />
    </>
  );
}
