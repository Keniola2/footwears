import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice.js";

const Store= configureStore({
    reducer:{
        cart:Cartslice
    }
})

export default Store;