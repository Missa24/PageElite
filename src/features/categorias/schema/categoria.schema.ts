import { z } from "zod";

export const SubcategoriaSchema = z.object({
    id: z.string(),
    nombre: z.string(),
    slug: z.string(),
});

export const CategoriaSchema = z.object({
    id: z.string(),
    nombre: z.string(),
    slug: z.string(),
    categoriaPadreId: z.string().nullable(),
    creadoEn: z.string(),
    actualizadoEn: z.string(),
    subcategorias: z.array(SubcategoriaSchema),
});

export const CategoriasSchema = z.array(CategoriaSchema);

export type Subcategoria = z.infer<typeof SubcategoriaSchema>;

export type Categoria = z.infer<typeof CategoriaSchema>;