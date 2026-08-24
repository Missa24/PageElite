import { Background } from "@/components/background";
import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosFaciales } from "@/data/curso-detalle/faciales";

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