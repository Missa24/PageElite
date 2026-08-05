import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden py-24 sm:py-28 lg:min-h-[90vh] lg:py-32 lg:pt-44">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2200&auto=format&fit=crop"
          alt="Cosmetología profesional"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 sm:bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
      </div>

      <div className="pointer-events-none absolute top-32 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] sm:h-96 sm:w-96" />

      <div className="container flex justify-center">
        <div className="max-w-4xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:mb-6 sm:text-sm sm:tracking-[0.35em]">
            Beauty · Style · Professional
          </p>

          <h1 className="text-4xl font-semibold leading-[1] tracking-tight sm:text-5xl md:text-6xl lg:text-8xl">
            Donde la belleza
            <br />
            se convierte en arte
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
            En <span className="font-medium text-foreground">ELITE Academy</span>{" "}
            formamos profesionales en cosmetología, estética y belleza integral
            con técnicas actuales y una metodología práctica.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button size="lg" className="h-12 px-8" asChild>
              <a href="#">
                Empieza tu formación
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 px-8"
              asChild
            >
              <a href="#">
                Explorar cursos
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-xs text-muted-foreground sm:mt-14 sm:gap-6 sm:text-sm">
          </div>
        </div>
      </div>
    </section>
  );
};
