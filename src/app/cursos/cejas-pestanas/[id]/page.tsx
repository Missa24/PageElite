import { Background } from "@/components/background";
import { CourseDetail } from "@/components/cursos/course-detail";
import { cursosCejasPestanas } from "@/data/curso-detalle/cejas-pestanas";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const curso = cursosCejasPestanas.find((curso) => curso.id === id);

    return (
        <Background>
            <CourseDetail
                curso={curso!}
            />
        </Background>
    );
}