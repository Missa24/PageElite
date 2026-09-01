"use client";

import { useSearchParams } from "next/navigation";

import { CourseGrid } from "@/components/cursos/course-grid";
import { useCursos } from "@/features/cursos/hooks/curso.hook";

export default function CursosPage() {
    const searchParams = useSearchParams();

    const q = searchParams.get("q") ?? "";
    const categoriaId = searchParams.get("categoriaId") ?? "";
    const page = Number(searchParams.get("page") ?? "1");

    const {
        data: cursos,
        isLoading,
        isError,
    } = useCursos({
        search: q,
        categoriaId,
        page,
        limit: 5,
    });

    if (isLoading) {
        return (
            <main className="container py-20">
                <p>Cargando cursos...</p>
            </main>
        );
    }

    if (isError) {
        return (
            <main className="container py-20">
                <p>No se pudieron cargar los cursos.</p>
            </main>
        );
    }

    return (
        <main>
            <CourseGrid
                title="Cursos"
                subtitle="Encuentra el curso que quieres aprender."
                cursos={cursos?.data ?? []}
            />
        </main>
    );
}