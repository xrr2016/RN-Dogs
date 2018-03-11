import React, {Component} from 'react'
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: '全站榜'
  }

  render () {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button active>
              <Icon active name='stats' />
            </Button>
            <Button>
              <Icon name='list' />
            </Button>
            <Button>
              <Icon name='camera' />
            </Button>
            <Button >
              <Icon name='navigate' />
            </Button>
            <Button>
              <Icon name='person' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
