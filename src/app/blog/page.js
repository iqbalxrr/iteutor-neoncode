import BlogGrid from "@/components/BlogGrid";
import PageHero from "@/components/PageHero";
import { blogPosts, pageHeroImage } from "@/lib/content";

export const metadata = {
  title: "Blogs | iMentor",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blogs" image={pageHeroImage} />
      <BlogGrid items={blogPosts} className="section-soft" />
    </>
  );
}
