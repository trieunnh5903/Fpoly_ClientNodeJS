import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyStatusBar = () => {
  return (
    <StatusBar animated={true} translucent backgroundColor="transparent" barStyle={'light-content'} />
  )
}

export default MyStatusBar

const styles = StyleSheet.create({})