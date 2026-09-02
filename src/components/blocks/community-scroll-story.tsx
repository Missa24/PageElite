"use client";

import { useRef } from "react";

import Image from "next/image";

import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

const COMMUNITY_IMAGES = [
    {
        src: "/community/comunidad-1.webp",
        alt: "Estudiantes de Élite Academy",
        className:
            "left-[3%] top-[18%] h-[150px] w-[210px] lg:h-[180px] lg:w-[250px]",
        rotate: -5,
    },
    {
        src: "/community/comunidad-2.webp",
        alt: "Clase en Élite Academy",
        className:
            "left-[30%] top-[7%] h-[130px] w-[190px] lg:h-[155px] lg:w-[220px]",
        rotate: 3,
    },
    {
        src: "/community/comunidad-3.webp",
        alt: "Formación profesional",
        className:
            "right-[29%] top-[15%] h-[145px] w-[180px] lg:h-[170px] lg:w-[210px]",
        rotate: 4,
    },
    {
        src: "/community/comunidad-4.webp",
        alt: "Experiencias educativas",
        className:
            "right-[5%] top-[9%] h-[130px] w-[190px] lg:h-[160px] lg:w-[220px]",
        rotate: -4,
    },
    {
        src: "/community/comunidad-5.webp",
        alt: "Comunidad Élite",
        className:
            "left-[10%] bottom-[10%] h-[160px] w-[205px] lg:h-[190px] lg:w-[240px]",
        rotate: 4,
    },
    {
        src: "/community/comunidad-6.webp",
        alt: "Estudiantes aprendiendo",
        className:
            "left-[39%] bottom-[5%] h-[135px] w-[175px] lg:h-[165px] lg:w-[205px]",
        rotate: -3,
    },
    {
        src: "/community/comunidad-7.webp",
        alt: "Actividades académicas",
        className:
            "right-[10%] bottom-[9%] h-[155px] w-[210px] lg:h-[190px] lg:w-[250px]",
        rotate: 5,
    },
];

const COMMUNITY_CARDS = [
    {
        titulo: "Clases que conectan",
        descripcion:
            "Aprende junto a docentes y estudiantes en experiencias que combinan conocimiento, práctica y acompañamiento.",
        imagen: "/community/clases.webp",
    },
    {
        titulo: "Experiencias en comunidad",
        descripcion:
            "Participa en actividades, encuentros y espacios donde aprender también significa compartir y crecer.",
        imagen: "/community/experiencias.webp",
    },
    {
        titulo: "Un espacio para avanzar",
        descripcion:
            "Forma parte de una comunidad que acompaña tu crecimiento académico y profesional en cada etapa.",
        imagen: "/community/comunidad.webp",
    },
];

