"use client";

import { useQuery } from "@tanstack/react-query";

import { getModulosByCurso, GetModulosParams } from "../service/modulo.service";

export const useModulos = (
    cursoId: string,
    params?: GetModulosParams
) => {
    return useQuery({
        queryKey: ["modulos", cursoId, params],

        queryFn: () => getModulosByCurso(cursoId, params),

        enabled: Boolean(cursoId),
    });
};
