import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch } from 'react-native'

import Checkbox from './Checkbox'

const items = [
  'Check email',
  'Take a shower',
  'Brush teeth',
  'Eat breakfast'
]

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  item: {
    height: 50,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1'
  },
  text: {
    color: '#333',
    fontSize: 18
  }
})

export default class List extends Component {

  render() {
    return (
      <ScrollView style={styles.list}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.text}>Check email</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}
