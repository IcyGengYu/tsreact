// import Discover from '@/views/discover'

import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))
const Download = lazy(() => import('@/views/download'))

// discover cviews
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Toplist = lazy(() => import('@/views/discover/c-views/toplist'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))

const Album = lazy(() => import('@/views/discover/c-views/album'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/toplist',
        element: <Toplist />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]
export default routes
