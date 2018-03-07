import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  input: {
    height: 60,
    paddingLeft: 12,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  }
})

export default class Input extends Component {
  render() {
    const { placeholder } = this.props
    return (
      <TextInput style={styles.input} placeholder={placeholder} autoFocus />
    )
  }
}
