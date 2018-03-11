import Expo from 'expo'
import React, {Component} from 'react'
import {StyleSheet, Image, View, Text} from 'react-native'

import Home from './src/screen/Home'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 320,
    height: 235
  }
})

export default class App extends Component {

  state = {
    isReady: false
  }

  async componentWillMount() {
    await Expo
      .Font
      .loadAsync({'Roboto': require('native-base/Fonts/Roboto.ttf'), 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')})
    this.setState({isReady: true})
  }

  render() {
    const {isReady} = this.state
    if (!isReady) {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/logo.png')}/>
        </View>
      )
    } else {
      return <Home/>
    }
  }
}
