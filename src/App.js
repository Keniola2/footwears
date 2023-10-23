
import React from 'react';
import Hero from './component/Hero';
import { heroapi } from './data/data.js';
import Sales from './component/Sales';
import { popularsales,topratesales,sneaker,highlight,story,footerAPI} from './data/data.js';
import FlexContent from './component/FlexContent';
import Story from './component/Story';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Cart from './component/Cart'

function App() {
  return (
   <>
   <main className='flex flex-col gap-16 relative'>
    <Cart/>
    <Navbar/>
    <Hero heroapi={heroapi}/>
    <Sales endpoint={popularsales} ifExists/>
    <FlexContent endpoint={highlight} ifExists />
     <Sales endpoint={topratesales}/>
     <FlexContent endpoint={sneaker} />
     <Story story= {story}/>
    <Footer footerApi={footerAPI}/>
   </main>
   </>
  );
}

export default App;
