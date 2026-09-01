import { api } from "@/lib/api/axios";
import { Categoria } from "../schema/categoria.schema";


export const getCategorias = async (): Promise<Categoria[]> => {
    const response = await api.get("/categoria");

    return response.data;
};