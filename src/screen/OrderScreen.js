import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import ListProductOrder from '../component/ListProductOrder'
import { useNavigation } from '@react-navigation/native'
import { useAppContext } from "../App";

const sumPrice = (products) => {
    return products.reduce((sum, item) => {
        return (
            sum + parseFloat(item.quantity) * parseFloat((item.pricePerKg).replace('$', ''))
        );
    }, 0);
};
const OrderScreen = () => {
    const navigation = useNavigation();
    const { products } = useAppContext();
    const totalPrice = (sumPrice(products) + 2.44).toFixed(2);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.flexView}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image
                            style={styles.imageButton}
                            source={require('../asset/ic-back.png')} />
                    </TouchableOpacity>
                    <View style={styles.headerMiddle}>
                        <Text style={styles.headerText}>Cart</Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            style={styles.imageButton}
                            source={require('../asset/ic-close.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false} >
                    <Text style={styles.title}>Your order</Text>
                    <ListProductOrder products={products} />
                </ScrollView>
                <View style={styles.line1} />
                <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View style={styles.row}>
                        <Text style={styles.text1}>Delivery</Text>
                        <Text style={styles.text1}>$2.44</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.row}>
                        <Text style={styles.text2}>TOTAL</Text>
                        <Text style={styles.text2}>${totalPrice}</Text>
                    </View>
                    <TouchableOpacity style={styles.btnCheckOut}>
                        <Text style={styles.txtCheckOut}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    line1: {
        height: 14,
        backgroundColor: '#F8F8F8',
        width: '100%',
        marginBottom: 20
    },
    txtCheckOut: {
        fontSize: 15,
        color: '#FFFFFF'
    },
    btnCheckOut: {
        backgroundColor: '#26E698',
        padding: 14,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10

    },

    line: {
        width: '100%',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#959595',
        marginVertical: 20
    },
    text1: {
        fontSize: 11,
        color: '#959595'
    },

    text2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1F1F1F'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: colors.white_bg,
    },
    scrollView: {
        flex: 1,
        padding: 16
    },
    flexView: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16
    },

    imageButton: {
        width: 36,
        height: 36,
    },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    headerMiddle: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#121212',
        marginTop: 27
    }
})