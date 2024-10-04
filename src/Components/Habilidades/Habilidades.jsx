import CardHabilidades from "../CardHabilidades/CardHabilidades";

export default function Habilidades() {

    const infoCards = [
        {
            habilidade: "Tecnologia",
            icon:"",
            texto:"Texto sobre tecnologia"
        },
        {
            habilidade: "Social",
            icon:"",
            texto:"Texto sobre social"
        },
        {
            habilidade: "Interessado",
            icon:"",
            texto:"Texto sobre interessado"
        }
    ]

    return ( <>
            <section className="bg-blue-800">
                <h1 className="text-white font-bold text-4xl text-center p-10">Habilidades</h1>
                <div className="flex justify-around">
                    <CardHabilidades infoCards={infoCards}/>
                </div>
            </section>
            </> );
}
