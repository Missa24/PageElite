import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosFaciales } from "@/data/curso-detalle/faciales";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const curso = cursosFaciales.find((curso) => curso.id === id);

  return (
    <Background>
      <CourseDetail
        curso={curso!}
      />
    </Background>
  );
}