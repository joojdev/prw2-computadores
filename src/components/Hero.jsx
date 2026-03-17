import '../styles/Hero.css'

function Hero() {
  function handleKnowThem() {
    window.location.href = "http://ufoevidence.org/"
  }

  return (
    <>
      <header id="hero">
        <div className="filter">
          <div className="text">
            <h1>Eles da Silva Informática</h1>
            <p>Onde a sua satisfação é o dever deles ☝️</p>
            <button onClick={handleKnowThem}>Conheça eles</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero