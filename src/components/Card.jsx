import brands from '../data/brands'
import State from '../enum/State.enum'
import '../styles/Card.css'

function Card({ product }) {
  return (
    <div className='card'>
      <img src={`/${brands[product.brand].image}`}></img>
      <div className='text'>
        <h3>{product.name}</h3>
        <p>R${product.price.toFixed(2)}</p>
        <p className='state'>{product.state == State.NEW ? 'Novo' : 'Usado'}</p>
      </div>
    </div>
  )
}

export default Card