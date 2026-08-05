import Image from "next/image";

const items = [
  {
    number: "01",
    title: "Formación práctica",
    description:
      "Aprende con clases dinámicas y técnicas aplicadas desde el primer día.",
  },
  {
    number: "02",
    title: "Docentes especializados",
    description:
      "Profesionales activos que acompañan tu crecimiento.",
  },
  {
    number: "03",
    title: "Certificación profesional",
    description:
      "Una formación que respalda tus conocimientos.",
  },
];

export const Features = () => {
  return (
    <section className="py-28" id="porque">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Imagen */}
          <div className="relative h-[520px] overflow-hidden rounded-[2rem]">
            <Image
              src="/features/porque.jpg"
              alt="Formación Elite Academy"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-primary text-sm uppercase ">
              ¿Por qué elegirnos?
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight lg:text-5xl">
              Una formación pensada para convertir tu pasión en una profesión.
            </h2>


            <div className="mt-12 divide-y">
              {items.map((item) => (
                <div
                  key={item.number}
                  className="flex gap-6 py-7"
                >
                  <span className="text-primary text-sm">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};