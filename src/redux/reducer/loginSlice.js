import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
        email: "",
        password: '',
        token: '',
        name: ''
    },

    reducers: {
        setLoginState: (state, action) => {
            // console.log("????????????" + action.payload.email);
            state.isLoggedIn = true
            state.email = action.payload.email
            state.password = action.payload.password
            state.name = action.payload.name
        },
    }
})

export const { setLoginState } = loginSlice.actions
export default loginSlice.reducer