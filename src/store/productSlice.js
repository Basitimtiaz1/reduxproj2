import { createSlice } from "@reduxjs/toolkit";
const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
})
const initialState={
    data:[],
    status:STATUSES.IDLE,
};
const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        showProduct(state,action){
            
            state.data=action.payload;
        },
        setStatus(state,action){
            state.STATUSES=action.payload;
        },

    }
})
export const {showProduct,setStatus}=productSlice.actions;
export default productSlice.reducer;    

export function fetchProducts(){
    return async function fetchProductsThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING)); 
        try{
           // const res=await fetch('https://fakestoreapi.com/products');
            const res=await fetch('http://localhost:8800/api/items');

            
            const data=await res.json();
            console.log(data);
            dispatch(showProduct(data));
            dispatch(setStatus(STATUSES.IDLE)); 
        }
        catch(err){
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR)); 

        }

    }
}