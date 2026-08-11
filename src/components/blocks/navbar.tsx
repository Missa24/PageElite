"use client";
{/*
-- features cambiar a cursos, desploega los mimso 7
-- sus rutas y navbar y footer
-- bloques opcional, AGREGAR un filtro 
-- pnpm run build "no podemos desplegar al servidor si tiene errores y notifica"
-- imagenes webp
-- en public, poner carpeta "cursos, y poner las imagenes" re
*/}

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronRight, Key } from "lucide-react";
import { features } from "process";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Cursos",
    href: "#cursos",
    dropdownItems: [
      {
        title: "Certificaciones Profesionales",
        href: "/cursos/certificaciones",
        description:
          "Programas certificados para impulsar tu perfil profesional.",
      },
      {
        title: "Especialidades Avanzadas",
        href: "/cursos/especialidades",
        description:
          "Cursos especializados para profesionales de la estética y belleza.",
      },
      {
        title: "Estética Facial",
        href: "/cursos/faciales",
        description:
          "Tratamientos faciales y cuidado avanzado de la piel.",
      },
      {
        title: "Estética Corporal",
        href: "/cursos/corporales",
        description:
          "Formación práctica en tratamientos corporales profesionales.",
      },
      {
        title: "Maquillaje Profesional",
        href: "/cursos/maquillaje",
        description:
          "Maquillaje social, artístico y editorial profesional.",
      },
      {
        title: "Cejas y Pestañas",
        href: "/cursos/cejas-pestanas",
        description:
          "Diseño de cejas, lifting y extensiones profesionales.",
      },
    ],
  },
  {
    label: "¿Por qué elegirnos?",
    href: "/#porque",
  },
  {
    label: "Docentes",
    href: "/#docentes",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
  {
    label: "Contacto",
    href: "/contact",
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <section
      className={cn(
        "fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-4xl border bg-background/70 backdrop-blur-md",
        "sm:top-6 lg:top-12 lg:w-[75%] xl:w-[70%]"
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={1368}
            height={1368}
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
          />
        </Link>

        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <NavigationMenuItem key={link.label} className="">
                  <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-1.5">
                    {link.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[240px] space-y-2 p-2">
                      {link.dropdownItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none"
                            >
                              <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                <div className="text-sm leading-none font-medium">
                                  {item.title}
                                </div>
                                {/* <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                  {item.description}
                                </p> */}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label} className="">
                  <Link
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                      pathname === link.href && "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          {/*           
          <a
            href="https://github.com/shadcnblocks/mainline-nextjs-template"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          >
            <Key className="size-4" />
            <span>Log in</span>
            <span className="sr-only">Iniciar sesión</span>
          </a>
*/}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  className="text-primary flex w-full items-center justify-between text-base font-medium"
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openDropdown === link.label
                      ? "mt-4 max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group hover:bg-accent block rounded-md p-2 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        <div className="transition-transform duration-200 group-hover:translate-x-1">
                          <div className="text-primary font-medium">
                            {item.title}
                          </div>

                          <p className="text-muted-foreground mt-1 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0",
                  pathname === link.href && "text-muted-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </section>
  );
};
