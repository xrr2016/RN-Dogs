import Expo from "expo";
import React, { Component } from "react";
// import {Provider} from 'mobx-react'
import { Root } from "native-base";
import { StyleSheet, Image, View } from "react-native";

// import likes from './src/stores/likes'
// import ranks from './src/stores/ranks'
// import theme from './src/stores/theme'
import AppNavigator from "./src/navigator";

// const stores = {
//   likes,
//   ranks,
//   theme
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 320,
    height: 235
  }
});

export default class App extends Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    await setTimeout(_ => {
      this.setState({ isReady: true });
    }, 2000);
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return (
        <View style={styles.container}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
        </View>
      );
    } else {
      return (
        // <Provider {...stores}>
        <Root>
          <AppNavigator />
        </Root>
        // </Provider>
      );
    }
  }
}
