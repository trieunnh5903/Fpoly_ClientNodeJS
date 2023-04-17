import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Pressable, TouchableOpacity, Image, Switch, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useAppContext } from '../App'
import { launchImageLibrary } from 'react-native-image-picker'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from '../redux/reducer/loginSlice'
import { CommonActions, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const window = Dimensions.get('window');
const AccountScreen = () => {
    const { user: { name, avatar } } = useSelector(state => state.login.currentUser);
    // const [infoUser, setInfoUser] = useState({ avatar: '' })
    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        // console.log(result.assets[0].uri)
        if (!result.didCancel) {
            const formData = new FormData();
            formData.append("image",
                {
                    uri: result.assets[0].uri,
                    type: 'image/jpeg',
                    name: 'image.jpg'
                })
            console.log("+++++++++++++++++" + result.assets[0].uri);
            // setInfoUser({ ...infoUser, avatar: result.assets[0].uri })
        }

        // const response = await AxiosIntance("multipart/form-data").post('/media/upload', formData)
        // if (response.error) {
        //     ToastAndroid.show("Upload failed", ToastAndroid.LONG)
        // } else {
        //     setInfoUser({ ...infoUser, avatar: response.data.path })
        // }   
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleReset = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {name: 'LoginStack'},
                ]
            })
        )
    };
    const handleLogout = async() => {
        dispatch(logoutUser());
        await AsyncStorage.clear();
        handleReset();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.imageButton} />
                <View style={styles.headerMiddle}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <View style={styles.imageButton} />
            </View>
            <View style={{ marginVertical: 10 }}>
                {
                    avatar ? (
                        <View style={[styles.imgProfile]}>
                            <Image source={{ uri: avatar }} resizeMode="contain" style={[
                                styles.imgProfile,
                                { justifyContent: 'flex-end', marginBottom: 10 }]}>

                            </Image>
                            <Pressable onPress={getImageLibrary}>
                                <Image
                                    source={require('../asset/Pick-profile.png')}
                                    resizeMode='contain'
                                    style={{ alignSelf: 'flex-end', position: 'absolute', right: 2, bottom: 4 }}></Image>
                            </Pressable>
                        </View>
                    ) : (
                        <View style={[styles.imgProfile]}>
                            <Image source={require('../asset/avatar.png')} resizeMode="contain" style={[
                                styles.imgProfile,
                                { justifyContent: 'flex-end', marginBottom: 10 }]}>

                            </Image>
                            <Pressable onPress={getImageLibrary}>
                                <Image
                                    source={require('../asset/Pick-profile.png')}
                                    resizeMode='contain'
                                    style={{ alignSelf: 'flex-end', position: 'absolute', right: 2, bottom: 4 }}></Image>
                            </Pressable>
                        </View>
                    )
                }
                <Text style={styles.userName}>{name}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.contentGroup}>
                    <Text style={styles.title}>Account</Text>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons name={'key'} size={25} />
                        <Text style={styles.itemText}>Change Password</Text>
                        <MaterialCommunityIcons name={'chevron-right'} size={25} />
                    </View>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons name={'credit-card'} size={25} />
                        <Text style={styles.itemText}>My Cards</Text>
                        <MaterialCommunityIcons name={'chevron-right'} size={25} />
                    </View>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons name={'map-marker-radius'} size={25} />
                        <Text style={styles.itemText}>My Addresses</Text>
                        <MaterialCommunityIcons name={'chevron-right'} size={25} />
                    </View>
                </View>

                <View style={[styles.contentGroup]}>
                    <Text style={styles.title}>App Setting</Text>
                    <View style={styles.groupItem}>
                        <MaterialCommunityIcons name={'bell-ring'} size={25} />
                        <Text style={styles.itemText}>Notification</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: colors.green }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.groupItem}>
                        <Ionicons name={'md-moon'} size={25} />
                        <Text style={styles.itemText}>Dark Mode</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: colors.green }}
                            thumbColor={'#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <Pressable style={styles.groupItem} onPress={handleLogout}>
                        <MaterialCommunityIcons name={'logout'} size={25} />
                        <Text style={styles.itemText}>Logout</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white_bg,
        flex: 1,

        marginBottom: window.height * 0.09
    },
    contentGroup: {
        marginTop: 20
    },

    userName: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700'
    },

    title: {
        color: colors.green,
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 16,
        letterSpacing: -0.3,
        marginBottom: 5
    },

    itemText: {
        flex: 1,
        marginLeft: 10
    },

    groupItem: {
        flexDirection: 'row',
        paddingVertical: 10
    },

    content: {
        padding: 14
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16
    },

    imageButton: {
        width: 36,
        height: 36,
    },

    headerMiddle: {
        flex: 1,
        alignItems: 'center'
    },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    imgProfile: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 100,
        alignSelf: 'center'
    },
})