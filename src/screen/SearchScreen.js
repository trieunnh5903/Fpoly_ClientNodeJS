import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import SearchBox from '../component/SearchBox'
import colors from '../config/colors'
import SPACING from '../config/spacing'
import ListProductSearch from '../component/ListProductSearch'
import { useProduct } from '../hooks/useProduct'
import axios from 'axios'
import IP from '../config/ip'


const SearchScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setListProducts] = useState([])
  // const [products, isLoading, fetchProducts, resetList] = useProduct();
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();
  //console.log(products);
  const resetSearch = () => {
    setSearchTerm('');
    resetList();
  }
  const resetList = () => setListProducts([])
  const fetchSearch = async (keyword) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`http://${IP}:3000/api/product/search?q=${keyword}`);
      setListProducts(response.data || []);
      setIsLoading(false);
      console.log(products);
    } catch (error) {
      console.error("fetchProduct: " + error);
    }
  }

  let timeOut = null
  const onChangeText = (text) => {
    if (timeOut) { clearTimeout(timeOut) }
    timeOut = setTimeout(() => {
      if (text.length == 0) {
        resetSearch();
      } else {
        // console.log(">>>>>>>>>>>" + text);
        // fetchProducts("", text);
        fetchSearch(text);
        setSearchTerm(text)
        console.log(searchTerm.length);
      }
    }, 500)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexView}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imageButton}
              source={require('../asset/ic-back.png')} />
          </TouchableOpacity>
          <View style={styles.headerMiddle}>
            <Text style={styles.headerText}>Search</Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.imageButton}
              source={require('../asset/ic-close.png')} />
          </TouchableOpacity>
        </View>
        <SearchBox onChangeText={onChangeText} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          {
            isLoading ? (
              <View>
                <ActivityIndicator></ActivityIndicator>
              </View>
            ) : products.length > 0 ? (
              <>
                {searchTerm.length > 0 && <Text style={styles.textFound}>{products.length} Result Found</Text>}
                <ListProductSearch products={products} />
              </>

            ) : (
              <>
                {searchTerm.length > 0 && <Text style={styles.textFound}>Not Found</Text>}
              </>
            )
          }
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_bg
  },

  scrollView: {
    flex: 1
  },

  flexView: {
    flex: 1,
    paddingHorizontal: SPACING,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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

  textFound: {
    fontSize: 11,
    color: '#1B1B1B',

  },
  foundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SPACING
  }
})