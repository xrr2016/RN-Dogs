import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

@observer
class App extends React.Component {

  @observable secondsPassed = 0

  componentDidMount = () => {
    setInterval(() => {
      this.secondsPassed++
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dogssssss</Text>
        <Text>{this.secondsPassed}</Text>
      </View>
    )
  }
}

export default App
