import { Link } from "react-router-dom"
import '../styles/Inicio.css'
import Card from "../components/Card"
import localizacao from '../assets/localizacao.png'
import banner from '../assets/banner.png'
import cupcake from '../assets/cupcake.jfif'
import snorlax from '../assets/snorlax.png'
import seila from '../assets/seila.jfif'
export default function Inicio() {
    return (
        <main>
            <div className="conteudo">
                <h1 className="titulo" style={{
                    margin: '20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    color: '#f1a3c1ff'
                }}>࣪ ˖ ⊹ O lado mais doce da magia ⊹ ࣪ ˖</h1>
                <p className="sub-titulo" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    color: '#d27b9d'
                }}>Comidinhas personalizadas no tema que você ama.</p>
                {/* Parte de cima do site */}
                <div className="meio">
                    <img src={localizacao} className="Localizacao" style={{
                        width: '500px',
                        height: '660px'
                    }} />
                    <h1 style={{ color: '#b86886ff' }}>Criamos doces e salgados artesanais que parecem obras de arte e têm gosto de pura felicidade. Entre, fique à vontade e escolha o seu favorito!</h1>
                </div>
                <div className="seilaporra">
                    <img src={banner} className="Banner" style={{
                        width: '1905px',
                        height: '200px'
                    }} />
                    <h2 style={{ color: '#d27b9d' }}>Gotta Eat 'Em All!</h2>
                </div>
                {/* Cards*/}
                <div className="container" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: '30px'
                }}>
                    <Card className='card'
                        titulo='Cupcake misterioso'
                        imagem={cupcake}
                        descricao='Cada mordida é uma surpresa: tem desde o clássico chocolate chocolatudo até combinações com frutas de verdade e confeitos coloridos que dão até pena de comer. Perfeito para dividir com a galera'
                    />
                    <Card className='card'
                        titulo='Pizza Temática Snorlax'
                        imagem={snorlax}
                        descricao='A pizza perfeita para quem quer comer bem e tirar aquela soneca depois! Nosso Snorlax vem esculpido em uma massa artesanal super macia, com a barriguinha recheada até a borda com muito queijo derretido, brócolis, camarão e ovos.'
                    />
                    <Card className='card'
                        titulo='All Cremie'
                        imagem={seila}
                        descricao='Inspirado no Alcremie, essa belezinha é uma montanha de chantilly super leve e morangos frescos que parece até um abraço doce. Dá até uma dor no coração de cortar de tão lindo, mas garantimos que o sabor compensa cada pedaço.'
                    />
                </div>
                <Link to='/cardapio' className="btn-cardapio">Ver Cardápio Completo</Link>
            </div>
        </main >
    )
}