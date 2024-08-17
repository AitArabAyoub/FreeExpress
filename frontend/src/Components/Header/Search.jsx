/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
function Search({value}) {
    // console.log(value);
    return (
        <Link to={`product/${value.id}`} className="text-decoration-none text-dark d-block p-2 bg-white">{value.attributes.Title}</Link>
    )
}

export default Search