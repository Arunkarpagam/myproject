import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./routing";
export default configureStore({
    reducer:{
        counter:counterReducer,
    }
})