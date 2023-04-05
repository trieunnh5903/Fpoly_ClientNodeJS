import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View, ToastAndroid, Pressable } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { useAppContext } from '../App';
import { useNavigation } from '@react-navigation/native';

const ProductItem = (props) => {
    const window = useWindowDimensions();
    const ITEM_SIZE = (window.width - 2 * 14 - 14 - 4 * 3) / 2;
    const { addProductToCart } = useAppContext();
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => {
                navigation.navigate("Stack", { screen: 'Detail', params: { productId: props._id }, })
            }}
            style={[{
                width: ITEM_SIZE,
                marginRight: props.index % 2 == 0 ? 14 : 0,
                padding: 10,
                borderRadius: 10,
                margin: 3
            },
            styles.itemContainer]}>
            <Image source={{ uri: props.image }}
                resizeMode='contain'
                style={{
                    width: ITEM_SIZE - 2 * 10,
                    height: (ITEM_SIZE - 2 * 10) * (107 / 144),
                }} />
            <Text style={styles.name}>{props.name}</Text>
            {/* <Text style={styles.type}>{props.category}</Text> */}
            <View style={styles.bottom}>
                <Text style={styles.priceView}>
                    <Text style={styles.price}>${props.price}</Text>
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
        </Pressable>
    )
}
const ListBestSeller = ({ products }) => {
    const renderItem = ({ item, index }) => <ProductItem index={index} {...item} />
    return (
        <FlatList
            numColumns={2}
            key={2}
            scrollEnabled={false}
            data={products}
            contentContainerStyle={{ paddingBottom: 20 }}
            ItemSeparatorComponent={() => <View style={{ marginTop: 14 - 6 }}></View>}
            renderItem={renderItem} />

    )
}

export default ListBestSeller

const styles = StyleSheet.create({
    name: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8
    },
    type: {
        fontSize: 12,
        color: colors.gray,
        marginVertical: 8
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
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