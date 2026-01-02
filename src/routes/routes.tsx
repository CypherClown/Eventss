import React from 'react'
import Home from '../pages/Home.jsx'
import Events from '../pages/Events.jsx'
import Feed from '../pages/Feed.jsx'
import Username from '../pages/Username.jsx'

interface RouteConfig {
  path: string
  element: React.ReactElement
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/events',
    element: <Events />
  },
  {
    path: '/feed',
    element: <Feed />
  },
  {
    path: '/username',
    element: <Username />
  }
]