import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../config/colors'

const window = Dimensions.get("window")
const NotificationScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.imageButton} />
                <View style={styles.headerMiddle}>
                    <Text style={styles.headerText}>Profile</Text>
                </View>
                <View style={styles.imageButton} />
            </View>

            <View style={styles.content}>
                <Image source={require('../asset/no-notification.png')} resizeMode='contain' />
                <Text style={styles.message}>You don't have notification</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Go back home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white_bg,
        flex: 1,
        marginBottom: window.height * 0.09
    },

    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    message: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 16,
        marginVertical: 10
    },

    button: {
        height: 48,
        backgroundColor: colors.green,
        justifyContent: 'center',
        borderRadius: 6
    },
    
    textButton: {
        color: colors.white_bg,
        fontSize: 16,
        fontWeight: '700',
        paddingHorizontal: 20
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
})