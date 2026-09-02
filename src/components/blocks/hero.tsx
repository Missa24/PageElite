"use client";

import Image from "next/image";

import { CourseSearch } from "@/components/cursos/couse-search";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export const Hero = () => {
  const words = [
    {
      text: "Aprende.",
    },
    {
      text: "Crea.",
    },
    {
      text: "Evoluciona.",
      className: "text-primary",
    },
  ];

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-24 sm:pt-28 lg:min-h-[75vh] lg:pt-44">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2200&auto=format&fit=crop"
          alt="Personas aprendiendo"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-background/85 sm:bg-background/80" />

        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
      </div>

      <div className="pointer-events-none absolute top-32 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] sm:h-96 sm:w-96" />

      <div className="container flex justify-center">
        <div className="w-full max-w-5xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground sm:mb-6 sm:text-sm sm:tracking-[0.35em]">
            Learn · Create · Evolve
          </p>

          <div className="flex justify-center">
            <TypewriterEffect words={words} />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg md:text-xl">
            Descubre cursos, desarrolla nuevas habilidades y aprende
            de profesionales que convierten su experiencia en
            conocimiento.
          </p>

          <CourseSearch />
        </div>
      </div>
    </section>
  );
};
