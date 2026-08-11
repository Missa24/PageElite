import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosCejasPestanas } from "@/data/curso-detalle/cejas-pestanas";
import { Background } from "@/components/background";

export default function MaquillajePage() {
    return (
        <Background>
            <CourseGrid
                title="Cursos de Cejas y Pestañas"
                subtitle="Aprende técnicas de Cejas y Pestañas"
                cursos={cursosCejasPestanas}
            />
        </Background>
    );
}