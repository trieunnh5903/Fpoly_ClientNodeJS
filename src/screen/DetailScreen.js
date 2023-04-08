import React, { useState, useEffect } from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import IP from '../config/ip';

const w = Dimensions.get('screen').width;

const DetailScreen = ({ route }) => {
    const { productId } = route.params;
    // console.log("productId : "+ productId);
    const navigation = useNavigation();
    const onBack = () => navigation.navigate("BottomTab", {screen: 'Home'});
    const [product, setProduct] = useState({});
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://${IP}:3000/api/product?id=${productId}`);
            setProduct(response.data);
            // console.log(JSON.stringify(response.data));
        } catch (error) {
            console.error("fetchProduct: " + error);
        }
    }
    useEffect(() => {
        fetchProduct();
    }, [productId])
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.image}>
                    {
                        product.image != null ? (<Image
                            style={{ flex: 1}}
                            resizeMode='cover'
                            source={{ uri: product.image }}
                        />) : (
                            <Image
                                // style={styles.image}
                                style={{ flex: 1 }}
                                resizeMode='cover'
                                source={{ uri: "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }}
                            />
                        )
                    }
                </View>
                <View style={styles.header}>
                    <Pressable onPress={onBack}>
                        <Image source={require('../asset/ic-back.png')} />
                    </Pressable>
                    <Pressable style={styles.buttonHeart}>
                        <Image
                            source={require('../asset/heart.png')}
                            style={styles.iconHeart}
                            resizeMode="contain"
                        />
                    </Pressable>
                </View>
                <View
                    style={{
                        paddingTop: (w * 121) / 195 - 30,
                        // flex: 1,
                        paddingHorizontal: 20,
                        paddingBottom: 56,
                    }}>

                    <View>
                        <View style={styles.box}>
                            <View style={styles.boxInfo}>
                                <Text style={styles.titleItem}>{product.name}</Text>
                                <View style={styles.starCon}>
                                    {Array(5)
                                        .fill(0)
                                        .map((item, index) => (
                                            <Image
                                                key={index}
                                                style={styles.star}
                                                source={require('../asset/star.png')}
                                            />
                                        ))}
                                </View>
                                <View style={styles.footerCard}>
                                    <View style={styles.footerItem}>
                                        {
                                            product.category != null ? (
                                                <Text style={styles.footerItemText}>{product.category.name}</Text>
                                            ) : (
                                                <Text style={styles.footerItemText}>Fruits</Text>
                                            )
                                        }

                                    </View>
                                    <Text style={[styles.footerItemText, { marginLeft: 10 }]}>${product.price}</Text>
                                </View>
                            </View>
                            <View style={styles.groupAction}>
                                {/* onPress={() => removeProductFromCart(item)} */}
                                <TouchableOpacity>
                                    <Image source={require('../asset/ic-remove.png')} />
                                </TouchableOpacity>
                                <Text style={styles.quantity}>{1}</Text>
                                {/* onPress={() => addProductToCart(item)} */}
                                <TouchableOpacity >
                                    <Image source={require('../asset/ic-add.png')} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <View>
                        <Text style={[styles.title, { color: colors.black }]}>
                            Descriptions
                        </Text>
                        <Text style={styles.text}>
                            Apple Mountain works as a seller for many apple growers of apple. apple are easy to spot in your produce aisle. They are just like regular apple, but they will usually have a few more scars on...
                            <Text style={{ color: colors.green }}> ReadMore</Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <Pressable style={styles.buttonAddToCart}>
                <MaterialCommunityIcons name={'cart'} size={20} color={colors.white_bg} />
                <Text style={styles.textAddtoCart}>Add to cart</Text>
            </Pressable>
        </View>

    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 45,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        zIndex: 9999,
    },
    titleItem: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '700',
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonAddToCart: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: colors.green,
        height: 48,
        borderRadius: 3,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20
    },

    textAddtoCart: {
        color: colors.white_bg,
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10
    },

    quantity: {
        fontSize: 13,
        paddingHorizontal: 8,
        color: '#000000'
    },

    groupAction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },

    boxInfo: {
        paddingLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%'
    },

    box: {
        padding: 20,
        // flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    starCon: {
        flexDirection: 'row',
        marginVertical: 9,
    },
    star: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerItemText: {
        fontSize: 14,
        color: colors.black,
        fontWeight: '700',
    },
    iconHeart: {
        tintColor: 'black'
    },
    buttonHeart: {
        // position: 'absolute',
        // right: 15,
        // top: 1,
        backgroundColor: '#F7F7F7',
        padding: 10,
        borderRadius: 100,
    },
    image: {
        width: w,
        height: (w * 121) / 195,
        position: 'absolute',
        top: 0,
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.5
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 10,
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        marginVertical: 8,
    },
    desc: {
        color: 'gray',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    itemImg: {
        width: w / 3,
        height: w / 3,
        borderRadius: 20,
    },
    item: {
        paddingRight: 15,
        paddingVertical: 10,
        marginRight: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        lineHeight: 25,
    },
});
