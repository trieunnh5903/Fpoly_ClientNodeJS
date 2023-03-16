import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import AppHeader from './src/component/AppHeader'
import colors from './src/config/colors'
import Carousel from './src/component/Crousel'
import ListCategory from './src/component/ListCategory'
import ListBestSeller from './src/component/ListBestSeller'
import { useProduct } from './src/hooks/useProduct'

const App = () => {
  const [products, isLoading, fetchProducts] = useProduct();
  const [type, setType] = useState("Vegetable");
  useEffect(() => {
    fetchProducts(type);
    console.log('sdhahdk')
    console.log(products)
  }, [type])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#FDFDFD"} barStyle='dark-content' />
      <ScrollView style={styles.scrollView}>
        <AppHeader />
        <View style={styles.searchContainer}>
          <Image source={require('./src/asset/ic-search.png')} />
          <Text style={styles.searchText}>Seach buy item name</Text>
        </View>
        <Carousel />
        <ListCategory onChange={setType} currentType={type} />
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

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_bg,
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