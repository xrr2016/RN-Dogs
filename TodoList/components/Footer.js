import React, { Component, PropTypes } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    backgroundColor: '#f5f5f5'
  },
  text: {
    color: '#FF6464',
    fontSize: 16
  }
})

export default class Footer extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}
