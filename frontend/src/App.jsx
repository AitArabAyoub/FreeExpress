import { createContext , useState} from "react"
import Header from "./Components/Header/Header"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header1 from "./Components/Header/Header1"
import Cart from "./Components/Cart/Cart"
import { Outlet } from "react-router-dom"
export const ThemeContext = createContext(undefined)
function App() {
  const [Light, setLight] = useState(true)
  const handleClick = ()=>{
    setLight((prevval)=>!prevval)
  }
  return (
    <div className="App">
      <ThemeContext.Provider value={{Light,handleClick}}>
        <Header/>
        <Header1/>
        <Cart/>
        <Outlet/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
