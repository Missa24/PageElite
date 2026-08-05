import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";
import { Background } from "@/components/background";

export default function MaquillajePage() {
    return (
        <Background>
            <CourseGrid
                title="Cursos de Cejas y Pestañas"
                subtitle="Aprende técnicas de Cejas y Pestañas"
                cursos={cursosMaquillaje}
            />
        </Background>
    );
}