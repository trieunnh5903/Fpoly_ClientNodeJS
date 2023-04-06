import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import IP from "../../config/ip";

export const fetchLoginThunk = createAsyncThunk('login/fetchLoginThunk', async (thunkParams) => {
    const { email, password } = thunkParams;
    const data = await axios.post(`http://${IP}:3000/api/user/login`, {
        email,
        password
    })
        .then(function (response) {
            console.log("+++++++++++++++" + JSON.stringify(response.data));
            return response.data
        })
        .catch(function (error) {
            console.log("fetchLoginThunk:  " + error);
        })
    return data;
})

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoading: false,
        isLoggedIn: false,
        error: false,
        errorMessage: '',
        currentUser: {},
    },

    reducers: {
        setLoginState: (state, action) => {
            // console.log("????????????" + action.payload.email);
            state.isLoggedIn = true
            state.email = action.payload.email
            state.password = action.payload.password
            state.name = action.payload.name
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchLoginThunk.pending, (state, action) => {
            state.isLoading = true;
            state.isLoggedIn = false;
        });

        builder.addCase(fetchLoginThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            if (!action.payload.error) {
                state.isLoggedIn = true;
                state.currentUser = { ...action.payload };
            } else {
                state.isLoggedIn = false;
                state.error = true;
            }
        });

        builder.addCase(fetchLoginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.errorMessage = "fetchLoginThunk rejected"
        });


    },
})

export const { setLoginState } = loginSlice.actions
export default loginSlice.reducer