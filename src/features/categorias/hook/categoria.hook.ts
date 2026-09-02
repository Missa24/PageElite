"use client";

import { useQuery } from "@tanstack/react-query";

import { getCategorias } from "../service/categoria.service";

export const useCategorias = () => {
    return useQuery({
        queryKey: ["categorias"],
        queryFn: getCategorias,
        staleTime: 1000 * 60 * 10,
    });
};