export const CommunityScrollStory = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const introOpacity = useTransform(
        scrollYProgress,
        [0.04, 0.13, 0.26, 0.34],
        [0, 1, 1, 0]
    );

    const introScale = useTransform(
        scrollYProgress,
        [0.04, 0.17],
        [0.9, 1]
    );

    const introY = useTransform(
        scrollYProgress,
        [0.04, 0.24],
        [35, 0]
    );

    const galleryOpacity = useTransform(
        scrollYProgress,
        [0.18, 0.3, 0.52, 0.63],
        [0, 1, 1, 0]
    );

    const galleryScale = useTransform(
        scrollYProgress,
        [0.18, 0.43],
        [0.55, 1]
    );

    const galleryY = useTransform(
        scrollYProgress,
        [0.2, 0.55],
        [90, 0]
    );

    const secondTitleOpacity = useTransform(
        scrollYProgress,
        [0.6, 0.7, 0.96],
        [0, 1, 1]
    );

    const secondTitleY = useTransform(
        scrollYProgress,
        [0.6, 0.72],
        [50, 0]
    );

    const cardOneOpacity = useTransform(
        scrollYProgress,
        [0.68, 0.76],
        [0, 1]
    );

    const cardOneY = useTransform(
        scrollYProgress,
        [0.68, 0.78],
        [130, 0]
    );

    const cardTwoOpacity = useTransform(
        scrollYProgress,
        [0.74, 0.82],
        [0, 1]
    );

    const cardTwoY = useTransform(
        scrollYProgress,
        [0.74, 0.84],
        [150, 0]
    );

    const cardThreeOpacity = useTransform(
        scrollYProgress,
        [0.8, 0.88],
        [0, 1]
    );

    const cardThreeY = useTransform(
        scrollYProgress,
        [0.8, 0.9],
        [170, 0]
    );

    const cardAnimations = [
        {
            opacity: cardOneOpacity,
            y: cardOneY,
            rotate: -1.5,
        },
        {
            opacity: cardTwoOpacity,
            y: cardTwoY,
            rotate: 1,
        },
        {
            opacity: cardThreeOpacity,
            y: cardThreeY,
            rotate: -0.7,
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative h-[420svh] bg-background"
        >
            <div className="sticky top-0 h-[100svh] overflow-hidden">
                <div className="absolute inset-0 px-5 sm:px-8 lg:px-[50px]">
                    <div className="relative mx-auto h-full max-w-[1800px]">
                        <motion.div
                            style={{
                                opacity: introOpacity,
                                scale: introScale,
                                y: introY,
                            }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <h2 className="max-w-5xl text-center text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                                Juntos crecemos en comunidad
                            </h2>
                        </motion.div>

                        <motion.div
                            style={{
                                opacity: galleryOpacity,
                                scale: galleryScale,
                                y: galleryY,
                            }}
                            className="absolute inset-0 hidden md:block"
                        >
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="max-w-3xl text-center text-4xl font-medium leading-[1] tracking-[-0.05em] text-foreground lg:text-6xl">
                                    Juntos crecemos en comunidad
                                </h2>
                            </div>

                            {COMMUNITY_IMAGES.map(
                                (imagen) => (
                                    <motion.div
                                        key={imagen.src}
                                        initial={false}
                                        style={{
                                            rotate:
                                                imagen.rotate,
                                        }}
                                        className={`absolute overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-xl ${imagen.className}`}
                                    >
                                        <Image
                                            src={imagen.src}
                                            alt={imagen.alt}
                                            fill
                                            sizes="250px"
                                            className="object-cover"
                                        />
                                    </motion.div>
                                )
                            )}
                        </motion.div>

                        <motion.div
                            style={{
                                opacity: galleryOpacity,
                                scale: galleryScale,
                                y: galleryY,
                            }}
                            className="absolute inset-0 md:hidden"
                        >
                            <div className="absolute inset-x-0 top-[26%] text-center">
                                <h2 className="mx-auto max-w-xs text-3xl font-medium leading-[1] tracking-[-0.045em] text-foreground">
                                    Juntos crecemos en comunidad
                                </h2>
                            </div>

                            {COMMUNITY_IMAGES
                                .slice(0, 5)
                                .map((imagen, index) => {
                                    const positions = [
                                        "left-[3%] top-[8%] h-[105px] w-[135px]",
                                        "right-[3%] top-[12%] h-[95px] w-[120px]",
                                        "left-[4%] bottom-[16%] h-[110px] w-[140px]",
                                        "right-[4%] bottom-[12%] h-[105px] w-[130px]",
                                        "left-1/2 bottom-[3%] h-[90px] w-[125px] -translate-x-1/2",
                                    ];

                                    return (
                                        <div
                                            key={imagen.src}
                                            className={`absolute overflow-hidden rounded-2xl border border-border ${positions[index]}`}
                                        >
                                            <Image
                                                src={
                                                    imagen.src
                                                }
                                                alt={
                                                    imagen.alt
                                                }
                                                fill
                                                sizes="140px"
                                                className="object-cover"
                                            />
                                        </div>
                                    );
                                })}
                        </motion.div>

                        <motion.div
                            style={{
                                opacity:
                                    secondTitleOpacity,
                                y: secondTitleY,
                            }}
                            className="absolute inset-0 flex flex-col justify-center"
                        >
                            <div className="mx-auto w-full max-w-[1500px]">
                                <div className="mb-10 text-center sm:mb-14 lg:mb-16">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                        Comunidad Élite
                                    </p>

                                    <h2 className="mx-auto mt-4 max-w-5xl text-3xl font-medium leading-[1] tracking-[-0.055em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                                        Siempre hay un lugar
                                        para seguir creciendo
                                    </h2>
                                </div>

                                <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                                    {COMMUNITY_CARDS.map(
                                        (card, index) => (
                                            <motion.article
                                                key={card.titulo}
                                                style={{
                                                    opacity:
                                                        cardAnimations[
                                                            index
                                                        ]
                                                            .opacity,
                                                    y:
                                                        cardAnimations[
                                                            index
                                                        ].y,
                                                    rotate:
                                                        cardAnimations[
                                                            index
                                                        ]
                                                            .rotate,
                                                }}
                                                className="overflow-hidden rounded-xl border border-border bg-card sm:rounded-2xl lg:rounded-[2rem]"
                                            >
                                                <div className="relative aspect-[4/3] overflow-hidden">
                                                    <Image
                                                        src={
                                                            card.imagen
                                                        }
                                                        alt={
                                                            card.titulo
                                                        }
                                                        fill
                                                        sizes="(max-width: 768px) 33vw, 30vw"
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <div className="p-3 sm:p-5 lg:p-7">
                                                    <h3 className="text-[clamp(0.8rem,2vw,2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground">
                                                        {
                                                            card.titulo
                                                        }
                                                    </h3>

                                                    <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:mt-4 md:block lg:text-base">
                                                        {
                                                            card.descripcion
                                                        }
                                                    </p>

                                                    <div className="mt-3 h-1 w-8 rounded-full bg-primary sm:mt-6 sm:w-12" />
                                                </div>
                                            </motion.article>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};