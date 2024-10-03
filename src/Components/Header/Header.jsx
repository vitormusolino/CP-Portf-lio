import {Link} from 'react-router-dom';


export default function Header() {
    return ( 
        <>
        <ul className='flex'>
            <li>
                <Link to='/'>Sobre mim</Link>
            </li>
            <li>
                <Link to='/projetos'>Projetos</Link>
            </li>
        </ul>

        </>
     );
}

