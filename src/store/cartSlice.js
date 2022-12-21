import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[];
console.log(cartItems);
//const initialState={
    

const initialState={cartItems:[cartItems]};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){

          // state.push(action.payload);
        },
        remove(state,action){
           return state=state.filter(item=>item.id!==action.payload)
            //state.remove(action.id);
        },
    }
})

export const {add,remove}=cartSlice.actions;
export default cartSlice.reducer;