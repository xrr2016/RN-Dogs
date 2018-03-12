import React, {Component} from 'react'
import {StyleSheet, StatusBar} from 'react-native'
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Text,
  Icon,
  Title
} from 'native-base'

const styles = StyleSheet.create({header: {}})

export default class AppHeader extends Component {
  render() {
    return (
      <Header style={styles.header} hasTabs>
        <Left>
          <Button transparent>
            <Icon ios='ios-menu' android='md-menu'/>
          </Button>
        </Left>
        <Body>
          <Title>全站榜</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon android='md-more' ios='ios-more'/>
          </Button>
        </Right>
      </Header>
    )
  }
}