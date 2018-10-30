import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'

export default class Swip extends Component {
  render () {
    return(
      <Swiper 
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={2.5}
      >
        <View style={styles.slide1}>
          <Image 
            source={{uri: 'http://www.myiconfinder.com/uploads/iconsets/a2f076131aa05ce038212f83e1950a05.png'}}
            style={styles.image}
          />
          <Text style={styles.text}>Mainkan Game & Dapatkan Kupon</Text>
          <Text style={styles.textDesc}>Dapatkan banyak kupon dengan bermain di Boostspot favoritmu</Text>
        </View>
        <View style={styles.slide2}>
          <Image
            source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/binocular-flat.png'}}
            style={styles.image}
          />
          <Text style={styles.text}>Penawaran Menarik di BoostSpot</Text>
          <Text style={styles.textDesc}>Nikmati berbagai penawaran item menarik di Boostspot terdekat kamu</Text>
        </View>
        <View style={styles.slide3}>
          <Image
            source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/gift-flat.png'}}
            style={styles.image}
          />
          <Text style={styles.text}>Item Terbaik Untuk Teman Spesial</Text>
          <Text style={styles.textDesc}>Share item terbaikmu dengan P2P Gift untuk mereka yang spesial</Text>
        </View>
      </Swiper>
    )
  }
}


const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d81b60'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5c8d'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63'
  },
  text: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textDesc: {
    color: '#FFF',
    textAlign: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    width: 200,
    height: 200
  }
})