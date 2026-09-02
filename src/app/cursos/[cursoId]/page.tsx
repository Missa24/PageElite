import CursoPageContent from "./mod-page";

type PageProps = {
    params: Promise<{
        cursoId: string;
    }>;
};

export default async function Page({
    params,
}: PageProps) {
    const { cursoId } = await params;

    return <CursoPageContent cursoId={cursoId} />;
}