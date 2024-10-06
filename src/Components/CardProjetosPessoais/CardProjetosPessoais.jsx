import FePhoto from '../../assets/FEChoicesProjeto.png'
import ReactProjeto from '../../assets/ReactProjeto.png'
import MusolinoProjeto from '../../assets/MusolinoFoodProjeto.png'
import ProjetosPessoais from '../ProjetosPessoais/ProjetosPessoais';

export default function CardProjetosPessoais() {

    const cardProjetos = [
        {
            img: FePhoto,
            projeto: "FE Choices",
            texto:"Trabalho da Challenge da FIAP em 2024, em parceria com a Tech Mahindra, com objetivo de popularizar a Formula-E."
        },
        {
            img: ReactProjeto,
            projeto: "Site em React",
            texto:"Checkpoint em react, primeiro site que fiz nesse framework, foi muito bom para o meu avanço de conhecimento."
        },
        {
            img: MusolinoProjeto,
            projeto: "Musolino Food",
            texto:"Site para a Musolino Food & Cia, com o objetivo de ser uma landing page, para divulgação da empresa."
        }
    ]

    return ( <> 
            <div className="flex justify-around">
                <div className=''><ProjetosPessoais cardProjetos={cardProjetos}/></div>
            </div>
      
            </> );
}
