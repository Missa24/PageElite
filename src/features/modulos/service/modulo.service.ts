import {
    ModuloDetalle,
    moduloDetalleSchema,
    modulosResponseSchema,
    type ModulosResponse,
} from "../schemas/modulo.schema";

import { api } from "@/lib/api/axios";


export type GetModulosParams = {
    page?: number;
    limit?: number;
    nombre?: string;
    estaPublicado?: boolean;
};

export async function getModulosByCurso(cursoId: string, params?: GetModulosParams): Promise<ModulosResponse> {
    const response = await api.get(`/modulos/curso/${cursoId}`, { params, });

    return modulosResponseSchema.parse(response.data);
}

export async function getModuloById(moduloId: string): Promise<ModuloDetalle> {
    const response = await api.get(`/modulos/${moduloId}`);

    return moduloDetalleSchema.parse(response.data);
}