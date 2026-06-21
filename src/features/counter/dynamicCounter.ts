import { createSlice } from "@reduxjs/toolkit";
import { increment as counterIncrement } from "./counterSlice";

const initialState = {
    counter: 0,
}

const dynamicCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: any) => {
            state.counter++
        },
        decrement: (state: any) => {
            state.counter--
        }
    },
    extraReducers: (builder) => {
        builder.addCase(counterIncrement, (state) => {
            state.counter++;
        })
    }
})

export default dynamicCounterSlice.reducer;
export const { increment, decrement } = dynamicCounterSlice.actions;