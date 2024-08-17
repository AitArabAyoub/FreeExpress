import { useState } from "react"
import { useSelector } from "react-redux"
import {useGetSearProdsQuery} from "../../api/ProductSlice"
import { Link } from "react-router-dom"
import Search from "./Search"

function Header1() {
    const {cartItems} = useSelector(store=>store.cart)
    const [query,setQuery] = useState("")
    const {data} = useGetSearProdsQuery({query})
    return (
        <nav className="navbar bg-body-tertiary border-bottom">
            <div className="container">
                <div className="navbar-brand m-0 d-flex flex-column align-items-center me-3">
                    <i className="bi bi-cart3 fs-5 fw-bold"></i>
                    <h6>E-commerce</h6>
                </div>
                <div className="w-50 d-flex">
                    <div className=" input-group position-relative Search">
                        <span className="input-group-text  border border-1 border-dark" id="basic-addon1"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control border border-1 border-dark" placeholder="Search For ..." onChange={(e)=>setQuery(e.target.value)}/>
                        <ul className="choices list-unstyled">
                            {data?.data.slice(0,8).map(el=>{
                                return <Search key={el.id} value={el}/>
                            })}
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle rounded-0"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link to={"/category/1"} className="dropdown-item">Men</Link></li>
                            <li><Link to={"/category/2"} className="dropdown-item">Women</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-brand m-0 d-flex justify-content-center align-items-center">
                    <button type="button" className="btn position-relative px-3 py-2  me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <i className="bi bi-bag" role="button"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartItems.reduce((accumulator) => accumulator + 1,0,)}
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header1