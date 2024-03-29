import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useAppContext } from '../App'

const ListProductOrder = ({ products = [] }) => {
    const { addProductToCart, removeProductFromCart } = useAppContext();

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    resizeMode='contain'
                    source={{uri: item.image}} />
                <View style={styles.itemBody}>
                    <View style={styles.textHeader}>
                        <Text style={styles.name}>{item.name}</Text>
                       
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.priceView}>
                            <Text style={styles.price}>${item.price}</Text>
                            <Text> /kg </Text>
                        </Text>
                        <View style={styles.groupAction}>
                            <TouchableOpacity onPress={() => removeProductFromCart(item)}>
                                <Image source={require('../asset/ic-remove.png')} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{item.quantity || 1}</Text>
                            <TouchableOpacity onPress={() => addProductToCart(item)}>
                                <Image source={require('../asset/ic-add.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            contentContainerStyle={styles.list}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.hr}></View>}
            renderItem={renderItem}
            data={products} />

    )
}

export default ListProductOrder

const styles = StyleSheet.create({
    list: {
        paddingVertical: 14
    },

    container: {
        flexDirection: 'row',
        flex: 1
    },

    price: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000'
    },
    priceView: {
        fontSize: 12,
        color: '#A1A1A1',
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000000'
    },

    category: {
        fontSize: 9,
        marginTop: 6,
        color: '#000000'
    },

    itemBody: {
        flex: 1,
    },

    textHeader: {
        flex: 1
    },

    groupAction: {
        flexDirection: 'row'
    },
    hr: {
        height: 18
    },
    quantity: {
        fontSize: 13,
        paddingHorizontal: 8,
        color: '#000000'
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        height: 80,
        width: '40%'
    }
})