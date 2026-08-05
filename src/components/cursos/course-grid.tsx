import { CourseCard } from "./course-card";
import { Curso } from "./types";

interface Props {
    title: string;
    subtitle: string;
    cursos: Curso[];
}

export function CourseGrid({
    title,
    subtitle,
    cursos
}: Props) {
    return (
        <section className="pt-40">
            <div className="container">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="
                        text-4xl
                        font-bold
                        tracking-tight
                        md:text-5xl
                            ">
                        {title}
                    </h1>
                    <p className="
                        mt-4
                        text-muted-foreground
                        ">
                        {subtitle}
                    </p>
                </div>
                <div className="
                    mt-14
                    grid
                    gap-8
                    sm:grid-cols-2
                    lg:grid-cols-3
                    ">
                    {
                        cursos.map((curso) => (
                            <CourseCard
                                key={curso.id}
                                curso={curso}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}