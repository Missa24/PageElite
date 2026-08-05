import Image from "next/image";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Docente {
  nombre: string;
  cargo: string;
  detalles: string[];
  imagen?: string;
}

const docentes: Docente[] = [
  {
    nombre: "Derm. Jolie Beltrán Molina",
    cargo: "Directora Académica · Docente de Dermatocosmiatría, Estética y Maquillaje Profesional",
    detalles: [
      "Dermatocosmiatra, Esteticista y Maquilladora Profesional desde 2014.",
      "Formación nacional e internacional (Brasil).",
      "Docente en Dermatocosmiatría, Estética Corporal y Maquillaje Profesional.",
      "CEO de Dephilo Stetic y Directora Académica de Élite Academy.",
    ],
    imagen: "/docentes/jolie_beltran.webp",
  },
  {
    nombre: "Dra. Carla Michael Montes Yapu",
    cargo: "Médico Cirujano · Medicina Estética",
    detalles: [
      "Médico Cirujano.",
      "Especialista en Medicina Estética desde 2023.",
      "Docente del área de Dermatocosmiatría y Cosmiatría.",
      "Diplomado en Educación Superior.",
    ],
    imagen: "/docentes/carla_michael.webp",
  },
  {
    nombre: "Dra. Andrea Nuñez Del Prado Sossa",
    cargo: "Médico Cirujano · Medicina Estética",
    detalles: [
      "Médico Cirujano.",
      "Especialista en Medicina Estética desde 2021.",
      "Docente del área de Dermatocosmiatría y Cosmiatría.",
      "Médico Estético en Maquillaje D'Oro.",
    ],
    imagen: "/docentes/andrea_nunez.webp",
  },
  {
    nombre: "Lic. Rocío Tolava Calle",
    cargo: "Instrumentadora Quirúrgica",
    detalles: [
      "Instrumentadora Quirúrgica especializada en Cirugía Plástica, Estética y Reconstructiva, +10 años.",
      "Cosmetóloga, Cosmiatra y Esteticista Facial Elite Academy.",
      "Esteticista Corporal Elite Academy.",
    ],
    imagen: "/docentes/rocio_tolava.webp",
  },
  {
    nombre: "Prof. Belén Rodriguez",
    cargo: "Maquilladora Profesional",
    detalles: [
      "Maquilladora Profesional.",
      "Estética y Reconstructiva con más de 6 años de experiencia.",
      "Docente en el área de maquillaje profesional.",
      "Maquilladora independiente.",
    ],
    imagen: "/docentes/belen_rodriguez.webp",
  },
];

export const Docentes = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section id="docentes" className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container space-y-20">
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Quiénes Somos
            </p>
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Nuestro Equipo de Trabajo
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Conoce a las personas que van a llevar tu carrera al siguiente nivel.
            </p>
          </div>
          <div>
            <p className="mb-6 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              Docentes de la Academia
            </p>

            <div className="relative -mr-[max(3rem,calc((100vw-80rem)/2+3rem))]">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {docentes.map((docente, index) => (
                    <CarouselItem
                      key={index}
                      className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                    >
                      <Card className="bg-muted h-full overflow-hidden border-none">
                        <CardContent className="flex h-full flex-col p-0">
                          <div className="relative h-[240px] lg:h-[264px]">
                            <Image
                              src={docente.imagen!}
                              alt={docente.nombre}
                              fill
                              className="object-cover object-top"
                            />
                          </div>

                          <div className="flex flex-1 flex-col gap-4 p-6">
                            <div>
                              <div className="text-primary font-semibold">
                                {docente.nombre}
                              </div>
                              <div className="text-muted-foreground text-sm">
                                {docente.cargo}
                              </div>
                            </div>

                            <ul className="text-muted-foreground space-y-1.5 text-sm">
                              {docente.detalles.map((detalle, i) => (
                                <li key={i} className="flex gap-2">
                                  <span className="text-foreground">—</span>
                                  <span>{detalle}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="mt-8 flex gap-3">
                  <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                  <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};