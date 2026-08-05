import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Curso {
  numero: string;
  titulo: string;
  descripcion: string;
  enlace: string;
  imagen?: string;
  imagenAlt?: string;
}

const cursos: Curso[] = [
  {
    numero: "01",
    titulo: "Nuestras Especialidades",
    descripcion:
      "Formación profesional en áreas de belleza y estética con técnicas actualizadas, prácticas especializadas y enfoque integral para desarrollar tus habilidades.",
    enlace: "/cursos/especialidades",
    imagen: "/cursos/especialidades.webp",
    imagenAlt: "Estudiante practicando técnicas de estética",
  },
  {
    numero: "02",
    titulo: "Cursos Faciales",
    descripcion:
      "Capacitación en técnicas avanzadas de tratamientos faciales: exfoliaciones, rejuvenecimiento, acné, manchas y signos de envejecimiento con las últimas tecnologías.",
    enlace: "/cursos/faciales",
    imagen: "/cursos/facial.webp",
    imagenAlt: "Tratamiento facial en cabina de estética",
  },
  {
    numero: "03",
    titulo: "Cursos Corporales",
    descripcion:
      "Drenaje linfático, depilación, masajes reductores y corporales. Con enfoque práctico y profesional para mejorar la salud y apariencia de la piel y el cuerpo.",
    enlace: "/cursos/corporales",
    imagen: "/cursos/corporal.webp",
    imagenAlt: "Masaje corporal profesional",
  },
  {
    numero: "04",
    titulo: "Cursos Maquillaje",
    descripcion:
      "Desde correcciones faciales hasta efectos especiales y maquillaje editorial. Crea looks artísticos, editoriales y fotográficos en cualquier contexto profesional.",
    enlace: "/cursos/maquillaje",
    imagen: "/cursos/maquillaje.webp",
    imagenAlt: "Maquillaje artístico editorial",
  },
  {
    numero: "05",
    titulo: "Cursos Cejas y Pestañas",
    descripcion:
      "Extensión de pestañas, lifting y diseño con tinte y henna. Crea looks personalizados y duraderos adaptados a cada cliente.",
    enlace: "/cursos/cejas-pestanas",
    imagen: "/cursos/cejas.webp",
    imagenAlt: "Diseño de cejas y pestañas",
  },
  {
    numero: "06",
    titulo: "Cursos Estética Integral",
    descripcion:
      "Aprende técnicas combinadas de estética facial y corporal para ofrecer tratamientos completos, mejorar tus servicios y crecer profesionalmente.",
    enlace: "/cursos/estetica-integral",
    imagen: "/cursos/certificaciones.webp",
    imagenAlt: "Tratamiento de estética integral",
  },
];

export const Cursos = () => {
  return (
    <section id="cursos" className="overflow-hidden pb-28 lg:pb-32">
      <div>
        <p className="container text-center text-sm font-medium  text-primary uppercase">
          Nuestras Especialidades
        </p>

        <h2 className="container mt-2 text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Nuestros cursos
        </h2>

        <p className="container mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Elige el área que más te apasiona y construye tu camino profesional
          con formación práctica y especializada.
        </p>

        <div className="mt-8 space-y-2 md:mt-12 lg:mt-20">
          {cursos.map((curso, i) => (
            <CursoRow key={curso.numero} curso={curso} invertido={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CursoRowProps {
  curso: Curso;
  invertido?: boolean;
}

const CursoRow = ({ curso, invertido }: CursoRowProps) => {
  return (
    <div className="container">
      <div className="grid gap-6 py-10 md:grid-cols-2 md:gap-10 md:py-14">
        <div
          className={cn(
            "relative hidden aspect-[4/3] overflow-hidden rounded-2xl bg-muted md:block",
            invertido && "md:order-2",
          )}
        >
          {curso.imagen ? (
            <Image
              src={curso.imagen}
              alt={curso.imagenAlt ?? curso.titulo}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-sm text-muted-foreground"
              aria-hidden="true"
            >
              Imagen próximamente
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col gap-3",
            invertido
              ? "md:order-1 md:items-end md:text-right"
              : "md:items-start md:text-left",
          )}
        >
          <span className="font-mono text-sm text-primary">
            {curso.numero}
          </span>

          <h3 className="text-xl font-semibold text-foreground md:text-2xl">
            {curso.titulo}
          </h3>

          <p className="max-w-md text-muted-foreground">{curso.descripcion}</p>

          <a
            href={curso.enlace}
            className={cn(
              "mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 outline-none transition hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-ring",
              invertido && "md:flex-row-reverse",
            )}
          >
            Conocer cursos
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};