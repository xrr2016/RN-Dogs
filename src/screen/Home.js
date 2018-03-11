import React, {Component} from 'react'
import {StyleSheet, ScrollView} from 'react-native'
import {
  Container,
  Content,
  Header,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Tabs,
  Tab,
  ScrollableTab,
  List,
  ListItem,
  Thumbnail,
  Body,
  Title,
  Right,
  Left
} from 'native-base'

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  }
})

export default class HomeScreen extends Component {

  state = {
    datas: []
  }

  componentWillMount = async() => {
    // const res = await fetch('https://www.bilibili.com/index/rank/all-07-0.json').then(res => res.json())
    // this.setState({datas: res.rank.list})
    // console.log(this.state.datas[0])
  }

  render() {
    const {datas} = this.state
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>全站榜</Title>
          </Body>
        </Header>
        <Tabs style={styles.tabs} renderTabBar={() => <ScrollableTab/>}>
          <Tab heading='全站'>
            <ScrollView style={styles.scrollContainer}>
              {datas
                ? <List
                    dataArray={datas}
                    renderRow={data => <ListItem thumbnail>
                    <Left>
                      <Thumbnail square large source={{uri: data.pic}}/>
                    </Left>
                    <Body>
                      <Text>{data.title}</Text>
                      <Text numberOfLines={1} note>{data.author}{data.duration}</Text>
                    </Body>
                  </ListItem>}/>
                : 'loading...'}
            </ScrollView>
          </Tab>
          <Tab heading='动画'>
           <Container>
             <Button transparent 
               onPress={() => this.props.navigation.navigate('Play')}><Icon name="play" /></Button>
            </Container>
          </Tab>
          <Tab heading='国创相关'>
            <Text>Tab3</Text>
          </Tab>
          <Tab heading='音乐'>
            <Text>Tab3</Text>
          </Tab>
          <Tab heading='Tab3'>
            <Text>Tab3</Text>
          </Tab>
          <Tab heading='Tab3'>
            <Text>Tab3</Text>
          </Tab>
          <Tab heading='Tab3'>
            <Text>Tab3</Text>
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button active>
              <Icon active name='stats'/>
            </Button>
            <Button>
              <Icon name='list'/>
            </Button>
            <Button>
              <Icon name='camera'/>
            </Button>
            <Button >
              <Icon name='navigate'/>
            </Button>
            <Button>
              <Icon name='person'/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
