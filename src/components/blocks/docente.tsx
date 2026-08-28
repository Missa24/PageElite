import Image from "next/image";

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
    cargo:
      "Directora Académica · Docente de Dermatocosmiatría, Estética y Maquillaje Profesional",
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
}: {
  className?: string;
}) => {
  return (
    <section
      id="docentes"
      className={cn(
        "overflow-hidden py-28 lg:py-32",
        className
      )}
    >
      <div className="container space-y-20">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Quiénes Somos
          </p>

          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Nuestro Equipo de Trabajo
          </h2>

          <p className="max-w-md leading-snug text-muted-foreground">
            Conoce a las personas que van a llevar tu carrera al siguiente nivel.
          </p>
        </div>

        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-wide text-muted-foreground">
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
                    className="grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] xl:basis-1/3.5 2xl:basis-[24%]"
                  >
                    <Card className="h-full overflow-hidden border-none bg-muted">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="group relative aspect-[4/5] overflow-hidden">
                          <Image
                            src={docente.imagen!}
                            alt={docente.nombre}
                            fill
                            sizes="(max-width:768px) 90vw, (max-width:1200px) 40vw, 25vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3 className="text-lg font-semibold text-white">
                              {docente.nombre}
                            </h3>

                            <p className="mt-1 text-sm text-white/80">
                              {docente.cargo}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="static size-14.5 translate-x-0 translate-y-0 bg-muted transition-colors hover:bg-muted/80 [&>svg]:size-6 lg:[&>svg]:size-8" />

                <CarouselNext className="static size-14.5 translate-x-0 translate-y-0 bg-muted transition-colors hover:bg-muted/80 [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};