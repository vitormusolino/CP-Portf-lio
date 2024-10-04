import {Link} from 'react-router-dom';


export default function Header() {
    return ( 
        <>
        <ul className='flex text-blue-700 font-bold text-2xl justify-center mt-6 '>
            <li>
                <Link to='/' className='p-5 hover:text-blue-500 transition'>Sobre mim</Link>
            </li>
            <li>
                <Link to='/projetos' className='p-5 hover:text-blue-500 transition'>Projetos</Link>
            </li>
        </ul>

        </>
     );
}

