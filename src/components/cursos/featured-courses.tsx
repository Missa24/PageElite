import { CourseCard } from "./course-card";
import { getCursos } from "@/features/cursos/service/curso.service";

export const FeaturedCourses = async () => {
    const cursosResponse = await getCursos({
        page: 1,
        limit: 5,
    });

    const cursosDestacados = cursosResponse.data.slice(0, 5);

    return (
        <section
            id="cursos"
            className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
        >
            <div className="relative w-full px-5 sm:px-8 lg:px-[50px]">
                <div className="relative mx-auto max-w-[1600px]">

                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-10 scrollbar-none lg:hidden">
                        {cursosDestacados.map((curso, index) => (
                            <div
                                key={curso.id}
                                className="w-[78vw] max-w-[340px] shrink-0 snap-center sm:w-[46vw]"
                            >
                                <CourseCard
                                    curso={curso}
                                    index={index}
                                    mobile
                                />
                            </div>
                        ))}
                    </div>

                    {/* DESKTOP */}
                    <div className="relative hidden h-[430px] items-center justify-center lg:flex xl:h-[460px]">
                        {cursosDestacados.map((curso, index) => (
                            <CourseCard
                                key={curso.id}
                                curso={curso}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};