import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const ListCategory = ({ onChange, currentType, categories }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {categories.map((item, index) => {              
                return (
                    <TouchableOpacity                 
                        onPress={() => onChange(item._id)}
                        key={item._id}
                        style={[styles.item,
                        currentType == item._id && { backgroundColor: '#16C07B' }]}>
                        <Image source={{ uri: item.image }} resizeMode='contain' style={{width: 22, height: 22}} />
                        <Text style={[styles.name,
                        currentType == item._id && { color: 'white' }]}>{item.name}</Text>
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