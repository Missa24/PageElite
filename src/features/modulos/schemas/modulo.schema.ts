import { z } from "zod";

export const moduloSchema = z.object({
    id: z.string(),
    cursoId: z.string(),
    nombre: z.string(),
    orden: z.number(),
    estaPublicado: z.boolean(),
    rutaImagen: z.string().nullable(),
    descripcion: z.string(),
});

export const moduloCursoCategoriaSchema = z
    .object({
        id: z.string(),
        nombre: z.string(),
        slug: z.string(),
    })
    .nullable();

export const moduloCursoSchema = z.object({
    id: z.string(),
    nombre: z.string(),
    categoria: moduloCursoCategoriaSchema,
});

export const moduloDetalleSchema = moduloSchema.extend({
    curso: moduloCursoSchema,
    _count: z.object({
        lecciones: z.number(),
        inscripciones: z.number(),
    }),
});

export const modulosMetaSchema = z.object({
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
});

export const modulosResponseSchema = z.object({
    data: z.array(moduloSchema),
    meta: modulosMetaSchema,
});

export type Modulo = z.infer<typeof moduloSchema>;
export type ModuloDetalle = z.infer<
    typeof moduloDetalleSchema
>;
export type ModulosResponse = z.infer<
    typeof modulosResponseSchema
>;