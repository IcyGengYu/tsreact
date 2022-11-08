import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import discoverReducer from './modules/discover'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    discover: discoverReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type IYDispatch = typeof store.dispatch

export default store
