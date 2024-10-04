import FotoPerfil from '../../assets/foto-teste.jpg'

export default function Sobre() {
    return ( <>
        <div className='flex justify-around items-center mt-32 mb-32'>
            <div>
                <h1 className='text-blue-800 font-bold text-5xl'>Vitor Musolino 💻</h1>
                <p className='max-w-xl mt-7 font-medium text-blue-950'>
                    Sou um desenvolvedor que sempre busca por novos desafios, e diariamente busco aprimorar meus conhecimentos e habilidades dentro da área da programação.
                    Em 2024, ingressei no curso de Engenharia de Software, nesta nova fase, busco evoluir, e aprender cada vez mais tecnologias e linguagens de programação.
                    Procuro por novas experiências para o meu desenvolvimento no mercado de trabalho na área de tecnologia.
                </p>
            </div>
            <div>
                <img src={FotoPerfil} alt="" className='rounded'/>
            </div>
        </div>
        </> );
}

 