import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Categories from '../Components/Categories'

const Home = ({selectedCategoryState}) => {
  return (
    <>
       <Header title='HOME'/> 
       <Categories selectedCategoryState={selectedCategoryState} />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})