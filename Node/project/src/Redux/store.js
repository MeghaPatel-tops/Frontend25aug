import { configureStore } from "@reduxjs/toolkit";

import ProductRedcuer from "./Product";
import UserReducer from "./User";
import CartRedcuer from "./Cart";

export const store = configureStore({
    reducer:{
       
        'product':ProductRedcuer,
        'users':UserReducer,
        'cart':CartRedcuer
    }
})