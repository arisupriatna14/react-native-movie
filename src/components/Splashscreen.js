import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native'

export default class Splashscreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'https://www.apigate.com/images/customers/10@2x.png'}}
        />
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backroundColor: '#000',
    justifyContent: 'center',
    height: height
  },
  image: {
    width: '100%',
    height: '100%'
  }
})