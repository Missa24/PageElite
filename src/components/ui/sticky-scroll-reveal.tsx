"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

import { cn } from "@/lib/utils";

type StickyScrollItem = {
  title: string;
  description: string;
  content?: ReactNode;
};

type StickyScrollProps = {
  content: StickyScrollItem[];
  contentClassName?: string;
};

const BACKGROUND_COLORS = [
  "#0f172a",
  "#000000",
  "#171717",
];

const LINEAR_GRADIENTS = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)",
  "linear-gradient(to bottom right, #ec4899, #6366f1)",
  "linear-gradient(to bottom right, #f97316, #eab308)",
];

export const StickyScroll = ({
  content,
  contentClassName,
}: StickyScrollProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const [backgroundGradient, setBackgroundGradient] =
    useState(LINEAR_GRADIENTS[0]);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest: number) => {
      if (cardLength === 0) {
        return;
      }

      const cardsBreakpoints = content.map(
        (_, index) => index / cardLength
      );

      const closestBreakpointIndex =
        cardsBreakpoints.reduce(
          (
            closestIndex,
            breakpoint,
            index
          ) => {
            const currentDistance = Math.abs(
              latest - breakpoint
            );

            const closestDistance = Math.abs(
              latest -
              cardsBreakpoints[closestIndex]
            );

            return currentDistance <
              closestDistance
              ? index
              : closestIndex;
          },
          0
        );

      setActiveCard(closestBreakpointIndex);
    }
  );

  useEffect(() => {
    const gradient =
      LINEAR_GRADIENTS[
      activeCard % LINEAR_GRADIENTS.length
      ];

    setBackgroundGradient(gradient);
  }, [activeCard]);

  if (content.length === 0) {
    return null;
  }

  const activeContent =
    content[activeCard]?.content ?? null;

  const backgroundColor =
    BACKGROUND_COLORS[
    activeCard % BACKGROUND_COLORS.length
    ];

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor,
      }}
      className="relative flex h-[30rem] justify-center gap-10 overflow-y-auto rounded-md p-10"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="my-20"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:
                    activeCard === index
                      ? 1
                      : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity:
                    activeCard === index
                      ? 1
                      : 0.3,
                }}
                className="mt-10 max-w-sm text-lg text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          <div className="h-40" />
        </div>
      </div>

      <div
        style={{
          background: backgroundGradient,
        }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {activeContent}
      </div>
    </motion.div>
  );
};