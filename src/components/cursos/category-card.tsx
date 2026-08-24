import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { CategoriaCurso } from "./types";

import { cn } from "@/lib/utils";

interface Props {
    categoria: CategoriaCurso;
    className?: string;
}

export function CategoryCard({
    categoria,
    className,
}: Props) {
    return (
        <Link
            href={categoria.href}
            className={cn(
                "group overflow-hidden rounded-3xl border bg-card transition-all duration-300",
                "border-border hover:-translate-y-1 hover:shadow-xl",
                className
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={categoria.imagen}
                    alt={categoria.titulo}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4 p-6">

                <h3 className="text-xl font-semibold text-foreground">
                    {categoria.titulo}
                </h3>

                <p className="text-sm leading-6 text-muted-foreground">
                    {categoria.descripcion}
                </p>

                <div className="inline-flex items-center gap-2 font-medium text-primary">
                    Ver categoría
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>

            </div>
        </Link>
    );
}