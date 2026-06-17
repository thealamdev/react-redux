import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: any) => {
            state.counter++
        },
        decrement: (state: any) => {
            state.counter--
        }
    }
})

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;