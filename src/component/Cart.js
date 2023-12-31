import React, { useEffect } from 'react'
import Cartcount from './cart/Cartcount'
import Cartempty from './cart/Cartempty'
import Cartitem from './cart/Cartitem'
import { useDispatch,useSelector } from 'react-redux'
import { selectCartItem, selectCartState,setCloseCart,setClearCartitemQty, setGetTotals, selectTotalAmount, selectTotalQuantity } from '../app/Cartslice.js'

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState= useSelector(selectCartState);
  const cartItems= useSelector(selectCartItem);
  const totalAmount= useSelector(selectTotalAmount);
  const totalQty= useSelector(selectTotalQuantity);
 
  console.log(cartItems)

  useEffect(() => {
   dispatch(setGetTotals())
  }, [cartItems,dispatch])
  

  const onCartToggle=()=>{
    dispatch(setCloseCart(
     { cartState: false}
    ))
  }

  const onClearCartItem=()=>{
    dispatch(setClearCartitemQty())
  }
  

  return (
    <>
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-full blur-effect-theme h-screen opacity-100 z-[300] 
    ${ifCartState? 'opacity-100 visible translate-x-0':'opacity-0 translate-x-8 invisible '} `}>
        <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
            <Cartcount onCartToggle={onCartToggle} totalQty={totalQty}  onClearCartItem={onClearCartItem} />
            {cartItems?.length === 0? <Cartempty onCartToggle={onCartToggle} />:<div> 
              <div className='flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3'>
                {cartItems.map((items,i)=>( <Cartitem item={items} key={i}/>))}
                </div>
                <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                  <div className="flex items-center justify-between">
                    <h1 className='text-base font-semibold'>SUB TOTAL</h1>
                    <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>${totalAmount} </h1>
                  </div>
                  <div className="grid items-center gap-2">
                    <p className='text-sm font-medium text-center'>Taxes and Shipping will calculate at shipping</p>
                    <button type="button" className='button-theme bg-theme-cart text-white'>Check Out</button>
                  </div>
                </div>
              </div> }
           
        </div>
    </div>
    </>
  )
}

export default Cart