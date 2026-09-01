import { z } from "zod";

export const recursoLeccionSchema = z.object({
    id: z.string(),
    orden: z.number(),
}).passthrough();

export const leccionSchema = z.object({
    id: z.string(),
    moduloId: z.string(),
    nombre: z.string(),
    tipoLeccion: z.string(),
    orden: z.number(),
    estaPublicada: z.boolean(),
    recursos: z.array(recursoLeccionSchema),
});

export const leccionesResponseSchema = z.array(leccionSchema);

export type RecursoLeccion = z.infer<typeof recursoLeccionSchema>;
export type Leccion = z.infer<typeof leccionSchema>;
export type LeccionesResponse = z.infer<
    typeof leccionesResponseSchema
>;
