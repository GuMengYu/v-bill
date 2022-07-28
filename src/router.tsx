import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/explore',
    element: <Explore />,
  },
]

const Router = () => {
  const element = useRoutes(routes)
  return <> { element } </>
}

export default Router
