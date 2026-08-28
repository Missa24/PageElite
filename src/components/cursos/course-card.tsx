
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { Curso } from "./types";
import { Button } from "../ui/button";

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
                "group overflow-hidden border bg-card transition-all duration-300 ease-in-out",
                "border-border/60 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
                className
            )}
        >
            <Link href={curso.href} className="block space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                        src={curso.imagen}
                        alt={curso.titulo}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.02]"
                        priority={false}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex min-h-[240px] flex-col justify-between px-6 pb-6">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                            {curso.categoria}
                        </p>

                        <div>
                            <h3 className="line-clamp-2 text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                                {curso.titulo}
                            </h3>

                            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                                {curso.descripcion}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="flex items-center justify-between gap-4 border-t border-border/40 px-6 pb-6 pt-4">
                <Button
                    type="button"
                    disabled
                    className="mt-4 bg-primary hover:bg-primary disabled:cursor-not-allowed disabled:opacity-100"
                >
                    <FaWhatsapp className="h-5 w-5" />
                    Inscribirme
                </Button>

                <Link
                    href={curso.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-primary"
                >
                    Ver programa

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
