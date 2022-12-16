import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { ReactNode, Suspense, lazy } from 'react'
import {
  ChooseClassStep1,
  ChooseClassStep2,
  ChooseClassStep3,
} from '@/pages/settings/Classification'
import { fetchFlow } from '@/api'

const App = lazy(() => import('./App'))
const Home = lazy(() => import('./pages/Home'))
const FlowDetail = lazy(() => import('./pages/flow/detail'))
const Analysis = lazy(() => import('./pages/Analysis'))

const Assets = lazy(() => import('./pages/Assets'))
const Setting = lazy(() => import('./pages/settings/Setting'))

const lazyLoad = (component: ReactNode) => {
  return <Suspense>{component}</Suspense>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={lazyLoad(<App />)}>
      <Route path='/home' element={lazyLoad(<Home />)} />
      <Route
        path='/flow/:id'
        element={lazyLoad(<FlowDetail />)}
        loader={async ({ params }) => {
          if (params.id) {
            const { data } = await fetchFlow(params.id)
            return data
          }
        }}
      />
      <Route path='/analysis' element={lazyLoad(<Analysis />)} />
      <Route path='/assets/' element={lazyLoad(<Assets />)} />
      <Route path='/settings' element={lazyLoad(<Setting />)} />
      <Route path='/settings/classification1' element={<ChooseClassStep1 />} />
      <Route path='/settings/classification2' element={<ChooseClassStep2 />} />
      <Route path='/settings/classification3' element={<ChooseClassStep3 />} />
    </Route>
  )
)
export default router
