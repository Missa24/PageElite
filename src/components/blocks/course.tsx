import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface Curso {
  numero: string;
  titulo: string;
  descripcion: string;
  enlace: string;
}

const cursos = [
  {
    numero: "01",
    titulo: "Estética Integral",
    descripcion:
      "La base más completa de la formación estética.",
    enlace: "/cursos/estetica-integral",
  },
  {
    numero: "02",
    titulo: "Estética Facial",
    descripcion:
      "Especialización en tratamientos faciales y cuidado avanzado de la piel.",
    enlace: "/cursos/faciales",
  },
  {
    numero: "03",
    titulo: "Estética Corporal",
    descripcion:
      "Formación práctica en tratamientos corporales profesionales.",
    enlace: "/cursos/corporales",
  },
  {
    numero: "04",
    titulo: "Maquillaje Profesional",
    descripcion:
      "Maquillaje social, artístico y editorial.",
    enlace: "/cursos/maquillaje",
  },
  {
    numero: "05",
    titulo: "Cejas y Pestañas",
    descripcion:
      "Diseño de cejas, lifting y extensiones.",
    enlace: "/cursos/cejas-pestanas",
  },
  {
    numero: "06",
    titulo: "Especialidades Avanzadas",
    descripcion:
      "Cursos especializados para profesionales.",
    enlace: "/cursos/especialidades",
  },
  {
    numero: "07",
    titulo: "Certificaciones Profesionales",
    descripcion:
      "Programas certificados para impulsar tu perfil profesional.",
    enlace: "/cursos/certificaciones",
  },
];

export const Cursos = () => {
  return (
    <section id="cursos" className="overflow-hidden pb-28 lg:pb-32">
      <div>
        <p className="container text-center text-sm font-medium tracking-wide text-muted-foreground uppercase">
          Nuestras Áreas de Formación
        </p>

        <h2 className="container mt-2 text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          Explora nuestras áreas profesionales
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
        {/* Columna vacía: crea el efecto zigzag sin duplicar contenido */}
        <div
          className={cn("hidden md:block", invertido && "md:order-2")}
          aria-hidden="true"
        />

        <div
          className={cn(
            "flex flex-col gap-3",
            invertido
              ? "md:order-1 md:items-end md:text-right"
              : "md:items-start md:text-left",
          )}
        >
          <span className="font-mono text-sm text-muted-foreground">
            {curso.numero}
          </span>

          <h3 className="text-xl font-semibold text-foreground md:text-2xl">
            {curso.titulo}
          </h3>

          <p className="max-w-md text-muted-foreground">{curso.descripcion}</p>


          <a href={curso.enlace}
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
    </div >
  );
};