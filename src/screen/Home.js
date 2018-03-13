import React, { Component } from "react";
import { StyleSheet, StatusBar, ScrollView, Touchable } from "react-native";
import {
  Container,
  Content,
  Button,
  Text,
  Icon,
  Tabs,
  Tab,
  List,
  ScrollableTab,
  Title,
  Spinner
} from "native-base";

// import AppHeader from '../components/AppHeader'
import AppFooter from "../components/AppFooter";
import AppListItem from "../components/AppListItem";

import BiliRanks from "../api";

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#f7f7f7"
  },
  stab: {
    borderBottomWidth: 0
  },
  tab: {
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      bottom: -1
    },
    shadowOpacity: 0.15
  },
  scroll: {
    flex: 1
  }
});

export default class HomeScreen extends Component {
  state = {
    list: []
  };

  async componentDidMount() {
    const { rank } = await BiliRanks.getWholeSite();
    this.setState({ list: rank.list });
  }

  renderList = list => {
    if (!list) {
      return <Spinner color="#327bf6" />;
    }
    return (
      <List
        dataArray={list}
        renderRow={(item, index) => (
          <AppListItem {...item} navigation={this.props.navigation} />
        )}
      />
    );
  };

  handlePress = event => {
    console.dir(event);
  };

  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={() => <ScrollableTab style={styles.stab} />}
          style={styles.tabs}
        >
          <Tab heading="全站">
            <ScrollView style={styles.scroll}>
              {this.renderList(this.state.list)}
            </ScrollView>
          </Tab>
          <Tab heading="动画" />
          <Tab heading="国创相关" />
          <Tab heading="音乐" />
          <Tab heading="舞蹈" />
          <Tab heading="科技" />
          <Tab heading="生活" />
          <Tab heading="鬼畜" />
          <Tab heading="时尚" />
          <Tab heading="娱乐" />
          <Tab heading="影视" />
        </Tabs>
        <AppFooter />
      </Container>
    );
  }
}
