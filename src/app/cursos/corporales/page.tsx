import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosCorporales } from "@/data/curso-detalle/corporales";

export default function CorporalesPage() {
    return (
        <CourseGrid
            title="Cursos Corporales"
            subtitle="Especialízate en tratamientos corporales."
            cursos={cursosCorporales}
        />
    );
}