import { Route, RouteObject, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { ReactNode, Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Analysis = lazy(() => import("./pages/Analysis"));

const Assets = lazy(() => import("./pages/Assets"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/analysis",
    element: <Analysis />,
  },
  {
    path: "/assets",
    element: <Assets />,
  },
];

const lazyload = (component: ReactNode) => {
  return <Suspense>{component}</Suspense>;
};
const Router = () => {
  const element = useRoutes(routes);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={lazyload(<Home />)} />
        <Route path="/analysis" element={lazyload(<Analysis />)} />
        <Route path="/assets" element={lazyload(<Assets />)} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
