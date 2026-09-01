"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Feature = {
    palabraSuperior: string;
    palabraMedia: string;
    tituloCorto: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    forma: "circulo" | "cuadrado" | "triangulo";
};

const FEATURES: Feature[] = [
    {
        palabraSuperior: "Acceso",
        palabraMedia: "Seguro",
        tituloCorto: "Ingresa fácilmente",
        titulo:
            "Accede a tu plataforma de formación de manera rápida, clara y segura",
        descripcion:
            "Inicia sesión y entra directamente a un espacio organizado para gestionar tu aprendizaje y continuar tu formación.",
        imagen: "/features/inicio.webp",
        forma: "circulo",
    },
    {
        palabraSuperior: "Organiza",
        palabraMedia: "Explora",
        tituloCorto: "Todo en un lugar",
        titulo:
            "Encuentra tus cursos, explora el catálogo y continúa exactamente donde lo dejaste",
        descripcion:
            "Consulta tus cursos disponibles y accede a una experiencia diseñada para que navegar y continuar aprendiendo sea sencillo.",
        imagen: "/features/cursos.webp",
        forma: "cuadrado",
    },
    {
        palabraSuperior: "Logros",
        palabraMedia: "Certifica",
        tituloCorto: "Tus certificados",
        titulo:
            "Consulta tus logros y descarga los certificados obtenidos dentro de la plataforma",
        descripcion:
            "Mantén tus certificados disponibles en un solo espacio y accede a ellos cuando necesites respaldar tu formación.",
        imagen: "/features/certificados.webp",
        forma: "triangulo",
    },
];

const Forma = ({
    tipo,
    className,
}: {
    tipo: Feature["forma"];
    className?: string;
}) => {
    if (tipo === "cuadrado") {
        return (
            <div
                className={cn(
                    "relative size-10 rotate-12 rounded-[10px] border-[3px] border-current sm:size-12 lg:size-14",
                    className
                )}
            >
                <div className="absolute -bottom-2 -right-2 size-5 rounded-md bg-current opacity-30 sm:size-6" />
            </div>
        );
    }

    if (tipo === "triangulo") {
        return (
            <div
                className={cn(
                    "relative size-12 sm:size-14 lg:size-16",
                    className
                )}
            >
                <div className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 border-b-[38px] border-l-[22px] border-r-[22px] border-b-current border-l-transparent border-r-transparent sm:border-b-[44px] sm:border-l-[26px] sm:border-r-[26px]" />
            </div>
        );
    }

    return (
        <div
            className={cn(
                "relative size-11 rounded-full border-[3px] border-current sm:size-13 lg:size-16",
                className
            )}
        >
            <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current sm:size-4" />
        </div>
    );
};

