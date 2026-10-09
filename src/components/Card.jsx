import '../styles/Card.css'
export default function Card(props) {
    return (
        <div className='card-produtos' >
            <h2 className='card-titulo'>{props.titulo}</h2>
            <img className='card-img' src={props.imagem} alt={props.titulo} />
            <p className='card-descricao'>{props.descricao}</p>
        </div>
    )
}