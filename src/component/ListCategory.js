import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const CATEGOTIES = [
    { id: '1', name: 'Vegetable', image: require('../asset/vegetable.png') },
    { id: '2', name: 'Fruit', image: require('../asset/fruit.png') },
    { id: '3', name: 'Dairy', image: require('../asset/dairy.png') },
    { id: '4', name: 'Meats', image: require('../asset/meats.png') },

]
const ListCategory = ({onChange, currentType, categories}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
            {categories.map((item, index) => {
                return (
                    <TouchableOpacity
                        onPress={() => onChange(item.name)}
                        key={item.id} 
                        style={[styles.item,
                            currentType == item.name && {backgroundColor: '#16C07B'}]}>
                        <Image source={item.image} resizeMode='contain' />
                        <Text style={[styles.name,
                          currentType == item.name && {color: 'white'}]}>{item.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default ListCategory

const styles = StyleSheet.create({
    name: {
        fontSize: 12,
        color: colors.gray,
        marginLeft: 8
    },
    item: {
        backgroundColor: "#F8F8F8",
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 36,
        marginRight: 14
    }
})