import Link from "next/link";
import { Facebook, Instagram, Music2 } from "lucide-react";

export function FooterSummary() {
  const courses = [
    { name: "Certificados", href: "/cursos/certificaciones" },
    { name: "Especialidades Avanzadas", href: "/cursos/especialidades" },
    { name: "Estética Facial", href: "/cursos/faciales" },
    { name: "Estética Corporal", href: "/cursos/corporales" },
    { name: "Maquillaje Profesional", href: "/cursos/maquillaje" },
    { name: "Cejas y Pestañas", href: "/cursos/cejas-pestanas" },
  ];

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "¿Por qué elegirnos?", href: "/#porque" },
    { name: "Docentes", href: "/#docentes" },
    { name: "Preguntas frecuentes", href: "/#faq" },
    { name: "Contáctanos", href: "/#cta" },
  ];

  const social = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/elitelacademybolivia/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/eliteacademybo/",
      icon: Instagram,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@eliteacademy.bo",
      icon: Music2,
    },
  ];

  const legal = [
    { name: "Política de privacidad", href: "/privacy" },
  ];

  return (
    <footer className="container py-12 lg:w-[70%] xl:w-[75%]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Columna 1:-branding */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold">Elite <b className="text-primary">Academia</b></h3>
          <p className="text-lg text-muted-foreground max-w-sm">
            Forma parte de Elite Academy y desarrolla las habilidades que te
            abrirán nuevas oportunidades en el mundo de la cosmetología y la
            estética.
          </p>
          <div>
            <a
              href="/#cta"
              className="inline-block bg-primary/90 text-sm text-black hover:bg-primary/80 py-2 px-4 rounded-md"
            >
              Solicitar información
            </a>
          </div>
          {/* Redes sociales */}
          <div className="col-span-2 flex flex-col gap-4 items-start">
            <ul className="flex gap-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-foreground transition-colors"
                      aria-label={item.name}
                    >
                      <Icon className="size-5" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Columna 2: Enlaces */}
        <div className="grid grid-cols-2 gap-8">
          {/* Cursos */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Cursos</h4>
            <ul className="flex flex-col gap-2">
              {courses.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-opacity hover:opacity-75"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold">Navegación</h4>
            <ul className="flex flex-col gap-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-opacity hover:opacity-75"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="mt-10" />

      <div className="flex flex-wrap items-center justify-between gap-2 w-full py-5">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Elite Academy. Todos los derechos reservados.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ul>
            {legal.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-opacity hover:opacity-75"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}