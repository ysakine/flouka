import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View, 
    SafeAreaView
} from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import { Icon } from 'react-native-elements'

import FetchCurrentTrack from './FetchCurrentTrack';
import Player from './Player';
import About from './About';
import PodcastList from './PodcastList';
import Program from './Program';


class LogoTitle extends React.Component {
    
  render() {
    return (
      <Image
        source={require('../assets/images/logo-filled.png')}
        style={{ width: 80, height: 80 }}
      />
    );
  }
}


class Home extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea} forceInset={{ top: 'always' }}>
            <View style={styles.container}>
                <FetchCurrentTrack/>
                <Player/>
            </View>
            </SafeAreaView>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
  Home: {   screen: Home,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                tabBarIcon:  () => {<Icon name="web" size={35} style={{color:'gray'}} />},
            }),
            tabBarOptions: { showIcon: true, showLabel: true},
  }, 
  Program: {screen: Program,
            navigationOptions: ({ navigation }) => ({
                title: "Program",
                tabBarIcon:  () => {<Icon name="web" size={35} style={{color:'gray'}} />},
            }),
            tabBarOptions: { showIcon: true, showLabel: true},
  },
  Podcasts: {screen: PodcastList,
            navigationOptions: ({ navigation }) => ({
                title: "Podcasts",
                tabBarIcon:  () => {<Icon name="feed" size={35} style={{color:'gray'}} />},
            }),
            tabBarOptions: { showIcon: true, showLabel: true},
  },
  About: {screen: About,
            navigationOptions: ({ navigation }) => ({
                title: "About",
                tabBarIcon:  () => {<Icon name="web" size={35} style={{color:'gray'}} />},
            }),
            tabBarOptions: { showIcon: true, showLabel: true},    
  },
});

TabNavigator.navigationOptions = {
    headerTitle: <LogoTitle />,
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
  }
});

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
});