"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
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
        {/* LOGO */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Elite Academy"
            width={1368}
            height={1368}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
          />
        </Link>

        {/* MENÚ ESCRITORIO */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList>
            {ITEMS.map((link) =>
              link.dropdownItems ? (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger className="bg-transparent! px-1.5 data-[state=open]:bg-accent/50">
                    {link.label}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="w-[240px] space-y-2 p-2">
                      {link.dropdownItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="group flex items-center gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                      pathname === link.href &&
                      "text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ACCIONES */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          {/* BOTÓN MENÚ MÓVIL */}
          <button
            type="button"
            className="relative flex size-8 text-muted-foreground lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen ? "Cerrar menú principal" : "Abrir menú principal"
            }
            aria-expanded={isMenuOpen}
          >
            <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen
                    ? "rotate-45"
                    : "-translate-y-1.5"
                )}
              />

              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen && "opacity-0"
                )}
              />

              <span
                aria-hidden="true"
                className={cn(
                  "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                  isMenuOpen
                    ? "-rotate-45"
                    : "translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div
        className={cn(
          "fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-1 flex-col divide-y divide-border">
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div
                key={link.label}
                className="py-4 first:pt-0 last:pb-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label
                        ? null
                        : link.label
                    )
                  }
                  className="flex w-full items-center justify-between text-base font-medium text-primary"
                >
                  {link.label}

                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === link.label &&
                      "rotate-90"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openDropdown === link.label
                      ? "mt-4 max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  <div className="space-y-3 rounded-lg bg-muted/50 p-4">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group block rounded-md p-2 transition-colors hover:bg-accent"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        <div className="transition-transform duration-200 group-hover:translate-x-1">
                          <div className="font-medium text-primary">
                            {item.title}
                          </div>

                          <p className="mt-1 text-sm text-muted-foreground">
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
                  "py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80",
                  pathname === link.href &&
                  "text-muted-foreground"
                )}
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpenDropdown(null);
                }}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </section>
  );
};