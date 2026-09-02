"use client";

import { useQuery } from "@tanstack/react-query";

import { getLeccionesByModulo, GetLeccionesParams } from "../service/leccion.service";

export const useLecciones = (
    moduloId: string,
    params?: GetLeccionesParams
) => {
    return useQuery({
        queryKey: ["lecciones", moduloId, params],

        queryFn: () =>
            getLeccionesByModulo(moduloId, params),

        enabled: Boolean(moduloId),
    });
};
