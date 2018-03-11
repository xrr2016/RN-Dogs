import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

class Home extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    )
  }
}

export default StackNavigator({
  Home: {
    screen: Home
  }
})