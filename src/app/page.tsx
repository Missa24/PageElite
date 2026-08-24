import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Cursos } from "@/components/blocks/course";
import { Docentes } from "@/components/blocks/docente";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Gallery } from "@/components/blocks/gallery";
import { Hero } from "@/components/blocks/hero";

export const metadata: Metadata = {
  title: "Elite Academy | Academia de Cosmetología y Estética en Bolivia",
  description:
    "Elite Academy Bolivia forma profesionales en cosmetología, estética facial, estética corporal y maquillaje con resolución ministerial.",
  keywords: [
    "Elite Academy Bolivia",
    "academia de belleza Bolivia",
    "cosmetología Bolivia",
    "cursos de estética Bolivia",
    "cursos de maquillaje Bolivia",
    "estética facial profesional",
    "estética corporal profesional",
    "resolución ministerial Bolivia",
  ],
};

export default function Home() {
  return (
    <Background>
      <Hero />
      <Features />
      <Cursos />
      <Docentes />
      <Gallery />
      <FAQ />
    </Background>
  );
}