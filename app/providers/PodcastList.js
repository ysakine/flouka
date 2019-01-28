import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class PodcastList extends React.Component  {
		render() {
		return (
		<Text style={styles.text} >
          Lorum tamère
        </Text>
		);
	}
}




  const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  }
  });