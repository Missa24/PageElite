import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Cursos } from "@/components/blocks/course";
import { Docentes } from "@/components/blocks/docente";
import { FAQ } from "@/components/blocks/faq";
import { Gallery } from "@/components/blocks/gallery";
import { Hero } from "@/components/blocks/hero";
import { FeaturedCourses } from "@/components/cursos/featured-courses";
import { FeaturesStickyScroll } from "@/components/blocks/features-sticky-scroll";
import { CategoryShowcase } from "@/components/categorias/category-showcase";
import { TestimonialShowcase } from "@/components/testimonio/testimonial-showcase";
import { InternationalCommunity } from "@/components/blocks/international-community";
import { CommunityScrollStory } from "@/components/blocks/community-scroll-story";
import { GoalsScrollSection } from "@/components/blocks/goals-scroll-section";
import { InteractiveCta } from "@/components/blocks/interactive-cta";

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