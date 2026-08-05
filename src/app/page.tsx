import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Gallery } from "@/components/blocks/gallery";
import { Cursos } from "@/components/blocks/course";
import { Docentes } from "@/components/blocks/docente";

export default function Home() {
  return (
    <>
      <Background className="">
        <Hero />
        <Features />
        <Cursos />
        <Docentes />
        <Gallery />
        <FAQ />
      </Background>
    </>
  );
}
