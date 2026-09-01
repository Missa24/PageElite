import { z } from "zod";

export const categoriaCursoSchema = z.object({
    id: z.string(),
    nombre: z.string(),
    slug: z.string(),
});

export const cursoSchema = z.object({
    id: z.string(),
    nombre: z.string(),
    descripcionCorta: z.string().nullable(),
    descripcionCompleta: z.string().nullable(),
    rutaPortada: z.string().nullable(),
    categoria: categoriaCursoSchema.nullable(),
});

export const cursosMetaSchema = z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
});

export const cursosResponseSchema = z.object({
    data: z.array(cursoSchema),
    meta: cursosMetaSchema,
});

export type Curso = z.infer<typeof cursoSchema>;
export type CategoriaCurso = z.infer<typeof categoriaCursoSchema>;
export type CursosResponse = z.infer<typeof cursosResponseSchema>;
