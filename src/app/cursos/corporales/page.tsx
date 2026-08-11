import { Background } from "@/components/background";
import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosCorporales } from "@/data/curso-detalle/corporales";

export default function CorporalesPage() {
    return (
        <Background>
            <CourseGrid
                title="Cursos Corporales"
                subtitle="Especialízate en tratamientos corporales."
                cursos={cursosCorporales}
            />
        </Background>
    );
}