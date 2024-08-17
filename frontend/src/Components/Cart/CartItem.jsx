/* eslint-disable react/prop-types */
import { addToCart, decrease,removeFromCart} from "../../api/CartSlice"
import { useDispatch } from "react-redux"
function CartItem({item}) {
    const dispatch = useDispatch()
    return (
        <div className='d-flex align-items-center gap-2 border-top p-1'>
            <div className='d-flex flex-column'>
                <p className="border border-1 rounded-circle d-flex justify-content-center align-items-center" 
                    role="button" 
                    style={{width : "30px",height:"30px"}} 
                    onClick={()=>dispatch(addToCart(item))}
                    >+</p>
                <p className="text-center">{item.quantity}</p>
                <p className="border border-1 rounded-circle d-flex justify-content-center align-items-center" 
                    role="button" 
                    style={{width : "30px",height:"30px"}} 
                    onClick={()=>dispatch(decrease(item.id))}
                    >-</p>
            </div>
            <div className="flex-grow-1 d-flex gap-2">
                <div>
                    <img src={`${item.image}`} alt=""  className="rounded" width={"80px"} height={"80px"}/>
                </div>
                <div>
                    <h6>{item.name}</h6>
                    <h6>${item.price} x {item.quantity}</h6>
                    <h5 className="text-danger">$ {item.price * item.quantity}</h5>
                </div>
            </div>
            <div>
                <button type="button" className="btn-close" onClick={()=>dispatch(removeFromCart(item.id))}></button>
            </div>
        </div>
    )
}

export default CartItem