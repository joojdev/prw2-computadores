import { useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import PageContent from './components/PageContent'
import ProductModal from './components/ProductModal'
import './App.css'

function App() {
  const [isModalShown, setIsModalShown] = useState(false)
  const [activeProducts, setActiveProducts] = useState([])

  function handleCloseModal() {
    setIsModalShown(false)
  }

  function handleOpenModal() {
    setIsModalShown(true)
  }

  function handleNewProduct(product) {
    const newArray = activeProducts
    newArray.push(product)
    setActiveProducts(newArray)
  }

  return (
    <>
      <Nav />
      <Hero />
      <PageContent />
      <button onClick={() => console.log(activeProducts)}>ver lista de produtos</button>
      <button onClick={handleOpenModal}>abrir modal</button>
      {isModalShown && <ProductModal onCreate={handleNewProduct} close={handleCloseModal} />}
    </>
  )
}

export default App
