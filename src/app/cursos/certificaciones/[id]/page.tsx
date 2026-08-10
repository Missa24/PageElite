import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosCertificaciones } from "@/data/curso-detalle/certificaciones";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const curso = cursosCertificaciones.find((curso) => curso.id === id);

  return (
    <Background>
      <CourseDetail
        curso={curso!}
      />
    </Background>
  );
}