import { useState,useEffect } from 'react'
import Loader from '../../Components/Loader/Loader'
import {useGetCatProdsQuery,useGetCatSubsQuery} from '../../api/ProductSlice'
import { useParams } from 'react-router-dom'
import qs from 'qs'
import ProductCard from '../../Components/ProductCard.jsx/ProductCard'
function Category() {
    const [query,setQuery] = useState("")
    const [SelectedSubCats,setSelectedSubCats] = useState([])
    const {catid} = useParams()
    const {data,isLoading} = useGetCatProdsQuery({catid,query})
    const {data:subs} = useGetCatSubsQuery({catid})
    const handleChange = (val)=>{
        const value= val.target.value
        const isChecked = val.target.checked
        setSelectedSubCats(isChecked?[...SelectedSubCats,value]:SelectedSubCats.filter(el=>el!==value))
    }
    useEffect(()=>{
        const query = qs.stringify({
            filters: {
                subcategories: {
                    id:{
                        $in: SelectedSubCats,
                    },
                }
            },
        })
        setQuery(query)
    },[SelectedSubCats])
    return (
        <div className='container-fluid min-vh-100'>
            <div className="row">
                <div className="col-2">
                    {subs?.data?.map(el=>{
                        return <div key={el.id}>
                        <input type="checkbox" id={el.id} value={el.id} onChange={(e)=>handleChange(e)}/>
                        <label htmlFor={el.id} className='ms-1'>{el.attributes.Title}</label>
                    </div>
                    })}
                </div>
                <div className="col-10">
                    <div className="row">
                    {isLoading ? <Loader/> : 
                        data?.data?.map(item=>{
                            return <ProductCard key={item.id} prod={item}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category