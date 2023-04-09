import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import IP from "../../config/ip";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchLoginThunk = createAsyncThunk('login/fetchLoginThunk', async (thunkParams) => {
    const { email, password } = thunkParams;
    const data = await axios.post(`http://${IP}:3000/api/user/login`, {
        email,
        password
    })
        .then(function (response) {
            console.log("+++++++++++++++" + JSON.stringify(response.data));
            // setLoginLocal(response.data);
            if (!response.data.error) {
                setLoginLocal(true, response.data);
            }
            return response.data
        })
        .catch(function (error) {
            console.log("fetchLoginThunk:  " + error);
        })
    return data;
})

const setLoginLocal = async (isLoggedIn, loginData) => {
    try {
        await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
    } catch (err) {
        console.log("setLoginLocal: " + err);
    }
};

const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoading: false,
        isLoggedIn: false,
        error: false,
        isRestoreStatus: false,
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
        restoreStatusLogin: (state, action) => {
            // console.log("????????????" + JSON.stringify(action.payload.loginData));
            state.currentUser = { ...action.payload.loginData };
            state.isLoggedIn = true;
            state.error = false;
            state.isRestoreStatus = true;
        },
        logoutUser: (state, action) => {
            state.isLoggedIn = false;
            state.isRestoreStatus = false;
            // state.currentUser = null;
            state.error = false;
        }


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
                state.error = false;
            } else {
                state.isLoggedIn = false;
                state.error = true;
            }
        });

        builder.addCase(fetchLoginThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            console.log("fetchLoginThunk rejected");
        });


    },
})

export const { setLoginState, restoreStatusLogin, logoutUser } = loginSlice.actions
export default loginSlice.reducer