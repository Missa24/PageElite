import { notFound } from "next/navigation";

import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosEspecialidades } from "@/data/curso-detalle/especialidades";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const curso = cursosEspecialidades.find(
    (curso) => curso.id === id
  );
<<<<<<< HEAD

  return (
    <Background>
      <CourseDetail curso={curso!} />
=======

  if (!curso) {
    notFound();
  }

  return (
    <Background>
      <CourseDetail curso={curso} />
>>>>>>> 8fb012653b388d3cee46162f2dbd80333097efea
    </Background>
  );
}
