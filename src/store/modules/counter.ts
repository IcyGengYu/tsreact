import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number
  message: string
}
const initialState: CounterState = {
  count: 100,
  message: 'hello'
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
