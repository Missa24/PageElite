import ModuloPageContent from "./modulo-page";

type PageProps = {
    params: Promise<{
        cursoId: string;
        moduloId: string;
    }>;
};

export default async function Page({
    params,
}: PageProps) {
    const { cursoId, moduloId } = await params;

    return (
        <ModuloPageContent
            cursoId={cursoId}
            moduloId={moduloId}
            precio={350}
        />
    );
}