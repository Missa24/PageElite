import { CategoryCard } from "./category-card";
import { CategoriaCurso } from "./types";

interface Props {
    title: string;
    subtitle: string;
    categorias: CategoriaCurso[];
}

export function CategoryGrid({
    title,
    subtitle,
    categorias,
}: Props) {
    return (
        <section
            id="cursos"
            className="py-24"
        >
            <div className="container">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-sm font-medium uppercase tracking-widest text-primary">
                        Formación Profesional
                    </p>

                    <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        {subtitle}
                    </p>

                </div>

                <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {categorias.map((categoria) => (
                        <CategoryCard
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}