import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryArtwork } from "./category-artwork";
import { Categoria } from "@/features/categorias/schema/categoria.schema";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
    categoria: Categoria;
};

export const CategoryCard = ({
    categoria,
}: CategoryCardProps) => {
    return (
        <Link
            href={`/cursos?categoriaId=${categoria.id}`}
            className="group block w-[78vw] max-w-[390px] shrink-0 snap-start sm:w-[46vw] lg:w-[350px] xl:w-[390px]"
        >
            <article
                className={cn(
                    "relative h-[430px] overflow-hidden rounded-[2rem]",
                    "border border-border bg-card",
                    "transition-colors duration-300",
                    "hover:border-primary/40"
                )}
            >
                <div className="relative z-20 flex h-full flex-col justify-between p-7">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Área de aprendizaje
                        </p>

                        <h3 className="mt-3 max-w-[280px] text-3xl font-semibold leading-[1.02] tracking-[-0.05em] text-foreground">
                            {categoria.nombre}
                        </h3>

                        {categoria.subcategorias.length > 0 && (
                            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
                                {categoria.subcategorias
                                    .slice(0, 3)
                                    .map((subcategoria) => (
                                        <span
                                            key={subcategoria.id}
                                            className="text-xs text-muted-foreground"
                                        >
                                            {subcategoria.nombre}
                                        </span>
                                    ))}
                            </div>
                        )}
                    </div>

                    <div className="relative z-30">
                        <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground">
                            <ArrowRight className="size-5" />
                        </span>
                    </div>
                </div>

                <CategoryArtwork slug={categoria.slug} />
            </article>
        </Link>
    );
};