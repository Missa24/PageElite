import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosEspecialidades } from "@/data/curso-detalle/especialidades";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const curso = cursosEspecialidades.find((curso) => curso.id === id);

  return (
    <Background>
      <CourseDetail
        curso={curso!}
      />
    </Background>
  );
}