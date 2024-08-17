import { useSelector } from "react-redux"
import CartItem from "./CartItem"

function Cart() {
    const {cartItems} = useSelector(store=>store.cart)
    return (
        <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel"><i className="bi bi-bag"> </i>CartItems</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ">
                {cartItems.map(item=>{
                    return <CartItem key={item.id} item={item}/>
                })}
            </div>
    </div>
    )
}

export default Cart