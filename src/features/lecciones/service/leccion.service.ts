import { api } from "@/lib/api/axios";

import {
    leccionesResponseSchema,
    type LeccionesResponse,
} from "../schemas/leccion.schema";

export type GetLeccionesParams = {
    nombre?: string;
    tipoLeccion?: string;
    estaPublicada?: boolean;
};

export async function getLeccionesByModulo(
    moduloId: string,
    params?: GetLeccionesParams
): Promise<LeccionesResponse> {
    const response = await api.get(
        `/lecciones/modulo/${moduloId}`,
        {
            params,
        }
    );

    return leccionesResponseSchema.parse(response.data);
}
