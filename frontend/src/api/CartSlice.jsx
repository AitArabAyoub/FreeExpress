import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    cartItems: [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart : (state,action)=>{
            let item = action.payload
            let prod = state.cartItems.find(el=>el.id === item.id)
            if(prod){
                prod.quantity+=1
            }else{
                state.cartItems = [...state.cartItems,{...item,quantity:1}]
            }
        },
        removeFromCart :  (state,action)=>{
            state.cartItems = state.cartItems.filter(item=>item.id !== action.payload)
        },
        decrease : (state,action)=>{
            let prod = state.cartItems.find(el=>el.id === action.payload)
            if(prod.quantity === 1){
                state.cartItems = state.cartItems.filter(item=>item.id !== action.payload)
            }else{  
                prod.quantity-=1
            }
        }
    }
});
export const {addToCart,decrease,removeFromCart}  = cartSlice.actions 
export default cartSlice.reducer;