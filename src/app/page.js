import AboutSplit from "@/components/AboutSplit";
import AchievementsStrip from "@/components/AchievementsStrip";
import BlogGrid from "@/components/BlogGrid";
import CardFeatureSection from "@/components/CardFeatureSection";
import HomeHero from "@/components/HomeHero";
import PartnerStrip from "@/components/PartnerStrip";
import TestimonialsSection from "@/components/TestimonialsSection";
import TutorsGrid from "@/components/TutorsGrid";
import {
  aboutVisual,
  achievements,
  blogPosts,
  excellenceFeatures,
  homeHero,
  partnerLogos,
  services,
  testimonials,
  tutors,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HomeHero hero={homeHero} />
      <PartnerStrip items={partnerLogos} />
      <AboutSplit image={aboutVisual} />
      <AchievementsStrip items={achievements} />
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
      <TestimonialsSection items={testimonials} />
      <TutorsGrid
        items={tutors}
        title="Our Tutors"
        subtitle="Explore our diverse community of expert tutors"
        compact
        showViewAll
      />
      <BlogGrid
        items={blogPosts}
        title="Our Latest Blog Posts"
        subtitle="Dive into topics that matter in education"
        limit={3}
      />
    </>
  );
}
