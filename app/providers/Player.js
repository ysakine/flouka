import React from 'react';
import { ActivityIndicator, Text, View, ImageBackground, WebView, StyleSheet } from 'react-native';

export default class Player extends React.Component {

  render(){


      return(
        <View style={styles.player}>
             <WebView source={{uri: 'https://listen.radioking.com/radio/166684/stream/207865'}}/>
        </View>

        );
    }
  }


  const styles = StyleSheet.create({
  player: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 60,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 1,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  }
  });