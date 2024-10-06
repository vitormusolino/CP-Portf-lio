import CardHabilidades from "../CardHabilidades/CardHabilidades";

export default function Habilidades() {

    const infoCards = [
        {
            habilidade: "Aprendizado Contínuo",
            texto:"Sou apaixonado por aprender e me mantenho constantemente atualizado com as novas tendências e tecnologias. Com o setor de desenvolvimento sempre em evolução, estou sempre buscando aprimorar minhas habilidades e dominar novas ferramentas para oferecer soluções inovadoras."
        },
        {
            habilidade: "Atenção aos Detalhes",
            texto:"Tenho um olhar atento para os detalhes, o que me ajuda a evitar erros pequenos que poderiam gerar grandes complicações no código. Presto atenção minuciosa em cada linha e em cada decisão de lógica, sempre buscando garantir que tudo esteja em perfeita sintonia com o projeto."
        },
        {
            habilidade: "Resolução de Problemas",
            texto:"Eu me destaco na capacidade de resolver problemas de forma eficiente. Quando enfrento desafios complexos, consigo dividi-los em etapas menores e encontrar soluções criativas e práticas. Seja ao lidar com bugs ou ao desenvolver novas funcionalidades, estou sempre focado em garantir que o sistema funcione de forma otimizada."
        }
    ]

    return ( <>
            <section className="bg-blue-800 min-h-96 rounded">
                <h1 className="text-white font-bold text-4xl text-center p-10">Habilidades</h1>
                <div className="flex justify-around">
                    <CardHabilidades infoCards={infoCards}/>
                </div>
            </section>
            </> );
}
