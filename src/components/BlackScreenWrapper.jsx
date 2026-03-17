import '../styles/BlackScreen.css'

function BlackScreenWrapper({ children }) {
  return (
    <div className="blackScreen">
      {children}
    </div>
  )
}

export default BlackScreenWrapper