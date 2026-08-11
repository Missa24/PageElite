import { Background } from "@/components/background";
import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";

export default function MaquillajePage() {
    return (
        <Background>
            <CourseGrid
                title="Cursos de Maquillaje"
                subtitle="Aprende técnicas profesionales de maquillaje."
                cursos={cursosMaquillaje}
            />
        </Background>
    );
}