export const FeaturesStickyScroll = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const updateActiveFeature = () => {
            const section = sectionRef.current;

            if (!section) {
                return;
            }

            const rect = section.getBoundingClientRect();
            const scrollableHeight =
                section.offsetHeight - window.innerHeight;

            if (scrollableHeight <= 0) {
                return;
            }

            const scrolled = Math.min(
                Math.max(-rect.top, 0),
                scrollableHeight
            );

            const progress = scrolled / scrollableHeight;

            const nextIndex = Math.min(
                FEATURES.length - 1,
                Math.floor(progress * FEATURES.length)
            );

            setActiveIndex(nextIndex);
        };

        updateActiveFeature();

        window.addEventListener("scroll", updateActiveFeature, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveFeature);

        return () => {
            window.removeEventListener(
                "scroll",
                updateActiveFeature
            );

            window.removeEventListener(
                "resize",
                updateActiveFeature
            );
        };
    }, []);

    const activeFeature = FEATURES[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="relative h-[300svh]"
        >
            <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-[50px]">
                <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

                <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-secondary/50 blur-[150px]" />

                <div className="relative mx-auto w-full max-w-[1800px] px-3 sm:px-5 md:px-8 lg:px-[50px]">
                    <div className="grid grid-cols-[0.58fr_1.9fr_0.82fr] items-stretch gap-2 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9">
                        <div className="grid min-h-[360px] grid-rows-[0.7fr_0.7fr_1.6fr] gap-2 sm:min-h-[430px] sm:gap-3 md:min-h-[490px] md:gap-4 lg:min-h-[540px] lg:gap-5">
                            <div className="relative flex items-center justify-between overflow-hidden rounded-xl border border-border bg-secondary p-2 sm:rounded-2xl sm:p-4 lg:rounded-[2rem] lg:p-6">
                                <span
                                    key={`superior-${activeIndex}`}
                                    className="inline-block -rotate-3 text-[clamp(0.7rem,2vw,2rem)] font-semibold tracking-[-0.04em] text-secondary-foreground"
                                >
                                    {activeFeature.palabraSuperior}
                                </span>

                                <Forma
                                    tipo={activeFeature.forma}
                                    className="shrink-0 text-primary opacity-80"
                                />
                            </div>

                            <div className="relative flex items-center justify-between overflow-hidden rounded-xl border border-primary/20 bg-card p-2 sm:rounded-2xl sm:p-4 lg:rounded-[2rem] lg:p-6">
                                <Forma
                                    tipo={
                                        activeIndex === 0
                                            ? "cuadrado"
                                            : activeIndex === 1
                                                ? "triangulo"
                                                : "circulo"
                                    }
                                    className="shrink-0 text-primary/40"
                                />

                                <span
                                    key={`medio-${activeIndex}`}
                                    className="inline-block rotate-2 text-right text-[clamp(0.65rem,1.8vw,1.75rem)] font-medium tracking-[-0.04em] text-foreground"
                                >
                                    {activeFeature.palabraMedia}
                                </span>

                                <div className="absolute bottom-0 left-0 h-1 w-[55%] bg-primary sm:h-1.5" />
                            </div>

                            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-primary p-3 text-primary-foreground sm:rounded-2xl sm:p-5 md:p-6 lg:rounded-[2rem] lg:p-7">
                                <div
                                    key={`corto-${activeIndex}`}
                                    className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                                >
                                    <p className="max-w-[250px] text-[clamp(0.85rem,2.25vw,2.35rem)] font-semibold leading-[1.03] tracking-[-0.05em]">
                                        {activeFeature.tituloCorto}
                                    </p>
                                </div>

                                <div className="flex items-end justify-between gap-2">
                                    <span className="text-[7px] font-semibold uppercase tracking-[0.16em] opacity-75 sm:text-[9px] md:text-[10px] lg:text-xs">
                                        Élite Academy
                                    </span>

                                    <div className="flex items-end gap-1.5 sm:gap-2">
                                        <span className="size-3 rounded-full bg-primary-foreground/70 sm:size-4" />

                                        <span className="size-4 rotate-12 rounded-[3px] border-2 border-primary-foreground/60 sm:size-5" />

                                        <span className="h-0 w-0 border-b-[16px] border-l-[9px] border-r-[9px] border-b-primary-foreground/40 border-l-transparent border-r-transparent sm:border-b-[20px] sm:border-l-[11px] sm:border-r-[11px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex min-h-[360px] items-center sm:min-h-[430px] md:min-h-[490px] lg:min-h-[540px]">
                            <div
                                key={`imagen-${activeIndex}`}
                                className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border/60 bg-muted/20 shadow-xl shadow-black/5 sm:rounded-2xl lg:rounded-[2rem]"
                            >
                                <Image
                                    src={activeFeature.imagen}
                                    alt={activeFeature.tituloCorto}
                                    fill
                                    sizes="(max-width: 640px) 54vw, (max-width: 1024px) 58vw, 62vw"
                                    className="animate-in fade-in object-contain p-1 duration-500 sm:p-2 lg:p-3"
                                    priority={activeIndex === 0}
                                />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent" />

                                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 sm:bottom-4 sm:left-4 sm:gap-2">
                                    <span className="size-2 rounded-full bg-primary sm:size-3" />

                                    <span className="size-2 rotate-45 border border-primary sm:size-3" />

                                    <span className="h-0 w-0 border-b-[9px] border-l-[5px] border-r-[5px] border-b-primary border-l-transparent border-r-transparent opacity-70 sm:border-b-[12px] sm:border-l-[7px] sm:border-r-[7px]" />
                                </div>
                            </div>
                        </div>

                        <div className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-3 sm:min-h-[430px] sm:rounded-2xl sm:p-5 md:min-h-[490px] md:p-6 lg:min-h-[540px] lg:rounded-[2rem] lg:p-8">
                            <div
                                key={`derecha-${activeIndex}`}
                                className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                            >
                                <div className="mb-4 flex items-center justify-between gap-2 sm:mb-5 lg:mb-7">
                                    <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[9px] md:text-[10px] lg:text-xs">
                                        Tu plataforma
                                    </p>

                                    <Forma
                                        tipo={activeFeature.forma}
                                        className="scale-50 text-primary opacity-30 sm:scale-60 lg:scale-75"
                                    />
                                </div>

                                <h3 className="text-[clamp(0.85rem,2.15vw,2.45rem)] font-medium leading-[1.08] tracking-[-0.045em] text-foreground">
                                    {activeFeature.titulo}
                                </h3>

                                <p className="mt-3 line-clamp-6 text-[8px] leading-relaxed text-muted-foreground sm:mt-5 sm:text-[11px] md:text-xs lg:mt-6 lg:text-sm xl:text-base">
                                    {activeFeature.descripcion}
                                </p>
                            </div>

                            <div>
                                <div className="mb-3 flex items-center gap-1.5 sm:mb-5 sm:gap-2">
                                    {FEATURES.map((_, index) => (
                                        <span
                                            key={index}
                                            className={cn(
                                                "h-1 rounded-full transition-all duration-500 sm:h-1.5",
                                                activeIndex === index
                                                    ? "w-8 bg-primary sm:w-10"
                                                    : "w-2 bg-muted sm:w-4"
                                            )}
                                        />
                                    ))}
                                </div>

                                <div className="border-t border-border pt-3 sm:pt-5">
                                    <div className="flex items-end justify-between gap-2">
                                        <span className="max-w-[75px] text-[7px] uppercase leading-relaxed tracking-[0.12em] text-muted-foreground sm:max-w-[110px] sm:text-[9px] md:text-[10px] lg:text-xs">
                                            Diseñado para acompañar tu formación
                                        </span>

                                        <span className="text-[clamp(1.6rem,4.5vw,4.5rem)] font-semibold leading-none tracking-[-0.08em] text-primary/15">
                                            0{activeIndex + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};