import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";

export default function MaquillajePage() {
    return (
        <CourseGrid
            title="Cursos de Maquillaje"
            subtitle="Aprende técnicas profesionales de maquillaje."
            cursos={cursosMaquillaje}
        />
    );
}