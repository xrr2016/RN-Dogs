import React, {Component} from 'react'
import { StyleSheet, WebView } from 'react-native'
import { Container, Header, Text, Toast, Fab } from 'native-base'

const styles = {
  web: {
    flex: 1
  }
}

export default class Play extends Component {

  handleLoadStart = () => {}
  handleLoadError = () => {
    
  }

  render () {
   
    const { params } = this.props.navigation.state
    const uri = `https://www.bilibili.com/video/av${params.aid}`
    return (
      <Container>
        <WebView
          onError = {this.handleLoadError}
          style={styles.web} 
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          source={{uri}} />
      </Container>
    )
  }
}
