import { Curso } from "@/components/cursos/types";

export const cursosCorporales: Curso[] = [
  {
    id: "electroestetica",
    titulo: "Electroestética Corporal",
    categoria: "Curso Corporal",
    descripcion:
      "Cavitación, presoterapia, radiofrecuencia corporal y corrientes galvánicas.",
    imagen: "/images/cursos/electroestetica.jpg",
    href: "/cursos/corporales/electroestetica",
    modalidad: "Online & Presencial",
    badge: "Inscripciones Abiertas",
    precio: "Descuentos con cupos limitados",
  },

  {
    id: "drenaje",
    titulo: "Drenaje Linfático",
    categoria: "Curso Corporal",
    descripcion:
      "Aprende drenaje linfático manual desde cero.",
    imagen: "/images/cursos/drenaje.jpg",
    href: "/cursos/corporales/drenaje",
    modalidad: "Presencial",
    badge: "Últimos cupos",
    precio: "20% de descuento",
  },
];