import React, { Component } from 'react';
import { Text, Alert, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({ ...props }) => {
  return(
    <TouchableOpacity
      style={{
        marginRight: 15,
      }}
      {...props}
    >
      <Text style={{color: '#FFF', fontSize: 16}}>Mulai</Text>
    </TouchableOpacity>
  )
}

export default class Intro extends Component {
  render() {
    return (
      <Onboarding
        DoneButtonComponent={Done}
        onSkip={() => Alert.alert('Skipped')}
        onDone={() => Alert.alert('Done')}
        pages={[
          {
            backgroundColor: '#d81b60',
            image: <Image 
              source={{uri: 'http://www.myiconfinder.com/uploads/iconsets/a2f076131aa05ce038212f83e1950a05.png'}}
              style={styles.image}
            />,
            title: <Text style={styles.text}>Mainkan Game & Dapatkan Kupon</Text>,
            subtitle: <Text style={styles.textDesc}>Dapatkan banyak kupon dengan bermain di Boostspot favoritmu</Text>,
          },
          {
            backgroundColor: '#ffb300',
            image: <Image
              source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/binocular-flat.png'}}
              style={styles.image}
            />,
            title: <Text style={styles.text}>Penawaran Menarik di BoostSpot</Text>,
            subtitle: <Text style={styles.textDesc}>Nikmati berbagai penawaran item menarik di Boostspot terdekat kamu</Text>,
          },
          {
            backgroundColor: '#1976d2',
            image: <Image
              source={{uri: 'https://freeiconshop.com/wp-content/uploads/edd/gift-flat.png'}}
              style={styles.image}
            />,
            title: <Text style={styles.text}>Item Terbaik Untuk Teman Spesial</Text>,
            subtitle: <Text style={styles.textDesc}>Share item terbaikmu dengan P2P Gift untuk mereka yang spesial</Text>,
          },
        ]}
      />
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
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
})