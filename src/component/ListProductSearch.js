import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { useAppContext } from '../App';
import SPACING from '../config/spacing';

const ProductItem = (props) => {
    const window = useWindowDimensions();
    const ITEM_SIZE = (window.width - 2 * SPACING - SPACING - 4 * 3) / 2;
    const PADDING_INNER = 10;
    const { addProductToCart } = useAppContext()
    return (
        <View style={[{
            width: ITEM_SIZE,
            marginRight: props.index % 2 == 0 ? 14 : 0,
            padding: PADDING_INNER,
            borderRadius: 10,
            margin: 3
        },
        styles.itemContainer]}>
            <Image source={{uri: props.image}}
                resizeMode='cover'
                style={{
                    width: ITEM_SIZE - 2 * PADDING_INNER,
                    height: (ITEM_SIZE - 2 * PADDING_INNER) * (107 / 144),
                }} />
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.type}>{props.category.name}</Text>
            <View style={styles.bottom}>
                <Text style={styles.priceView}>
                    <Text style={styles.name}>{props.price}</Text>
                    <Text>/Kg</Text>
                </Text>
                <TouchableOpacity
                    onPress={() => {
                        addProductToCart(props);
                        ToastAndroid.show(`Add ${props.name} to cart success!`, ToastAndroid.SHORT);
                    }} >
                    <Image source={require('../asset/ic-add.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const ListProductSearch = ({ products }) => {
    const renderItem = ({ item, index }) => <ProductItem index={index} {...item} />
    return (
        <>
            <FlatList
                numColumns={2}
                key={2}
                scrollEnabled={false}
                data={products}
                contentContainerStyle={{ paddingBottom: 10 }}
                ItemSeparatorComponent={() => <View style={{ marginTop: 14 - 6 }}></View>}
                renderItem={renderItem} />
        </>
    )
}

export default ListProductSearch

const styles = StyleSheet.create({
    name: {
        marginTop: 5,
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
   
})