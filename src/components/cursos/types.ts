export interface Curso {
  id: string;
  titulo: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  href: string;

  modalidad?: string;
  badge?: string;
  precio?: string;
}

export interface CategoriaCurso {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  href: string;
}

export interface CursoDetalle {
  id: string;
  slug: string;

  titulo: string;
  subtitulo?: string;

  descripcion: string;

  contenidoProgramatico: string[];

  incluye: string[];

  requisitos: string[];

  certificaciones: string[];

  imagen: string;

  modalidad?: string;

  precio?: string;
}