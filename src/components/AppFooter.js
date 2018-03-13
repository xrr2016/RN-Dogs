import React, { Component } from "react";
import { observer } from "mobx-react";
import { StyleSheet } from "react-native";
import { Footer, FooterTab, Button, Text, Icon } from "native-base";

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      top: -1
    },
    shadowOpacity: 0.15
  }
});

@observer
class AppFooter extends Component {
  render() {
    return (
      <Footer style={styles.footer}>
        <FooterTab>
          <Button active>
            <Icon ios="ios-stats" android="md-stats" />
            <Text>全站</Text>
          </Button>
          <Button>
            <Icon ios="ios-flame" android="md-flame" />
            <Text>原创</Text>
          </Button>
          <Button>
            <Icon ios="ios-film" android="md-film" />
            <Text>影视</Text>
          </Button>
          <Button>
            <Icon ios="ios-star" android="md-star" />
            <Text>新人</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default AppFooter;
