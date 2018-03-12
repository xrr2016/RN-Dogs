import React, {Component} from 'react'
import {Image, StyleSheet, View, Touchable} from 'react-native'
import {
  Title,
  Text,
  Icon,
  Badge,
  ListItem,
  Body,
  Left
} from 'native-base'

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  img: {
    width: 120,
    height: 100
  },
  left: {
    position: 'relative',
    flex: 0
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    color: '#333',
    marginBottom: 10
  },
  duration: {
    position: 'absolute',
    right: 10,
    bottom: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: '#fff',
    fontSize: 12,
    padding: 2
  },
  note: {
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

function divide(num) {
  return (num / 10000).toFixed(1)
}

export default class AppListItem extends Component {

  handlePress = (event) => {
    const { aid } = this.props
    this.props.navigation.navigate('Play', { aid })
  }

  render() {
    const {
      title,
      author,
      duration,
      pic,
      play,
      video_review,
      pts
    } = this.props
    return (
      <ListItem style={styles.container} onPress={this.handlePress}>
        <Left style={styles.left}>
          <Image source={{
            uri: pic
          }} style={styles.img}/>
          <Text style={styles.duration}>{duration}</Text>
        </Left>
        <Body style={styles.body}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.note}>
            <Text note>{author}</Text>
            <Text note>评分: {pts}</Text>
          </View>
          <View style={styles.note}>
            <Text note>播放:{divide(play)}万</Text>
            <Text note>弹幕:{divide(video_review)}万</Text>
          </View>
        </Body>
      </ListItem>
    )
  }
}