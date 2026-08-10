import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosMaquillaje } from "@/data/curso-detalle/maquillaje";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const curso = cursosMaquillaje.find((curso) => curso.id === id);

  return (
    <Background>
      <CourseDetail
        curso={curso!}
      />
    </Background>
  );
}