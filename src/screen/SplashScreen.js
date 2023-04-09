import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreStatusLogin } from '../redux/reducer/loginSlice';
import colors from '../config/colors';
const SplashScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { isLoggedIn } = useSelector((state) => state.login)

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                let isLoggedIn;
                let loginData;
                const loggedInJson = await AsyncStorage.getItem('isLoggedIn');
                loggedInJson != null ? isLoggedIn = JSON.parse(loggedInJson) : null;

                const loginDataJson = await AsyncStorage.getItem('loginData');
                loginDataJson != null ? loginData = JSON.parse(loginDataJson) : null;

                // console.log(">>>>>>>>>>>>>>: " + isLoggedIn);
                // console.log("<<<<<<<<<<<<<<<: " + JSON.stringify(loginData));
                if (isLoggedIn && loginData) {
                    dispatch(restoreStatusLogin({ isLoggedIn, loginData }));
                }
                // } else {
                //     navigation.navigate("Login");
                // }
            } catch (e) {
                console.log("restore Data login: " + e);
            }
        };

        bootstrapAsync();
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            if (isLoggedIn) {
                navigation.replace("Tabs", { screen: "Home" });
            } else {
                navigation.replace("LoginStack", { screen: "Login" });
            }
        }, 2000);

    }, [isLoggedIn])

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../asset/logo.png")} resizeMode='contain'/>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white_bg
    },
    logo: {
        width: Dimensions.get("window").width * 0.6,
        height: (Dimensions.get("window").width * 0.6) * 178 / 262 
    }
})