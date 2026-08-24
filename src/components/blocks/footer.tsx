import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Music2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "¿Por qué elegirnos?", href: "/#porque" },
    { name: "Docentes", href: "/#docentes" },
    { name: "Preguntas frecuentes", href: "/#faq" },
    { name: "Contáctanos", href: "/#cta" },
  ];

  const social = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/elitelacademybolivia/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/eliteacademybo/",
      icon: Instagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@eliteacademy.bo",
      icon: Music2,
    },
  ];

  const legal = [
    { name: "Política de privacidad", href: "/privacy" },
  ];

  return (
    <footer className="relative flex flex-col items-center gap-14 overflow-hidden pb-20 pt-28 lg:pt-32">
      <div className="container z-10 space-y-3 text-center">
        <h2 className="text-sm tracking-tight md:text-4xl lg:text-2xl">
          Empieza hoy tu camino en la belleza profesional.
        </h2>

        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Forma parte de Elite Academy y desarrolla las habilidades que te
          abrirán nuevas oportunidades en el mundo de la cosmetología y la
          estética.
        </p>

        <div>
          <Button size="lg" className="mt-4" asChild>
            <a
              href="https://wa.me/59164152202?text=Hola%2C%20estoy%20interesado%2Fa%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n.%20Vi%20su%20p%C3%A1gina%20web%20y%20quisiera%20conocer%20m%C3%A1s%20detalles%20sobre%20sus%20cursos%2C%20precios%20y%20c%C3%B3mo%20puedo%20inscribirme.%20%C2%A1Gracias%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </a>
          </Button>

        </div>
      </div>

      <nav className="container z-10 flex flex-col items-center gap-6">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-center gap-5">
          {social.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-foreground transition-colors"
                  aria-label={item.name}
                >
                  <Icon className="size-5" />
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-full translate-y-[25%] opacity-70">
        <div className="relative w-full">
          <Image
            src="/footer2.svg"
            alt=""
            width={1200}
            height={200}
            className="h-auto w-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/80 to-background" />
        </div>
      </div>
    </footer>
  );
}