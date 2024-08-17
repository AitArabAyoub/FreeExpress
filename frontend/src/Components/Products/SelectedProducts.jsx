import ProductCard from "../ProductCard.jsx/ProductCard"
import {useGetNewProdsQuery} from "../../api/ProductSlice"
import Loader from '../Loader/Loader'
import qs from 'qs'
import { useState } from "react";
function SelectedProducts() {
    const [Cat,setCat] = useState([1,2])
    const query = qs.stringify({
        filters: {
            categories: {
                id : {
                    $eq: Cat,
                }
            },
        },
    });
    const handleClick = (val)=>{
        setCat(val)
    }
    const {data,isFetching} = useGetNewProdsQuery({query})
    return (
        <div className="container mt-5">
            <div className="header d-flex justify-content-between align-items-center">
                <div className="text">
                    <h3>Selected Products </h3>
                    <p>All our new arrivals in a exclusive brand selection</p>
                </div>
                <div className="buttons">
                    <button className='btn btn-outline-primary me-2 selector' onClick={()=>handleClick([1,2])}>All Products</button>
                    <button className='btn btn-outline-primary border-1 me-2 selector' onClick={()=>handleClick([1])}>Men</button>
                    <button className='btn btn-outline-primary border-1 selector' onClick={()=>handleClick([2])}>WOMEN</button>
                </div>
            </div>
            {isFetching ? <Loader/> :
                <div className="row">
                    {data?.data?.map((prod)=>{
                        return <ProductCard key={prod.id} prod={prod}/>
                    })}
                </div>
            }
        </div>
    )
}

export default SelectedProducts