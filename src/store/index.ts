import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // discover: recommendReducer
    recommend: recommendReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type IYDispatch = typeof store.dispatch

export default store
