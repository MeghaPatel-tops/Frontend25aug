import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";




export const addTOCart = createAsyncThunk('addTOCart', async (data) => {
    try {
        const doc = collection(db, 'cart');
        const res = await addDoc(doc, data);
        if (res) {
            const result = {
                msg: "Item added in cart",
            }
            return result;
        }
    } catch (error) {
        return error
    }
})

// export const getCategory = createAsyncThunk('getCategory', async () => {
//     try {
//         const doc = collection(db, 'category');
//         const snapShort = await getDocs(doc);
//         let arrayCat = [];
//         snapShort.forEach((doc) => {
//             arrayCat.push({ ...doc.data(), id: doc.id })
//         })
       
//         return arrayCat;

//     } catch (error) {
//         console.log(error);
//         return error
//     }
// })

// export const deleteCategory = createAsyncThunk('deleteCategory', async (cid) => {
//     try {
//         console.log(cid);
//         const docRef = doc(db, 'category', cid);
//         const res = await deleteDoc(docRef);
//         const result = {msg: "Category Deleted",}
//         return result;
//     } catch (error) {
//         return error
//         console.log(error);
//     }
// })

// export const getCatById = createAsyncThunk('getCatById',async(cid)=>{
//     try {
//         const docRef = doc(db, 'category', cid);
//         const res = await getDoc(docRef);
//         return res.data();
        
//     } catch (error) {
//         return error
//     }
// })


// export const updateCategory = createAsyncThunk('updateCategory',async(obj)=>{
//     try {
//          const docRef = doc(db, 'category', obj.cid);
//          const res = await updateDoc(docRef,obj.data);
         
//             const result = {
//                 msg: "Category updated",
//             }
//             return result;
        
//     } catch (error) {
//         return error
//     }
// })


const CartSlice = createSlice({
    name: 'category',
    initialState: {
          cartMsg:null,
          cartError:null,
          singleCartItem:{},
          cartData:[],
          cartloading:false
          
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(addTOCart.pending, (state, action) => {
            state.cartloading = true;
        })
            .addCase(addTOCart.fulfilled, (state, action) => {
                state.cartloading = false;
                state.cartMsg = action.payload.msg;
            })
            .addCase(addTOCart.rejected, (state, action) => {
                state.cartError = action.payload
            })
            
            
    }
})

const CartRedcuer = CartSlice.reducer;
export default CartRedcuer;