import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./slice";

const store = configureStore({
    reducer:{
        product: productReducer
    }
})

export {
    store
}