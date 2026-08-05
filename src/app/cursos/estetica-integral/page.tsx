import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";


export default function MaquillajePage() {
    return (
        <CourseGrid
            title="Cursos de Estética Integral"
            subtitle="Aprende Estética Integral"
            cursos={cursosMaquillaje}
        />
    );
}