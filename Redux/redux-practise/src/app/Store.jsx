import { configureStore } from '@reduxjs/toolkit'
import { Counter } from '../Features/CounterSlice'

export const store = configureStore({
  reducer: {
    counterkey : Counter.reducer
  },
})
