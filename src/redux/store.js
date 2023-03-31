import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducer/loginSlice";
const store = configureStore({
    reducer: {
        login: loginSlice,
    },
})

export default store