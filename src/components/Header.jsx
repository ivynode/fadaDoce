import { Link } from 'react-router-dom'
import Logo from '../assets/imgLogo.png'
import '../styles/Header.css'

export default function Header() {
    return (
        <header className="cabecalho">
            <img src={Logo} className='img'/>
            <nav className="menu">
                <ul>
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/cardapio'>Cardapio</Link></li>
                    <li><Link to='/contatos'>Contatos</Link></li>
                    <li><Link to='/quemsomos'>Quem somos</Link></li>
                </ul>
            </nav>
        </header>
    )
}