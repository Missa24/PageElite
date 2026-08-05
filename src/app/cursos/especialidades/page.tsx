import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";

export default function MaquillajePage() {
    return (
        <CourseGrid
            title="Especialidades"
            subtitle="Especializate en diferentes Áreas"
            cursos={cursosMaquillaje}
        />
    );
}