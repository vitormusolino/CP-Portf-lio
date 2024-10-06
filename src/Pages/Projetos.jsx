import CardProjetosPessoais from "../Components/CardProjetosPessoais/CardProjetosPessoais";
import Contato from "../Components/Contato/Contato";

export default function Projetos() {
    

    return ( <>
            <h1 className="text-center text-4xl text-blue-950 font-bold mt-16">Projetos Pessoais</h1>

            <CardProjetosPessoais/>

            <Contato/>
            </> );
}
