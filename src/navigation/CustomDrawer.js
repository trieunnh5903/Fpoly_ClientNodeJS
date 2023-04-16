import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import colors from '../config/colors'

const Drawer = createDrawerNavigator()
const CustomDrawer = () => {
    return (
        <View
            style={styles.container}>
            <Drawer.Navigator useLegacyImplementation>
                <Drawer.Screen name="Feed" component={Feed} />
                <Drawer.Screen name="Article" component={Article} />
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green
    }
})