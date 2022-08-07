import { Route, RouteObject, Routes } from "react-router-dom";
import { useRoutes } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { ReactNode, Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Analysis = lazy(() => import("./pages/Analysis"));

const Assets = lazy(() => import("./pages/Assets"));
const Setting = lazy(() => import("./pages/settings/Setting"));

import {
  ChooseClassStep1,
  ChooseClassStep2,
  ChooseClassStep3,
} from "@/pages/settings/Classification";

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
        <Route path="/settings" element={lazyload(<Setting />)} />
        <Route path="/settings/assets" element={lazyload(<Assets />)} />
        <Route
          path="/settings/classification1"
          element={<ChooseClassStep1 />}
        />
        <Route
          path="/settings/classification2"
          element={<ChooseClassStep2 />}
        />
        <Route
          path="/settings/classification3"
          element={<ChooseClassStep3 />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
