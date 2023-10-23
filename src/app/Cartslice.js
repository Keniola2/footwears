import {createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState={
    cartState:false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [], //suppose database
    cartTotalAmount:0,
    cartTotalQuantity:0,
};
const CartSlice= createSlice({
    initialState,
    name:'cart',
    reducers:{
        setOpenCart:(state,action)=>{
            state.cartState=action.payload.cartState
        },
        setCloseCart: (state,action)=>{
            state.cartState=action.payload.cartState
        },
        setAddItemToCart: (state, action)=>{
            const itemIndex= state.cartItems.findIndex((item)=>item.id===action.payload.id)
            if (itemIndex>=0){
              state.cartItems[itemIndex].cartQty+=1 
              toast.success('item QTY increased')
            }else{
                const temp={...action.payload, cartQty:1}
            state.cartItems.push(temp) 
            toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart:(state, action)=>{
            const removeItem=state.cartItems.filter((item)=>item.id!==action.payload.id);
            state.cartItems=removeItem
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} Removed From Cart`)
        },
        setIncreaseitemQty:(state,action)=>{
            const itemIndex= state.cartItems.findIndex((item)=>item.id===action.payload.id)
            if (itemIndex>=0){
              state.cartItems[itemIndex].cartQty+=1 
              toast.success('item QTY increased')
            }  
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseitemQty:(state,action)=>{
            const itemIndex= state.cartItems.findIndex((item)=>item.id===action.payload.id)
            if (state.cartItems[itemIndex].cartQty>1){
              state.cartItems[itemIndex].cartQty-=1 
              toast.success('item QTY Decreased')
            }  
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setClearCartitemQty:(state,action)=>{
            state.cartItems=[]
            toast.success('Cart cleared')
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setGetTotals:(state,action)=>{
          let {totalAmount,totalQty}= state.cartItems.reduce((cartTotal,cartItem)=>{
           const{price,cartQty}=cartItem;
           const totalPrice =price * cartQty
           
           cartTotal.totalAmount += totalPrice
           cartTotal.totalQty += cartQty

           return cartTotal;
          },{
                totalAmount:0,
                totalQty:0
            });
            state.cartTotalAmount=totalAmount;
            state.cartTotalQuantity=totalQty;
        }
      
    }

})
export const {setOpenCart, setCloseCart,setAddItemToCart,
    setRemoveItemFromCart,setClearCartitemQty,setDecreaseitemQty,
    setIncreaseitemQty,setGetTotals}=CartSlice.actions;

    
export const selectCartState=(state)=> state.cart.cartState;
export const selectCartItem=(state)=> state.cart.cartItems;

export const selectTotalAmount=(state)=>state.cart.cartTotalAmount;
export const selectTotalQuantity=(state)=>state.cart.cartTotalQuantity;

export default CartSlice.reducer