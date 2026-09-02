import { Categoria } from "../schema/categoria.schema";

import { api } from "@/lib/api/axios";


export const getCategorias = async (): Promise<Categoria[]> => {
    const response = await api.get("/categoria");

    return response.data;
};