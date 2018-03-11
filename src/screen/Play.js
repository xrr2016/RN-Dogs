import React, {Component} from 'react'
import { StyleSheet, WebView } from 'react-native'
import { Container, Header, Text, Toast } from 'native-base'

const styles = {
  web: {
    flex: 1
  }
}

export default class Play extends Component {

  handleLoadStart = () => {}
  handleLoadError = () => {}

  render () {
    return (
      <Container>
        <Header />
        <WebView
          style={styles.web} 
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          source={{uri: 'https://www.bilibili.com/video/av20448655/'}} />
      </Container>
    )
  }
}
