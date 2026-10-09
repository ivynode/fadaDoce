import { Link } from "react-router-dom"
import '../styles/Error.css'

export default function Error404() {
    return (
        <div className="erro">
            <h1>Erro 404: Página não localizada.</h1>
            <p>Não localizamos esse link.</p>
            <Link to="/" className="btn-voltar">Voltar</Link>
        </div>
    )
}