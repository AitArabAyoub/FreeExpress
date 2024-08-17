import { useContext} from "react"
import { ThemeContext } from "../../App"
import { Link } from "react-router-dom"
function Header() {
    const {Light,handleClick} = useContext(ThemeContext)
    return (
        <nav className="navbar py-2 navbar-dark bg-dark">
            <div className="container">
                <Link to={"/"} className="navbar-brand m-0">
                    Free Express 
                </Link>
            </div>
        </nav>
    )
}
export default Header