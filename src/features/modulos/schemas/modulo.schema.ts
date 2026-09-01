import { z } from "zod";

export const moduloSchema = z.object({
    id: z.string(),
    cursoId: z.string(),
    nombre: z.string(),
    orden: z.number(),
    estaPublicado: z.boolean(),
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
export type ModulosResponse = z.infer<typeof modulosResponseSchema>;
