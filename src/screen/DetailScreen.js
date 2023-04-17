import React, { useState, useEffect } from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import IP from '../config/ip';
import MyStatusBar from '../component/MyStatusBar';

const w = Dimensions.get('screen').width;

const DetailScreen = ({ route }) => {
    const { productId } = route.params;
    // console.log("productId : "+ productId);
    const navigation = useNavigation();
    const onBack = () => navigation.goBack();
    const [product, setProduct] = useState({});
    const fetchProduct = async () => {
        // try {
        //     const response = await axios.get(`http://${IP}:3000/api/product?id=${productId}`);
        //     setProduct(response.data);
        //     // console.log(JSON.stringify(response.data));
        // } catch (error) {
        //     console.error("fetchProduct: " + error);
        // }
        setProduct({
            "_id": "6425584b6805082661fc0bd1",
            "name": "Chinese Fresh Cabbage",
            "price": 5.66,
            "quantity": 2,
            "image": "https://images.unsplash.com/photo-1590759485298-244d7a5737e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "category": {
                "_id": "64238cf6fc13ae1b630003fc",
                "name": "Vegetable",
                "image": "https://firebasestorage.googleapis.com/v0/b/fpolygroceryshop-f4260.appspot.com/o/categories%2Fvegetables.png?alt=media&token=279399a3-2ea0-48f7-87aa-1233101838af"
            },
            "__v": 0
        })
    }
    useEffect(() => {
        fetchProduct();
    }, [productId])
    return (
        <View style={{ flex: 1, backgroundColor: colors.white_bg }} >
            {/* back ground oval */}
            <MyStatusBar />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.bgOval}></View>
                {/*  header */}
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
                {/* image */}
                <View style={styles.imageGroup}>
                    {
                        product.image != null ? (<Image
                            style={styles.image}
                            source={{ uri: product.image }}
                        />) : (
                            <Image
                                style={styles.image}
                                resizeMode='cover'
                                source={{ uri: "https://images.unsplash.com/photo-1558818498-28c1e002b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" }}
                            />
                        )
                    }
                </View>
                {/* infor */}
                <View style={{ marginHorizontal: 20 }}>
                    <View style={styles.flexNameProduct}>
                        <Text style={styles.nameProduct}>{product.name}</Text>
                        <View style={styles.groupAction}>
                            <TouchableOpacity>
                                <Image style={{ width: 24, height: 24 }} resizeMode='cover' source={require('../asset/ic-remove.png')} />
                            </TouchableOpacity>
                            <Text style={styles.quantity}>{1}Kg</Text>
                            <TouchableOpacity >
                                <Image style={{ width: 24, height: 24 }} resizeMode='cover' source={require('../asset/ic-add.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.footerItem}>
                        {
                            product.category != null ?
                                (
                                    <Text style={styles.footerItemText}>{product.category.name}</Text>
                                ) : (
                                    <Text style={styles.footerItemText}>Fruits</Text>
                                )
                        }
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginEnd: 3 }}>5</Text>
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
                        <Text>(89 reviews)</Text>
                    </View>
                    <Text style={[styles.price]}>${product.price}</Text>
                </View>

                {/* Description */}

                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={[styles.title, { color: colors.black }]}>
                        Descriptions
                    </Text>
                    <Text style={styles.text}>
                        Apple Mountain works as a seller for many apple growers of apple. apple are easy to spot in your produce aisle. They are just like regular apple, but they will usually have a few more scars on...
                        <Text style={{ color: colors.green }}> ReadMore</Text>
                    </Text>
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
        paddingTop: 36,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        position: 'relative'
    },

    bgOval: {
        width: w * 1.5,
        aspectRatio: 1,
        backgroundColor: colors.green,
        position: 'absolute',
        borderRadius: w,
        alignSelf: 'center',
        top: - w * 0.8
    },

    nameProduct: {
        width: '60%',
        fontWeight: 700,
        fontSize: 30,
        lineHeight: 40,
        color: colors.black,
    },
    imageGroup: {
        flex: 1, alignItems: 'center', marginTop: 20, marginBottom: 5
    },

    titleItem: {
        color: colors.black,
        fontSize: 20,
        fontWeight: '700',
    },
    footerItem: {

    },

    flexNameProduct: {
        flexDirection: 'row', justifyContent: 'space-between'
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
    },
    star: {
        width: 13,
        height: 13,
        marginRight: 3,
    },
    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerItemText: {
        fontSize: 14,
        color: colors.black,
    },
    price: {
        fontSize: 14,
        color: colors.green,
        fontWeight: 'bold'
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
        width: w * 0.6,
        height: w * 0.6,
        borderRadius: w,
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
