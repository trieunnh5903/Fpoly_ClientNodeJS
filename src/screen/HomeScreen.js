import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppHeader from '../component/AppHeader'
import colors from '../config/colors'
import Carousel from '../component/Crousel'
import ListCategory from '../component/ListCategory'
import ListBestSeller from '../component/ListBestSeller'
import { useProduct } from '../hooks/useProduct'
import { useCategory } from '../hooks/useCategory'

const window = Dimensions.get('window')
const HomeScreen = () => {
    const [products, isLoading, fetchProducts] = useProduct();
    const categoryList = useCategory();
    const [type, setType] = useState("Vegetable");
    // useEffect(() => {
    //     fetchProducts(type);   
    // }, [type])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#FDFDFD"} barStyle='dark-content' />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <AppHeader />
                <View style={styles.searchContainer}>
                    <Image source={require('../asset/ic-search.png')} />
                    <Text style={styles.searchText}>Seach buy item name</Text>
                </View>
                <Carousel />
                {
                    categoryList.length > 0 &&
                    (<ListCategory categories={categoryList} onChange={setType} currentType={type} />)
                }
                {
                    isLoading ? (
                        <ActivityIndicator style={styles.isLoading} />
                    ) : (
                        <ListBestSeller products={products} />
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white_bg,
        marginBottom: window.height * 0.09
    },
    searchText: {
        fontSize: 12,
        color: colors.gray,
        marginLeft: 6,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: "#f8f8f8",
        borderRadius: 100,
        marginVertical: 14

    },
    scrollView: {
        padding: 14
    },
    isLoading: {
        margin: 18
    }
})