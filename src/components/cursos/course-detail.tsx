import { Curso } from "./types";

import { WhatsAppFloat } from "@/components/whatsapp-float";

interface Props {
  curso: Curso;
}

export function CourseDetail({ curso }: Props) {
  return (
    <section className="pt-40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className="object-cover transition duration-700 group-hover:scale-102"
            />
          </div>
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {curso.titulo}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-primary">
                  {curso.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {curso.descripcion}
              </p>
            </div>
            <div>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 text-black font-semibold rounded hover:bg-primary transition">
                Inscribete
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}