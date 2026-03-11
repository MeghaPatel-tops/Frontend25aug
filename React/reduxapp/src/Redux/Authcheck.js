import { createSlice } from "@reduxjs/toolkit";

const AuthcheckSlice = createSlice({
    name:'auth',
    initialState:{isloggedin:0},
    reducers:{
        login:(state)=>{
            state.isloggedin=1
        },
        logout:(state)=>{
            state.isloggedin=0
        }
    }
})

 const  AuthReducer = AuthcheckSlice.reducer;
 export default AuthReducer
export const {login,logout}= AuthcheckSlice.actions