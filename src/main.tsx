import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";
import './index.css'
import { syncCats  } from '@/valtio'
syncCats()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />

      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
