"use client";

import { useRef } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { CategoryCard } from "./category-card";
import { CategorySkeleton } from "./category-skeleton";

import { useCategorias } from "@/features/categorias/hook/categoria.hook";

export const CategoryShowcase = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const {
        data: categorias = [],
        isLoading,
        isError,
    } = useCategorias();

    const scroll = (
        direction: "left" | "right"
    ) => {
        const container = scrollRef.current;

        if (!container) {
            return;
        }

        container.scrollBy({
            left:
                direction === "right"
                    ? container.clientWidth * 0.75
                    : -container.clientWidth * 0.75,
            behavior: "smooth",
        });
    };

    if (isError) {
        return null;
    }

    return (
        <section className="overflow-hidden py-20 sm:py-24 lg:py-28">
            <div className="px-5 sm:px-8 lg:px-[50px]">
                <div className="mx-auto max-w-[1800px]">
                    <div className="mb-10 flex items-end justify-between gap-5 sm:mb-14">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Explora por áreas
                            </p>

                            <h2 className="mt-3 max-w-4xl text-4xl font-medium leading-[1] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl">
                                ¿Qué quieres aprender hoy?
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Encuentra una ruta de aprendizaje y empieza a desarrollar nuevas habilidades.
                            </p>
                        </div>

                        <div className="hidden shrink-0 items-center gap-2 sm:flex">
                            <button
                                type="button"
                                onClick={() =>
                                    scroll("left")
                                }
                                className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary lg:size-14"
                                aria-label="Ver categorías anteriores"
                            >
                                <ArrowLeft className="size-5" />
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    scroll("right")
                                }
                                className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 lg:size-14"
                                aria-label="Ver más categorías"
                            >
                                <ArrowRight className="size-5" />
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scrollbar-none sm:gap-6 lg:gap-7"
                    >
                        {isLoading
                            ? Array.from({
                                length: 4,
                            }).map((_, index) => (
                                <CategorySkeleton
                                    key={index}
                                />
                            ))
                            : categorias.map(
                                (categoria) => (
                                    <CategoryCard
                                        key={categoria.id}
                                        categoria={
                                            categoria
                                        }
                                    />
                                )
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
};