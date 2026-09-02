"use client";

import { useQuery } from "@tanstack/react-query";

import { getCursos, GetCursosParams } from "../service/curso.service";

export const useCursos = (params?: GetCursosParams) => {
    return useQuery({
        queryKey: ["cursos", params],

        queryFn: () => getCursos(params),
    });
};
