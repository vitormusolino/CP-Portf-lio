import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import FormularioContato from "../FormularioContato/FormularioContato";


export default function Contato() {
    return ( <>
            <div>
                <div>
                <h1 className="text-center font-bold text-blue-950 text-4xl mt-8">Contato</h1>
                </div>
                <p className="text-center mt-10 font-bold text-blue-950 text-xl">vitor.musolino@gmail.com</p>
                <FormularioContato/>
                <div className="flex justify-center mt-1 gap-5 pt-5 mb-20">
                    <a href="https://github.com/vitormusolino" target="blank" className="text-blue-950 text-5xl hover:text-[#0000CD] transition-all"><FaGithub/></a> 
                    <a href="https://www.linkedin.com/in/vitor-musolino-teixeira/" target="blank" className="text-blue-950 text-5xl hover:text-[#0000CD] transition-all"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/vitor.teiixeiraa/" target="blank" className="text-blue-950 text-5xl hover:text-[#0000CD] transition-all"><FaInstagram/></a>
                </div>
            </div>
            </> );
}

