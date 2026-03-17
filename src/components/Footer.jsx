import '../styles/Footer.css'

function Footer() {
  function handleKnowThem() {
    window.location.href = 'http://ufoevidence.org/'
  }

  return (
    <footer>
      <img src="/logo_nav_preto.png"></img>
      <ul className="pseudonav">
        <li>Home</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li onClick={handleKnowThem}>Conhecer eles</li>
      </ul>
    </footer>
  )
}

export default Footer