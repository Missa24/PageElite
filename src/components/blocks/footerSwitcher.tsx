"use client";

import { usePathname } from "next/navigation";

import { Footer } from "@/components/blocks/footer";
import { FooterSummary } from "@/components/blocks/footerSummary";

export default function FooterSwitcher() {
  const pathname = usePathname();

  if (pathname === "/") {
    return <Footer />;
  }

  return <FooterSummary />;
}