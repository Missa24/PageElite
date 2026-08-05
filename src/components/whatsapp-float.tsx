"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
    const phone = "59170586532";
    const message = encodeURIComponent(
        "Hola, me gustaría recibir información sobre los cursos de Elite Academy."
    );

    return (
        <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 hover:bg-[#1ebe5d]"
        >
            <FaWhatsapp className="h-9 w-9" />
        </a>
    );
}