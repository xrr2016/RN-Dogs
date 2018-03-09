import React, { Component } from 'react'
import { Header, Left, Body, Right, Title, Button } from 'native-base'

const iconStyle = {
  color: '#fff',
  fontSize: 16
}

const AppHeader = ({ title }) => (
  <Header>
    <Left>
      <Button>
        {/* <Icon name="logo-github" style={iconStyle} /> */}
      </Button>
    </Left>
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      <Button>
        {/* <Icon name="logo-github" style={iconStyle} /> */}
      </Button>
    </Right>
  </Header>
)

export default AppHeader
