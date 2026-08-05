import { cursosCejasPestanas } from "@/data/curso-detalle/cejas-pestanas";
import { notFound } from "next/navigation";


interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function page({ params }: PageProps) {
    const { id } = await params;
    const curso = cursosCejasPestanas.find((curso) => curso.id === id);

    if (!curso) {
        notFound();
    }

    return (
        <div>

        </div>
    );
}