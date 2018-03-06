import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'indigo',
    fontSizer: 16
  }
})

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.text}>Remove completed items</Text>
      </TouchableOpacity>
    )
  }
}
