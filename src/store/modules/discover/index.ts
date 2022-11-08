import { createSlice } from '@reduxjs/toolkit'
interface IState {
  name: string
}
const initialState: IState = {
  name: 'discover'
}
const discoverSlice = createSlice({
  name: 'discover',
  initialState,
  reducers: {}
})

export default discoverSlice.reducer
