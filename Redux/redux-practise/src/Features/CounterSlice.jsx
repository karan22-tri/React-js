import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
    name:"Counter",
    initialState :{
        value:0
    },
    reducers:{
        addData:(state,action)=>{
            console.log(action.payload);
            state.value = action.payload
        }
    }

})

export default  Counter.reducer
export const {addData}=Counter.actions;
