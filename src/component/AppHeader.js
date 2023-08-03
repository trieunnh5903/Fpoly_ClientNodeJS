import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useAppContext } from '../App';
import { useSelector } from "react-redux";
const AppHeader = () => {
    const navigation = useNavigation();
    const { products } = useAppContext();
    // const userName = useSelector(state => state.login.currentUser.name);
    const { name, avatar } = useSelector(state => state.login.currentUser);
    return (
        <View>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate("Account")}>
                    {
                        avatar ? (
                            <Image source={{ uri: avatar }} style={styles.avatar} />
                        ) : (
                            <Image source={require('../asset/avatar.png')} style={styles.avatar} />
                        )
                    }
                </Pressable>

                <View style={styles.groupText}>
                    <Text style={styles.nameDisplay}>
                        <Text style={styles.bold}>Hi</Text>, <Text>{name}</Text>
                    </Text>
                    <Text style={styles.desc}>What would you buy today?</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Image source={require('../asset/ic-checkout.png')}></Image>
                    {products.length > 0 &&
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>{products.length}</Text>
                        </View>
                    }

                </TouchableOpacity>

            </View>
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    badge: {
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'red',
        width: 20,
        borderRadius: 20,
        right: -5,
        top: -5,
        aspectRatio: 1

    },
    badgeText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    nameDisplay: {
        fontSize: 16,
    },

    bold: {
        fontWeight: 'bold'
    },
    desc: {
        fontSize: 12,
        color: '#A1A1A1'
    },
    groupText: {
        flex: 1,
        marginLeft: 12
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100
    }

})