"use client";
import { useRef } from "react";

import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

type Goal = {
    texto: string;
    posicion: string;
    variante: "primary" | "secondary" | "card";
    entrada: number;
};

const GOALS: Goal[] = [
    {
        texto: "Perfeccionar mis técnicas",
        posicion:
            "left-[4%] top-[20%] sm:left-[8%] lg:left-[13%] lg:top-[22%]",
        variante: "secondary",
        entrada: 0.26,
    },
    {
        texto: "Emprender",
        posicion:
            "right-[5%] top-[17%] sm:right-[10%] lg:right-[18%] lg:top-[18%]",
        variante: "primary",
        entrada: 0.34,
    },
    {
        texto: "Obtener mi certificación",
        posicion:
            "left-[3%] bottom-[19%] sm:left-[8%] lg:left-[7%] lg:bottom-[22%]",
        variante: "card",
        entrada: 0.42,
    },
    {
        texto: "Actualizar mis conocimientos",
        posicion:
            "right-[2%] bottom-[24%] sm:right-[6%] lg:right-[8%] lg:bottom-[24%]",
        variante: "secondary",
        entrada: 0.5,
    },
    {
        texto: "Crecer profesionalmente",
        posicion:
            "left-[26%] bottom-[6%] sm:left-[29%] lg:left-[27%] lg:bottom-[8%]",
        variante: "primary",
        entrada: 0.58,
    },
    {
        texto: "Aprender nuevas especialidades",
        posicion:
            "right-[22%] top-[6%] sm:right-[28%] lg:right-[34%] lg:top-[7%]",
        variante: "card",
        entrada: 0.66,
    },
];

type GoalBubbleProps = {
    goal: Goal;
    progress: MotionValue<number>;
    index: number;
};

const GoalBubble = ({
    goal,
    progress,
    index,
}: GoalBubbleProps) => {
    const opacity = useTransform(
        progress,
        [
            goal.entrada,
            goal.entrada + 0.08,
            0.92,
            1,
        ],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        progress,
        [
            goal.entrada,
            goal.entrada + 0.09,
        ],
        [0.55, 1]
    );

    const y = useTransform(
        progress,
        [
            goal.entrada,
            goal.entrada + 0.09,
        ],
        [35, 0]
    );

    const rotate = useTransform(
        progress,
        [
            goal.entrada,
            goal.entrada + 0.1,
        ],
        [
            index % 2 === 0 ? -5 : 5,
            index % 2 === 0 ? -1 : 1,
        ]
    );

    return (
        <motion.div
            style={{
                opacity,
                scale,
                y,
                rotate,
            }}
            className={cn(
                "absolute z-20",
                goal.posicion
            )}
        >
            <div
                className={cn(
                    "relative flex items-center justify-center",
                    "max-w-[145px] rounded-[1.4rem]",
                    "px-4 py-3 text-center",
                    "text-xs font-semibold",
                    "tracking-[-0.02em]",
                    "shadow-sm",
                    "sm:max-w-none",
                    "sm:px-5 sm:py-3",
                    "sm:text-sm",
                    "md:text-base",
                    "lg:rounded-[1.6rem]",
                    "lg:px-7 lg:py-4",
                    goal.variante === "primary" &&
                    "bg-primary text-primary-foreground",
                    goal.variante === "secondary" &&
                    "bg-secondary text-secondary-foreground",
                    goal.variante === "card" &&
                    "border border-border bg-card text-foreground"
                )}
            >
                {goal.texto}

                <span
                    className={cn(
                        "absolute -bottom-2 left-1/2",
                        "size-3 -translate-x-1/2",
                        "rotate-45",
                        goal.variante === "primary" &&
                        "bg-primary",
                        goal.variante === "secondary" &&
                        "bg-secondary",
                        goal.variante === "card" &&
                        "border-b border-r border-border bg-card"
                    )}
                />

                <span
                    className={cn(
                        "absolute -bottom-6 left-[54%]",
                        "size-2 rounded-full",
                        goal.variante === "primary",
                        goal.variante === "secondary",
                        goal.variante === "card"
                    )}
                />
            </div>
        </motion.div>
    );
};

export const GoalsScrollSection = () => {
    const sectionRef = useRef<HTMLElement | null>(
        null
    );

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const titleOpacity = useTransform(
        scrollYProgress,
        [0.05, 0.16, 0.88, 0.98],
        [0, 1, 1, 0]
    );

    const titleScale = useTransform(
        scrollYProgress,
        [0.05, 0.18],
        [0.88, 1]
    );

    const titleY = useTransform(
        scrollYProgress,
        [0.05, 0.18],
        [45, 0]
    );

    return (
        <section
            ref={sectionRef}
            className="relative h-[280svh] overflow-visible"
        >
            <div className="sticky top-0 h-[100svh] overflow-hidden">
                <div className="absolute inset-0 px-5 sm:px-8 lg:px-[50px]">
                    <div className="relative mx-auto h-full max-w-[1800px]">
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-[600px] sm:w-[600px]" />

                        <motion.div
                            style={{
                                opacity: titleOpacity,
                                scale: titleScale,
                                y: titleY,
                            }}
                            className="absolute inset-0 z-10 flex items-center justify-center"
                        >
                            <div className="mx-auto max-w-[900px] px-8 text-center">
                                <h2 className="text-3xl font-medium leading-[1] tracking-[-0.055em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                                    Convierte tus metas en
                                    crecimiento profesional
                                </h2>

                                <p className="mx-auto mt-5 hidden max-w-xl text-sm leading-relaxed text-muted-foreground sm:block lg:text-base">
                                    Elige hacia dónde quieres
                                    avanzar y construye tu camino
                                    con formación práctica y
                                    especializada.
                                </p>
                            </div>
                        </motion.div>

                        {GOALS.map((goal, index) => (
                            <GoalBubble
                                key={goal.texto}
                                goal={goal}
                                progress={
                                    scrollYProgress
                                }
                                index={index}
                            />
                        ))}

                        <motion.div
                            style={{
                                opacity: useTransform(
                                    scrollYProgress,
                                    [0.76, 0.87],
                                    [0, 1]
                                ),
                            }}
                            className="absolute bottom-[4%] left-1/2 z-20 -translate-x-1/2"
                        >
                            <div className="flex items-center gap-2">
                                <span className="h-[2px] w-5" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                                    Aprende · Crece · Evoluciona
                                </span>

                                <span className="h-[2px] w-5" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};