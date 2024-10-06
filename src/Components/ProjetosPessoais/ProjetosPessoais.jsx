export default function ProjetosPessoais({cardProjetos}) {
    return ( <>
    
        {
            cardProjetos.map(proj =>(
                <div className="flex mb-20 mt-20">
                <img src={proj.img} className="max-w-64 rounded-sm"/>
                <div className="flex flex-col justify-center bg-gray-200 rounded-sm p-14">
                    <h3 className="font-bold text-blue-950 text-2xl mb-5">{proj.projeto}</h3>
                    <p className="max-w-md font-bold text-gray-950">{proj.texto}</p>
                </div>
              </div> 
            ))
        } 
            </> );
}

