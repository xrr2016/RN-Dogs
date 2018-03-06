import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Header from './components/Header'
import Footer from './components/Footer'

// import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => ({
  items: state.items
})

class App extends Component {
  // static propTypes = {
  //   items: PropTypes.array.isRequired,
  //   dispatch: PropTypes.func.isRequired
  // }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header>Todo List</Header>
        <Footer />
      </ScrollView>
    )
  }
}

// export default connect(mapStateToProps)(App)
export default App
