import { Background } from "@/components/background";
import { CourseGrid } from "@/components/cursos/course-grid";
import { cursosCertificaciones } from "@/data/curso-detalle/certificaciones";

export default function CertificacionesPage() {
    return (
        <Background>
            <CourseGrid
                title="Nuestros cursos con Certificaciòn"
                subtitle="Certificaciòn con R.M."
                cursos={cursosCertificaciones}
            />
        </Background>
    );
}