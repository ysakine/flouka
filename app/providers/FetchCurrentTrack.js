import React from 'react';
import { ActivityIndicator, Text, View, Image, WebView, StyleSheet } from 'react-native';

export default class FetchCurrentTrack extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }


  componentDidMount() {
    this.intervalID = setInterval(
      () => this.callApi(),
      1000
      );
  }

  callApi(){
    return fetch('https://www.radioking.com/widgets/currenttrack.php?radio=166684&format=json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render(){

    const resizeMode = 'cover';

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, justifyContent: 'center'}}>
          <ActivityIndicator/>
        </View>
        )
      }

      return(

          <View style={styles.rowContainer}>
            <Image source={{uri: this.state.dataSource.cover == null ? 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p843x403/43100334_176768456532245_8370139507483213824_o.png?_nc_cat=103&_nc_ht=scontent-cdg2-1.xx&oh=62c6ed8636b8aed8616d8b9264e49d95&oe=5C65F5EA' : this.state.dataSource.cover }}
              style={styles.thumbnail} resizeMode="contain" />
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
               {this.state.dataSource.title}
              </Text>
              <Text style={styles.artist} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.state.dataSource.artist} 
              </Text>
            </View>
          </View>

        );
    }
  }


  const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 50,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  artist: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });