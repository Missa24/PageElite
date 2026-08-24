import { Background } from "@/components/background";
import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosEspecialidades } from "@/data/curso-detalle/especialidades";

export default function MaquillajePage() {
    return (
        <Background>
            <CourseGrid
                title="Especialidades"
                subtitle="Especializate en diferentes Áreas"
                cursos={cursosEspecialidades}
            />
        </Background>
    );
}