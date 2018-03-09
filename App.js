import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'

import DogApi from './api/dog-api'

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

  state = { randomDogImgSrc: '' }

  componentDidMount = async () => {
    const randomDog = await DogApi.getRandomDogFromAllBreeds()
    this.setState({randomDogImgSrc: randomDog.message })
    setInterval(() => {
      this.secondsPassed++
    }, 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Dogssssss</Text>
        <Text>{this.secondsPassed}</Text>
        {this.randomDogImgSrc ? (
          <ActivityIndicator />
        ) : (
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: this.state.randomDogImgSrc }}
          />
        )}
      </View>
    )
  }
}

export default App
