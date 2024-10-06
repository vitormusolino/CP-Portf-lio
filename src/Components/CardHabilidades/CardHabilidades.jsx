function CardHabilidades({infoCards}) {
    return ( <>
    {
        infoCards.map( info => (
        <div className="border-4 border-blue-600 bg-blue-900 rounded-2xl px-12 text-center m-16 w-3/4">
            <div>
                <h2 className="text-gray-100 font-bold text-xl mb-5 mt-10">{info.habilidade}</h2>
            </div>
            <p className="max-w-38 mt-10 mb-10 font-bold text-white">{info.texto}</p>
        </div>
        ))
    }
    </> );
}

export default CardHabilidades;