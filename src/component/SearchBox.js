import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SPACING from '../config/spacing'

const SearchBox = ({ value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../asset/ic-search.png')} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                placeholder='Search your course'></TextInput>
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f8f8f8",
        flexDirection: 'row',
        borderRadius: 80,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        alignItems: 'center',
        marginVertical: SPACING
    },

    icon: {
        margin: 14
    }
    , input: {
        flex: 1,
    }
})