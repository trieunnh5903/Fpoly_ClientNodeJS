import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import GridProducts from './GridProducts';

const ListBestSeller = ({ products }) => {
    return (
        <View>
            <View>
                <Text style={styles.headerText}>Best Seller</Text>
            </View>
            <GridProducts products={products}/>
        </View>

    )
}

export default ListBestSeller

const styles = StyleSheet.create({
    name: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000000'
    },
    type: {
        fontSize: 12,
        color: colors.gray,
        marginVertical: 8
    },
    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000'
    },
    priceView: {
        fontSize: 12,
        color: colors.gray
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1B1B1B',
        marginVertical: 18
    }
})