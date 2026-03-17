import '../styles/Nav.css'

function Nav() {
  function handleKnowThem() {
    window.location.href = 'http://ufoevidence.org/'
  }

  return (
    <nav>
      <img src="/logo_nav_branco.png"></img>
      <div className="pages">
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
          <li onClick={handleKnowThem}>Conhecer eles</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav