import {
    cursosResponseSchema,
    type CursosResponse,
} from "../schemas/curso.schema";

import { api } from "@/lib/api/axios";


export type GetCursosParams = {
    page?: number;
    limit?: number;
    search?: string;
    categoriaId?: string;
};

export async function getCursos(
    params?: GetCursosParams
): Promise<CursosResponse> {
    const response = await api.get("/curso", {
        params,
    });

    return cursosResponseSchema.parse(response.data);
}
