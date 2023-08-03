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
    // const data = {
    //     "error": false,
    //     "user": {
    //         "_id": "642e3c804b1e295808f712de",
    //         "name": "aaa",
    //         "email": "aaa@gmail.com",
    //         "password": "$2a$10$hPEklzBwQTVPhv4N7v2j4eWuDd7J/6dd8Dcd91SaQ1wrOywq4CIl.",
    //         "role": 100,
    //         "__v": 0
    //     }
    // }
    setLoginLocal(true, data);
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
        restoreStatusLogin: (state, action) => {
            state.currentUser = { ...action.payload.loginData };
            state.isLoggedIn = true;
            state.error = false;
            state.isRestoreStatus = true;
        },
        logoutUser: (state, action) => {
            state.isLoggedIn = false;
            state.isRestoreStatus = false;
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

export const { restoreStatusLogin, logoutUser } = loginSlice.actions
export default loginSlice.reducer