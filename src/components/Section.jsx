import Card from './Card'
import '../styles/Section.css'

function Section({ sectionName, color, products }) {
  return (
    <section style={{ backgroundColor: color }}>
      <h2>{sectionName}</h2>

      {products.map((product, productIndex) => (
        <Card key={productIndex} product={product} />
      ))}
    </section>)
}

export default Section