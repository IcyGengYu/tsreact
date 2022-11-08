import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
// import { shallowEqualApp, useAppDispatch, useAppSelector } from './hooks'
import routes from './router'
// import { changeMessageAction } from './store/modules/counter'
// import Demo from './views/demo/demo02'

function App() {
  // const { count, message } = useAppSelector(
  //   (state) => state.counter,
  //   shallowEqualApp
  // )

  // const dispatch = useAppDispatch()
  // function handleChangeMessage() {
  //   dispatch(changeMessageAction('哈哈哈'))
  // }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)} </div>
      </Suspense>
      <AppFooter />
      {/* <Demo name="why" age={18}></Demo> */}
      {/* <button onClick={handleChangeMessage}>修改message</button> */}
      {/* <div>{count}</div>
      <div>message:{message}</div> */}
    </div>
  )
}

export default App
