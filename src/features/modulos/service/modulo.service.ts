import { api } from "@/lib/api/axios";

import {
    modulosResponseSchema,
    type ModulosResponse,
} from "../schemas/modulo.schema";

export type GetModulosParams = {
    page?: number;
    limit?: number;
    nombre?: string;
    estaPublicado?: boolean;
};

export async function getModulosByCurso(
    cursoId: string,
    params?: GetModulosParams
): Promise<ModulosResponse> {
    const response = await api.get(`/modulos/curso/${cursoId}`, {
        params,
    });

    return modulosResponseSchema.parse(response.data);
}
