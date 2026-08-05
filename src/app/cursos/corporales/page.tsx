import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosCorporales } from "@/data/curso-detalle/corporales";
import { Background } from "@/components/background";

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