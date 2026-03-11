import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Counter";
import AuthReducer from "./Authcheck";



const store = configureStore({
    reducer:{
        counter:counterReducer,
        auth:AuthReducer
    }
})

export default store