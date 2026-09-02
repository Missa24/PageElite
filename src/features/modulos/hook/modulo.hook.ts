"use client";

import { useQuery } from "@tanstack/react-query";

import { getModuloById, getModulosByCurso, GetModulosParams } from "../service/modulo.service";

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

export const useModulo = (moduloId: string) => {
    return useQuery({
        queryKey: [
            "modulo",
            moduloId,
        ],
        queryFn: () =>
            getModuloById(moduloId),
        enabled: Boolean(moduloId),
    });
};