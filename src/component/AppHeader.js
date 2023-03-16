import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const AppHeader = () => {
  return (
    <View>
        <View style={styles.container}>
            <Image source={require('../asset/avatar.png')} style={styles.avatar}/>
            <View style={styles.groupText}>
                <Text style={styles.nameDisplay}>
                    <Text style={styles.bold}>Hi</Text>, <Text>Casey</Text>
                </Text>
                <Text style={styles.desc}>What would you buy today?</Text>
            </View>
            <TouchableOpacity>
                <Image source={require('../asset/ic-checkout.png')}></Image>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
    nameDisplay: {
        fontSize: 16,
    },

    bold: {
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 12,
        color: '#A1A1A1'
    },
    groupText: {
        flex: 1,
        marginLeft: 12
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    avatar: {
        width: 50,
        height: 50
    }
    
})