import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosFaciales } from "@/data/curso-detalle/faciales";
import { Background } from "@/components/background";

export default function FacialesPage() {

    return (
        <Background>
            <CourseGrid
                title="Cursos Faciales"
                subtitle="Especialízate en tratamientos faciales profesionales."
                cursos={cursosFaciales}
            />
        </Background>
    )

}