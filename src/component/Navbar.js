import React from 'react'
import logo from '../assets/logo.png'
import {useState,useEffect} from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useDispatch,useSelector } from 'react-redux'
import { selectTotalQuantity, setOpenCart, } from '../app/Cartslice'

const Navbar = () => {
  const [nav, setnav] = useState(false)
  const dispatch= useDispatch()
  const totalQty= useSelector(selectTotalQuantity);
  // const totalQty= useSelector(selectTotalQuantity);


  const onCartToggle=()=>{
    dispatch(setOpenCart(
     { cartState: true}
    ))
  }

    
    const handlescroll=()=>{
       if (window.scrollY>30){
        setnav(true)
       }else{setnav(false)}
    }
       useEffect(() => {
         window.addEventListener('scroll',handlescroll)
       
         return () => {
           window.removeEventListener('scroll', handlescroll)
         }
       }, [])
       
    
  return (
   <>
   <header className={!nav?'absolute top-7 left-0 right-0 opacity-100 z-50':'fixed top-0 left-0 right-0 opacity-100 z-[200] backdrop-blur-xl h-14 flex items-center'} >
    <nav className='flex items-center justify-between nike-container'>
        <div className="flex items-center" ><img src={logo} alt="logo/img" className={`w-16 h-auto ${nav &&'filter brightness-0'}`} /></div>
        <ul className='flex items-center gap-2 justify-center'>
            <li><MagnifyingGlassIcon className={`icon-style  ${nav && 'text-slate-900 transition-all duration-300'}`}/> </li>
            <li><HeartIcon className={`icon-style ${nav && 'text-slate-900 transition-all duration-300'}`}/> </li>
            <li><button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                <ShoppingBagIcon className={`icon-style  ${nav && 'text-slate-900 transition-all duration-300'}`}/>
            <div className={`absolute top-4 right-1 shadow w-4 h-4 text-[0.65rem] 
            leading-tight font-medium rounded-full flex items-center justify-center 
            cursor-pointer hover:scale-110 transition-all duration-300 
            ${nav?'bg-slate-900 text-slate-100 shadow-slate-900':'bg-slate-100 text-slate-900 shadow-slate-100' }`}>{totalQty}</div> 
            </button>
             </li>
        </ul>
    </nav>
   </header>
   </>
  )
}

export default Navbar