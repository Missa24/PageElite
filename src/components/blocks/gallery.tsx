"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


const images = [
  "/galeria/1.webp",
  "/galeria/2.webp",
  "/galeria/3.webp",
  "/galeria/4.webp",
  "/galeria/5.webp",
  "/galeria/6.webp",
  "/galeria/7.webp",
  "/galeria/8.webp",
  "/galeria/9.webp",
  "/galeria/10.webp",
  "/galeria/11.webp",
  "/galeria/12.webp",
  "/galeria/13.webp",
  "/galeria/14.webp",
  "/galeria/15.webp",
  "/galeria/16.webp",
  "/galeria/17.webp",
  "/galeria/18.webp",
  "/galeria/19.webp",
  "/galeria/20.webp",
  "/galeria/21.webp",
  "/galeria/22.webp",
  "/galeria/23.webp",
];


export function Gallery() {

  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) =>
        prev === Math.floor(images.length / 6) - 1
          ? 0
          : prev + 1
      );
    }, 20000);
    return () => clearInterval(timer);
  }, []);



  const currentImages = images.slice(
    page * 6,
    page * 6 + 6
  );


  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <h2 className="
          mb-12
          text-center
          text-3xl
          font-semibold
          tracking-tight
          md:text-5xl
        ">
          Nuestra Galería
        </h2>
        <div
          className="
            grid
            gap-5
            lg:grid-cols-12
            lg:grid-rows-[220px_220px_220px]
          "
        >
          <GalleryItem
            src={currentImages[0]}
            className="
              lg:col-span-6
              lg:row-span-2
            "
          />
          <GalleryItem
            src={currentImages[1]}
            className="
              lg:col-span-3
            "
          />
          <GalleryItem
            src={currentImages[2]}
            className="
              lg:col-span-3
            "
          />
          <GalleryItem
            src={currentImages[3]}
            className="
              lg:col-span-6
            "
          />
          <GalleryItem
            src={currentImages[4]}
            className="
              lg:col-span-6
            "
          />
          <GalleryItem
            src={currentImages[5]}
            className="
              lg:col-span-6
            "
          />

        </div>

      </div>

    </section>
  );
}



function GalleryItem({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {

  return (

    <div
      className={cn(
        `
        relative
        overflow-hidden
        rounded-3xl
        bg-muted
        `,
        className
      )}
    >
      <Image
        src={src}
        alt="Elite Academy"
        fill
        className="
          object-cover
          transition
          duration-700
          hover:scale-105
        "
      />
    </div>
  );
}