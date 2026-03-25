import { configureStore } from "@reduxjs/toolkit";
import CategoryRedcuer from "./Category";

export const store = configureStore({
    reducer:{
        'category':CategoryRedcuer
    }
})