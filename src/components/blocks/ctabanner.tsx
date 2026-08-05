import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CtaBanner = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <section id="cta" className={cn("py-24 lg:py-32", className)}>
      <div className="container">
        <div
          className="relative h-[380px] overflow-hidden"
          style={{
            clipPath:
              "polygon(0 8%,12% 0,38% 5%,64% 1%,84% 7%,100% 0,100% 92%,88% 100%,62% 95%,36% 100%,14% 96%,0 100%)",
          }}
        >
          <Image
            src="/cta.jpg"
            alt="Elite Academy"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="relative flex h-full items-end">
            <div className="max-w-2xl px-8 pb-10 md:px-12 md:pb-12">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Tu futuro profesional comienza aquí.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Solicita información sobre nuestros programas y recibe asesoramiento
                personalizado para comenzar tu formación.
              </p>

              <Button className="mt-8" size="lg" asChild>
                <a href="#contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}