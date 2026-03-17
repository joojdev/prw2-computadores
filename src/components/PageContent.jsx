import Section from './Section'
import sections from '../data/sections'
import '../styles/PageContent.css'

function PageContent({ openModal, products }) {
  return (
    <div className="container">
      <div className="buttonWrapper">
        <button onClick={openModal}>Criar produto</button>
      </div>
      {sections.map(({ name, color }, sectionIndex) => (
        products[name].length != 0 && (
          <Section key={sectionIndex} products={products[name]} sectionName={name} color={color} />
        )
      ))}
    </div>
  )
}

export default PageContent