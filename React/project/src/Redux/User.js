import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "../Firebase/firebase"
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";


export const userRegistration = createAsyncThunk('userRegistration' , async(data)=>{
    try{
        const doc= collection(db,'user')
        const res = await addDoc(doc,data);
      const result={
        userMsg:"user added",
      }
      return result;
    }catch(error){
        return error;
    }
})
export const  UserSlice=createSlice({
    name:'users',
    initialState:{
        singleUser:{},
        userError:null,
        isLoading:false,
        userMsg:''
    } 
    ,
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(userRegistration.pending, (state, action) => {
            state.isLoading = true;
        })
            .addCase(userRegistration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userMsg = action.payload.msg;
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.userError = action.payload
            })
    }
})
const UserReducer=UserSlice.reducer
export default UserReducer