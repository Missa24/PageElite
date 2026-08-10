import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import FooterSwitcher from "@/components/blocks/footerSwitcher";
import { Navbar } from "@/components/blocks/navbar";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "@/styles/globals.css";


const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {

  title: {
    default:
      "Elite Academy | Formación Profesional en Cosmetología y Estética",
    template: "%s | Elite Academy",
  },


  description:
    "Elite Academy Bolivia es una academia especializada en formación profesional de cosmetología, estética facial, estética corporal y maquillaje profesional con cursos certificados y resolución ministerial.",


  keywords: [
    "Elite Academy Bolivia",
    "cursos de cosmetología Bolivia",
    "cursos de estética La Paz",
    "academia de belleza Bolivia",
    "cosmetología profesional",
    "estética facial",
    "estética corporal",
    "maquillaje profesional",
    "cursos de maquillaje Bolivia",
    "cosmiatría",
    "especializaciones de belleza",
    "formación profesional estética",
    "cursos certificados de belleza",
  ],
  authors: [
    {
      name: "Elite Academy",
    },
  ],
  creator: "Elite Academy",
  publisher: "Elite Academy",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "48x48",
      },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },


  openGraph: {
    type: "website",
    locale: "es_BO",
    title:
      "Elite Academy | Academia Profesional de Belleza en Bolivia",
    description:
      "Formación profesional en cosmetología, estética facial, estética corporal y maquillaje con cursos especializados.",
    siteName: "Elite Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elite Academy Bolivia - Formación Profesional en Belleza",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title:
      "Elite Academy | Formación Profesional en Belleza",
    description:
      "Cursos profesionales de cosmetología, estética y maquillaje en Bolivia.",
    images: [
      "/og-image.jpg",
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main>
            {children}
          </main>
          <WhatsAppFloat />
          <FooterSwitcher />
          {/* <FooterSummary /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}