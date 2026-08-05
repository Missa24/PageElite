import { cursosCejasPestanas } from "@/data/curso-detalle/cejas-pestanas";


interface props {
    params: {
        id: string;
    }
}
export default function page(id: props) {
    const curso = cursosCejasPestanas.find(curso => curso.id === id.params.id);
    return (
        <div>

        </div>
    );
}