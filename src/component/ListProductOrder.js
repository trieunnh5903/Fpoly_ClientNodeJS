import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ListProductOrder = () => {
    const renderItem = ({item}) => {
        return(
            <View style={styles.container}>
            <Image
                style={styles.img}
                resizeMode='contain'
                source={require('../asset/fresh-broccoli-vegetable.png')} />
            <View style={styles.itemBody}>
                <View style={styles.textHeader}>
                    <Text style={styles.name}>Fresh Broccoli Vegetable</Text>
                    <Text style={styles.category}>Vegetable</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.priceView}>
                        <Text style={styles.price}>$5.66</Text>
                        <Text> /kg </Text>
                    </Text>
                    <View style={styles.groupAction}>
                        <TouchableOpacity>
                            <Image source={require('../asset/ic-remove.png')} />
                        </TouchableOpacity>
                        <Text style={styles.quantity}>2</Text>
                        <TouchableOpacity>
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
            data={[1,2,3,4,5,6,7,8,9]}/>

    )
}

export default ListProductOrder

const styles = StyleSheet.create({
    list: {
        paddingVertical: 14
    },
    
    container: {
        flexDirection: 'row'
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
        fontWeight: '500'
    },

    category: {
        fontSize: 9,
        marginTop: 6
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
        paddingHorizontal: 8
    },

    footer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        height: 80
    }
})