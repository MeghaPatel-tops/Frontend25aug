import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export const addCategory= createAsyncThunk('addCategory',async(data)=>{
  try {
     const doc = collection(db,'category');
     const res = await addDoc(doc,data);
     if(res){
        const result={
            msg:"Category Created",
        }
        return result;
     }
  } catch (error) {
     return error
  }
})

export const getCategory = createAsyncThunk('getCategory',async()=>{
    try {
        const doc = collection(db,'category');
        const snapShort = await getDocs(doc);
        let arrayCat =[];
        snapShort.forEach((doc)=>{
            arrayCat.push({...doc.data(),id:doc.id})
        })
        console.log("catdata",arrayCat);
        return arrayCat;
        
    } catch (error) {
        console.log(error);
        return error
    }
})

const CategorySlice = createSlice({
    name:'category',
    initialState:{
        singleCat:null,
        isloading:false,
        catArray:[],
        catMsg:null,
        catError:null
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(addCategory.pending,(state,action)=>{
              state.isloading=true;
        })
        .addCase(addCategory.fulfilled,(state,action)=>{
             state.isloading=false;
            state.catMsg=action.payload.msg;
        })
        .addCase(addCategory.rejected,(state,action)=>{
            state.error=action.payload
        })
         builder.addCase(getCategory.pending,(state,action)=>{
              state.isloading=true;
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
             state.isloading=false;
            state.catArray=action.payload;
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.error=action.payload
        })
    }
})

const CategoryRedcuer = CategorySlice.reducer;
export default CategoryRedcuer;