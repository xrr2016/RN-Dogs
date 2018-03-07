import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import Header from './components/Header'
import Footer from './components/Footer'
import Input from './components/Input'
import List from './components/List'

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
      <View style={styles.container}>
        <Header>Todo List</Header>
        <Input placeholder={'What you want to do?'} />
        <List />
        <Footer>Remove completed items</Footer>
      </View>
    )
  }
}

// export default connect(mapStateToProps)(App)
export default App
