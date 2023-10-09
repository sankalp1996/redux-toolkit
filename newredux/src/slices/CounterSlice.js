import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = 0;
const CounterSlice = createSlice({
    name:"counter",
    initialState:initialState,
    reducers:{
      doIncrement(state,action) {

      return state += action.payload; 
      },
      doDecrement(state,action) {
      return state -= action.payload
      },

    }

})

// console.log("reducers->",CounterSlice.actions)
export const {doIncrement,doDecrement} = CounterSlice.actions;
export default CounterSlice;
