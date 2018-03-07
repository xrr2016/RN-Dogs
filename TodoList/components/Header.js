import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6464'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15
  }
})

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    )
  }
}
