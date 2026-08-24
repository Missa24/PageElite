import { notFound } from "next/navigation";
import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosFaciales } from "@/data/curso-detalle/faciales";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const curso = cursosFaciales.find(
    (curso) => curso.id === id
  );

  if (!curso) {
    notFound();
  }

  return (
    <Background>
      <CourseDetail curso={curso} />
    </Background>
  );
}