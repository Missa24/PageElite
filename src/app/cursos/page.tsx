import { Suspense } from "react";

import CursosPageContent from "./cursos-page";

export default function Page() {
    return (
        <Suspense
            fallback={
                <main className="container py-20">
                    <p>Cargando cursos...</p>
                </main>
            }
        >
            <CursosPageContent />
        </Suspense>
    );
}
