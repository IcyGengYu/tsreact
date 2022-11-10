import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'
import Player from './views/player'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)} </div>
      </Suspense>
      <AppFooter />
      {/* 播放工具栏 */}
      <Player />
    </div>
  )
}

export default App
