import Chai from "./chai"
function App() {

  const username = "Soam Tripathy"
  return (
    //fragment in react
    <> 
    <Chai/>
    <h1>Chai aur code {username}</h1>
    {/* evaluted expression --> {username} */}
    <p>Test</p>
    </>
  )
}

export default App
