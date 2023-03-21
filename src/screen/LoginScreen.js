import { Pressable, SafeAreaView, StyleSheet, StatusBar, Text, TextInput, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useContext } from 'react'
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../config/colors';
import axios from 'axios';
const LoginScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = async () => {
        try {
            axios.post('http://192.168.1.6:3000/api/user/login', {
                email: userEmail,
                password: userPassword
            })
                .then(function (response) {
                    // xử trí khi thành công
                    console.log(response.data);
                    if (response.data.error == false) {
                        navigation.navigate("Home")
                    }
                })
                .catch(function (error) {
                    // xử trí khi bị lỗi
                    console.log("errpr " + error);
                })
                .finally(function () {
                    // luôn luôn được thực thi
                });
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    // const loginHandler = async () => {
    //     navigation.navigate("Home")
    // }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#FDFDFD"} barStyle='dark-content' />

            <View style={styles.content}>
                <View >
                    <Text style={[styles.textTitle, styles.mb_6]}>Hello</Text>
                    <Text style={[styles.textTitle, styles.colorBlue, styles.mb_6]}>Again!</Text>
                    <Text style={[styles.colorGray, styles.textMessage, styles.mb_30]} >Welcome back you’ve {'\n'}been missed</Text>

                </View>

                <View>
                    <Text style={[styles.size_11, styles.colorGray]}>Username<Text style={{ color: '#FF84B7' }}>*</Text></Text>
                    <TextInput
                        cursorColor={"#3A3B3C"}
                        onChangeText={(newString) => setUserEmail(newString)}
                        style={[styles.textInput, styles.mb_10]}></TextInput>
                </View>

                <View>
                    <Text style={[styles.size_11, styles.colorGray]}>Password<Text style={{ color: '#FF84B7' }}>*</Text></Text>
                    <TextInput
                        cursorColor={"#3A3B3C"}
                        onChangeText={(newString) => setUserPassword(newString)}
                        style={styles.textInput}></TextInput>
                </View>

                <View style={[styles.textForgotPassword, styles.mb_7]}>
                    <View style={styles.textRemenberMe}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColor={{ true: '#66FF99', false: '#66FF99' }}
                            style={[styles.ml__7]}
                        />
                        <Text style={[styles.colorGray, styles.size_11]}>Remember me</Text>
                    </View>
                    <Text style={[styles.size_11, styles.colorBlueDark]}>Forgot the password ?</Text>
                </View>

                <View style={styles.mb_10}>
                    <Pressable style={styles.btnLogin} onPress={loginHandler}>
                        <Text style={[styles.textBtnLogin, styles.colorWhite]}>Login</Text>

                        {/* {isLoading == false ?
                            // <ActivityIndicator size={"small"} color={"#3A3B3C"} />
                        } */}

                    </Pressable>
                </View>

                <View style={styles.mb_10}>
                    <Text style={[styles.colorGray, styles.size_11, styles.textCenter]}>or continue with</Text>
                </View>

                <View style={[styles.centerContentRow, styles.mb_7]}>
                    <FontAwesome.Button

                        style={styles.btnLoginFB}
                        iconStyle={{ color: "#1877F2" }}
                        name={'facebook'} >
                        <Text style={{ fontWeight: 'bold' }}>Facebook</Text>
                    </FontAwesome.Button>

                    <Pressable style={[styles.btnLoginGG, styles.bg_white]}>
                        <Icon style={{ paddingHorizontal: 5 }} name="google" size={20} color="#900" />
                        {/* <Image style={{ marginEnd: 5 }} source={require('./asset/Icon-google.png')}></Image> */}
                        <Text style={{ fontWeight: 'bold' }}>Google</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={[styles.colorGray, styles.size_11, styles.textCenter]}>
                        don’t have an account ? <Text onPress={() => navigation.navigate('Register')} style={[styles.colorBlue, { fontWeight: 'bold' }]}>Sign Up</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDFDFD",
        justifyContent: 'center'
    },
    content: {
        marginHorizontal: 16,
        marginVertical: 20
    },
    textTitle: {
        fontFamily: 'Poppins',
        fontSize: 34,
        fontWeight: '700',
        color: '#3A3B3C'
    },
    textMessage: {
        fontWeight: '400',
        letterSpacing: 0.15,
        lineHeight: 20
    },
    textInput: {
        marginTop: 4,
        backgroundColor: '#f8f8f8',
        borderRadius: 3,
        color: '#3A3B3C'
    },
    textForgotPassword: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    textRemenberMe: {
        flexDirection: 'row', alignItems: 'center'
    },
    btnLogin: {
        //mau xanh
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: '#16C07B',
        height: 48,
        borderRadius: 3,
        justifyContent: 'center',
    },
    textBtnLogin: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnLoginGG: {
        flexBasis: '45%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 7,
        alignItems: 'center',
        borderRadius: 3,
        height: 40
    },
    btnLoginFB: {
        backgroundColor: "#EEF1F4", paddingHorizontal: 25, height: 40
    },
    centerContentRow: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    colorBlue: {
        color: '#16C07B'
    },
    colorBlueDark: {
        color: '#16C07B'
    },

    textCenter: {
        textAlign: 'center'
    },
    mb_6: {
        marginBottom: 6
    },
    mb_7: {
        marginBottom: 7
    },
    colorGray: {
        color: "#3A3B3C"
    },
    colorWhite: {
        color: "#EEF1F4"
    },
    mb_10: {
        marginBottom: 10
    },
    mb_30: {
        marginBottom: 30
    },
    ml__7: {
        marginLeft: -7
    },
    bg_white: {
        backgroundColor: "#EEF1F4"
    },
    size_11: {
        fontSize: 14
    }

})