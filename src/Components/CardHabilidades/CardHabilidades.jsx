function CardHabilidades({infoCards}) {
    return ( <>
    {
        infoCards.map( info => (
            <div className="border-4 border-blue-500 bg-gray-200 rounded-md px-20 py-5">
            <div>
                <h2 className="text-blue-800 font-bold">{info.habilidade}</h2>
                <img src={info.icon} alt="" />
            </div>
            <p>{info.texto}</p>
        </div>
        ))
    }
    </> );
}

export default CardHabilidades;