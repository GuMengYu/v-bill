import { configureStore } from "@reduxjs/toolkit";
import counter from './counter'
import app from './app'
export default configureStore({
    reducer: {
        counter,
        app,
    }
})