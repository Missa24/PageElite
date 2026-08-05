import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { CtaBanner } from "@/components/blocks/ctabanner";
import { Cursos } from "@/components/blocks/course";
import { Docentes } from "@/components/blocks/docente";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Features />
        <Cursos />
        <Docentes />
      </Background>

      <Background variant="bottom">
        <CtaBanner />
        <FAQ />

      </Background>
    </>
  );
}
