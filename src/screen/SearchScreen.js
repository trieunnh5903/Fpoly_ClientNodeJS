import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import SearchBox from '../component/SearchBox'
import colors from '../config/colors'
import SPACING from '../config/spacing'
import ListProductSearch from '../component/ListProductSearch'

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flexView}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("BottomTab", { screen: 'Home' })}>
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
        <ScrollView style={styles.scrollView}>
          <SearchBox value={searchTerm} onChangeText={setSearchTerm}/>
          <ListProductSearch/>
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
    flex:1
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
})