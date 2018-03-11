import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';

@observer
class LikeList extends Component {
  render() {
    return (
      <View>
        <Text> Likes </Text>
      </View>
    )
  }
}
export default LikeList