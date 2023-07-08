import { configureStore } from "@reduxjs/toolkit";
import { kartReducer } from "./kart";

const store = configureStore({
    reducer:{
        KartR:kartReducer,
    }
});
export default store;