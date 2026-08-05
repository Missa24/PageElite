import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const preguntas = [
  {
    pregunta: "¿Quiénes pueden estudiar en la academia?",
    respuesta:
      "Cualquier persona apasionada por la belleza, sin experiencia previa.",
  },
  {
    pregunta: "¿Los cursos incluyen materiales?",
    respuesta: "Sí, todos nuestros cursos incluyen materiales y productos.",
  },
  {
    pregunta: "¿Recibo certificado al finalizar?",
    respuesta:
      "Sí, obtendrá un certificado avalado por nuestra institución.",
  },
  {
    pregunta: "¿Las clases son presenciales u online?",
    respuesta:
      "Contamos con modalidad presencial, online y semipresencial.",
  },
  {
    pregunta: "¿Puedo pagar en cuotas?",
    respuesta:
      "Sí, ofrecemos diferentes métodos de pago y cuotas sin interés.",
  },
  {
    pregunta: "¿Dónde están ubicados?",
    respuesta:
      "Estamos en el corazón de la ciudad, con fácil acceso y estacionamiento.",
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
              FAQ
            </p>

            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Preguntas Frecuentes
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Preguntas Frecuentes
              </h2>
            )}

            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Todo lo que necesitas saber sobre nuestros cursos.{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Contáctanos
              </Link>{" "}
              si tienes otra duda.
            </p>
          </div>

          <div className="text-start">
            <Accordion type="single" collapsible className="w-full">
              {preguntas.map((item, i) => (
                <AccordionItem key={i} value={`${i}`}>
                  <AccordionTrigger>{item.pregunta}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.respuesta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};