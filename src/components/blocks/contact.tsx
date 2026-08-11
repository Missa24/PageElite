import React from "react";

import Link from "next/link";

import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
  Music2,
} from "lucide-react";
import { Metadata } from "next";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

export const metadata: Metadata = {
  title: "Contacto | Elite Academy Bolivia",
  description:
    "Contacta con Elite Academy en La Paz, Bolivia. Solicita información sobre cursos de cosmetología, estética, maquillaje y formación profesional con resolución ministerial.",
  keywords: [
    "contacto Elite Academy",
    "Elite Academy Bolivia",
    "academia de belleza La Paz",
    "cursos de cosmetología Bolivia",
    "cursos de estética Bolivia",
    "formación profesional belleza",
  ],
};


const contactInfo = [
  {
    title: "Ubicación",
    content: (
      <div className="mt-3">
        <Link
          href="https://maps.app.goo.gl/7VvaLyEHmudN62bc6"
          target="_blank"
          className="flex gap-2 text-muted-foreground transition hover:text-foreground"
        >
          <MapPin className="mt-1 size-4 shrink-0" />
          <span>
            Sub Suelo, Murillo entre Sagarnaga Y
            <br />
            Elite Professional, Cochabamba 979
          </span>
        </Link>
      </div>
    ),
  },
  {
    title: "Contacto",
    content: (
      <div className="mt-3 space-y-2">
        <Link
          href="mailto:elite.academy.bo@gmail.com"
          className="flex gap-2 text-muted-foreground transition hover:text-foreground"
        >
          <Mail className="size-4" />
          elite.academy.bo@gmail.com
        </Link>

        <Link
          href="tel:64152202"
          className="flex gap-2 text-muted-foreground transition hover:text-foreground"
        >
          <Phone className="size-4" />
          64152202
        </Link>
      </div>
    ),
  },
  {
    title: "Horario",
    content: (
      <div className="mt-3 flex gap-2 text-muted-foreground">
        <Clock className="mt-1 size-4" />
        <p>
          Lunes a sábado
          <br />
          Hasta las 8:30 p.m.
        </p>
      </div>
    ),
  },
  {
    title: "Síguenos",
    content: (
      <div className="mt-3 flex gap-5">
        <Link
          href="https://www.facebook.com/elitelacademybolivia/"
          target="_blank"
          className="text-muted-foreground transition hover:text-foreground"
        >
          <Facebook className="size-5" />
        </Link>

        <Link
          href="https://www.instagram.com/eliteacademybo/"
          target="_blank"
          className="text-muted-foreground transition hover:text-foreground"
        >
          <Instagram className="size-5" />
        </Link>

        <Link
          href="https://www.tiktok.com/@eliteacademy.bo"
          target="_blank"
          className="text-muted-foreground transition hover:text-foreground"
        >
          <Music2 className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-5xl">
        <h1 className="text-center text-3xl font-semibold tracking-tight md:text-5xl">
          Contáctanos
        </h1>

        <p className="mt-4 text-center text-muted-foreground">
          Estamos listos para ayudarte a iniciar tu formación profesional en belleza.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <div key={info.title}>
              <h2 className="font-medium">
                {info.title}
              </h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold">
              Solicita información
            </h2>

            <ContactForm />
          </div>

          <div>
            <h2 className="mb-6 text-xl font-semibold">
              Encuéntranos
            </h2>

            <div className="overflow-hidden rounded-2xl border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.560692873878!2d-68.13971492508631!3d-16.497767584245548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f212347715971%3A0xfb39d76e0a9d6ada!2sELITE%20ACADEMY!5e0!3m2!1sen!2sbo!4v1786453734591!5m2!1sen!2sbo"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
