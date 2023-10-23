import React from 'react'
import emptybag from '../../assets/emptybag.png'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const Cartempty = ({onCartToggle}) => {
  return (
    <>
    <div className="flex items-center justify-center h-screen flex-col px-11 gap-7 text-center" >
        <img src={emptybag} alt="cart/emptybag" className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110'/>
        <button type="button" onClick={onCartToggle} className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg
         shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-2 text-sm px-5 font-semibold active:scale-110'>
            <ArrowLeftIcon className='w-5 h-5 text-slate-900'/>
            <span>Back to Nike store</span>
        </button>
        </div>
    </>
  )
}

export default Cartempty