import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";

export default function MaquillajePage() {
    return (
        <CourseGrid
            title="Cursos de Cejas y Pestañas"
            subtitle="Aprende técnicas de Cejas y Pestañas"
            cursos={cursosMaquillaje}
        />
    );
}