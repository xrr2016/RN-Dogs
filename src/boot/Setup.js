import * as Expo from 'expo'
import React, { Component } from 'react'
import { Container, Spinner } from 'native-base'
import Home from '../view/Home'

export default class Setup extends Component {
  
  state = {
    isReady: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return ( 
       <Container style={{justifyContent: 'center', alignItems: 'center'}}>
         <Spinner color='#005792' />
       </Container>
      )
    }
    return <Home />
  }
}
