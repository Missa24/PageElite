import type { Metadata } from "next";

import { Background } from "@/components/background";
import { CommunityScrollStory } from "@/components/blocks/community-scroll-story";
import { FAQ } from "@/components/blocks/faq";
import { FeaturesStickyScroll } from "@/components/blocks/features-sticky-scroll";
import { GoalsScrollSection } from "@/components/blocks/goals-scroll-section";
import { Hero } from "@/components/blocks/hero";
import { InteractiveCta } from "@/components/blocks/interactive-cta";
import { InternationalCommunity } from "@/components/blocks/international-community";
import { CategoryShowcase } from "@/components/categorias/category-showcase";
import { FeaturedCourses } from "@/components/cursos/featured-courses";
import { TestimonialShowcase } from "@/components/testimonio/testimonial-showcase";

export const metadata: Metadata = {
  title: "ELITE Academy | Aprende. Crea. Evoluciona.",
  description:
    "Aprende nuevas habilidades con cursos prácticos y creados para llevar el conocimiento a la acción.",
};

export default function Home() {
  return (
    <Background>
      <Hero />

      <FeaturedCourses />

      <InternationalCommunity />

      <TestimonialShowcase />

      <FeaturesStickyScroll />

      <CategoryShowcase />

      <CommunityScrollStory />

      <GoalsScrollSection />

      <InteractiveCta />

      <FAQ />
    </Background>
  );
}