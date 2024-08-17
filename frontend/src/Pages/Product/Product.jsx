import { useParams } from "react-router-dom"
import { useGetProdQuery,useGetFeatProdsQuery} from "../../api/ProductSlice"
import Loader from "../../Components/Loader/Loader"
import { Rating } from "react-simple-star-rating"
import { useDispatch } from 'react-redux'
import ProductCard from "../../Components/ProductCard.jsx/ProductCard"
import { addToCart } from "../../api/CartSlice"

function Product() {
    const dispatch = useDispatch()
    const {prodid} = useParams()
    const {data,isLoading} = useGetProdQuery({prodid})
    const subcat = data?.data?.attributes?.subcategories?.data[0]?.attributes?.Title
    const {data:prods,isLoading:isFetching} = useGetFeatProdsQuery({subcat})
    if(isLoading && isFetching){
        <Loader/>
    }
    return (
        <div className="container min-vh-100">
            {isLoading  ? <Loader/> : ""}
            <div className="row">
                <div className="col-5">
                    {data ? <img src={`${data?.data?.attributes?.Images?.data[0]?.attributes?.url}`} className="w-100" alt="" /> : <div className="w-full" style={{height : "450px",backgroundColor : "#D3D3D3"}}></div>}
                </div>
                <div className="col-7">
                    {
                        data
                        ?
                        <h2 className="mb-3">{data?.data?.attributes?.Title}</h2>
                        :
                        <div className="w-50 mb-4 rounded-3"  style={{backgroundColor : "#D3D3D3",height : "30px"}}></div>
                    }
                    <div className="d-flex align-items-center mb-3">
                        {
                            data 
                            ?
                            <>
                                <h6 className="m-0">Rating :</h6>
                                <Rating initialValue={data?.data?.attributes?.Rating} size={23} allowFraction={0.5} readonly />
                            </>
                            :
                            <div className="w-50 mb-2 rounded-3"  style={{backgroundColor : "#D3D3D3",height : "20px"}}></div>
                        }
                    </div>
                    {data ? <h2 className="text-danger mb-3">$ {data?.data?.attributes?.Price}</h2> : <div className="w-50 mb-2 rounded-3"  style={{backgroundColor : "#D3D3D3",height : "20px"}}></div>}
                    <span>Description:</span>
                    {
                        data ? 
                        <p className="text-secondary">{data?.data?.attributes?.Description}</p> 
                        : 
                        <>
                        <div className="w-100 mb-2 rounded-3"  style={{backgroundColor : "#D3D3D3",height : "20px"}}></div>
                        <div className="w-100 mb-2 rounded-3"  style={{backgroundColor : "#D3D3D3",height : "20px"}}></div>
                        <div className="w-100 rounded-3"  style={{backgroundColor : "#D3D3D3",height : "20px"}}></div>
                        </>
                    }
                    {   
                    data ?                
                    <button 
                        className="btn btn-outline-dark" 
                        onClick={()=>dispatch(addToCart({id : data?.data?.id,name : data?.data?.attributes.Title,price : data?.data?.attributes.Price,image : data?.data?.attributes.Images.data[0].attributes.url}))}
                        >Add To Cart
                    </button>
                    :
                    <div className="w-25 mt-5 rounded-2"  style={{backgroundColor : "#D3D3D3",height : "35px"}}></div>
                    }
                </div>
            </div>
            <div>
                <h2 className="text-center">You Might Also Like</h2>
                <div className="row">
                    {prods?.data.map(prod=>{
                        if(prod.id !== data?.data?.id){
                            return <ProductCard key={prod.id} prod={prod}/>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product