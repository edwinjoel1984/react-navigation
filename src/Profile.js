import React, { Component } from 'react';
import {Text} from 'react-native';
import { Drawer, Container } from 'native-base';
import SideBar from './Sidebar';
import HeaderApp from './Header';


export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    header: null
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    const {navigation} = this.props;
    console.warn(this.props)
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigation={navigation} />}
        onClose={() => this.closeDrawer()} >
        <HeaderApp  open={this.openDrawer} navigationOptions={()=>this.navigationOptions} />
        <Container>
          <Text>Profile</Text>
        </Container>
      </Drawer>
    );
  }
}