import { useState } from 'react'
import Hero from './components/Hero'
import Nav from './components/Nav'
import PageContent from './components/PageContent'
import ProductModal from './components/ProductModal'
import Footer from './components/Footer'
import sections from './data/sections'
import './App.css'

function App() {
  const [isModalShown, setIsModalShown] = useState(false)
  const [activeProducts, setActiveProducts] = useState(sections.reduce((acc, current) => {
    acc[current.name] = []
    return acc
  }, {}))

  function handleCloseModal() {
    setIsModalShown(false)
  }

  function handleOpenModal() {
    setIsModalShown(true)
  }

  function handleNewProduct(product) {
    const newArray = activeProducts
    newArray[product.section].push(product)
    setActiveProducts(newArray)
  }

  return (
    <>
      <Nav />
      <Hero />
      <PageContent openModal={handleOpenModal} products={activeProducts} />
      {isModalShown && <ProductModal onCreate={handleNewProduct} close={handleCloseModal} />}
      <Footer />
    </>
  )
}

export default App
