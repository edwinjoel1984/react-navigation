import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
export default class FooterApp extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer Joel</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}