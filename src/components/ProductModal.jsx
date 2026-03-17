import { useState } from 'react'
import BlackScreenWrapper from "./BlackScreenWrapper"
import State from '../enum/State.enum'
import sections from '../data/sections'
import brands from '../data/brands'
import '../styles/ProductModal.css'

function ProductModal({ onCreate, close }) {
  const [selectedSection, setSelectedSection] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [state, setState] = useState(State.NEW)

  function handleSectionChange(event) {
    setSelectedSection(event.target.value)
  }

  function handleBrandChange(event) {
    setSelectedBrand(event.target.value)
  }

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handlePriceChange(event) {
    setPrice(event.target.value)
  }

  function handleStateChange(event) {
    setState(event.target.value)
  }

  function handleFormSubmit() {
    if (!selectedSection) return
    if (!selectedBrand) return
    if (!name.trim()) return
    if (price < 0) return
    if (state != State.NEW && state != State.USED) return

    const product = {
      section: selectedSection,
      brand: selectedBrand,
      name: name.trim(),
      price,
      state
    }

    close()
    onCreate(product)
  }

  return (
    <BlackScreenWrapper>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Dados do Produto</legend>

          <label>
            Seção:
            <select id="section" onChange={handleSectionChange} required>
              <option value="">--- Selecione ---</option>
              {sections.map(({ name: sectionName }, index) => <option key={index} value={sectionName}>{sectionName}</option>)}
            </select>
          </label>

          <label>
            Marca:
            <select id="brand" onChange={handleBrandChange} required>
              <option value="">--- Selecione---</option>
              {brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
            </select>
          </label>

          <label>
            Nome:
            <input type="text" autoComplete="off" value={name} onChange={handleNameChange} required />
          </label>

          <label>
            Preço:
            <input type="number" autoComplete="off" value={price} min="0" onChange={handlePriceChange} required />
          </label>

          <div className="label">
            Estado:

            <label>
              <input type="radio" name="state" value="NEW" onChange={handleStateChange} checked={state == State.NEW} />
              Novo
            </label>

            <label>
              <input type="radio" name="state" value="USED" onChange={handleStateChange} checked={state == State.USED} />
              Usado
            </label>
          </div>

          <button type="submit">Criar</button><button onClick={close} className="cancel">Cancelar</button>
        </fieldset>
      </form>
    </BlackScreenWrapper>
  )
}

export default ProductModal