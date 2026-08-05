import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";

import { Curso } from "./types";
import { cn } from "@/lib/utils";

interface Props {
    curso: Curso;
    className?: string;
}

export function CourseCard({
    curso,
    className,
}: Props) {
    return (
        <div
            className={cn(
                "group overflow-hidden rounded-3xl border bg-card transition-all duration-300",
                "border-border hover:-translate-y-1 hover:shadow-xl",
                className
            )}
        >
            <Link href={curso.href}>
                <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                        src={curso.imagen}
                        alt={curso.titulo}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="space-y-5 p-6">

                    <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {curso.badge ?? "Inscripciones Abiertas"}
                    </span>

                    <div>
                        <h3 className="text-xl font-semibold text-foreground">
                            {curso.titulo}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground italic">
                            {curso.categoria}
                        </p>
                    </div>

                    <p className="text-sm leading-6 text-muted-foreground">
                        {curso.descripcion}
                    </p>

                    {curso.modalidad && (
                        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
                            <BadgeCheck className="h-4 w-4 text-primary" />
                            {curso.modalidad}
                        </div>
                    )}

                    {curso.precio && (
                        <div className="rounded-xl bg-muted p-3 text-center">
                            <p className="text-sm font-semibold text-foreground">
                                {curso.precio}
                            </p>
                        </div>
                    )}

                    <div className="flex items-center justify-between pt-2">

                        <span className="inline-flex items-center gap-2 font-medium text-primary">
                            Ver programa
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </span>

                    </div>
                </div>
            </Link>
        </div>
    );
}