import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './Sidebar';
import HeaderApp from './Header';


export default class DrawerExample extends Component {
  static navigationOptions = {
    title: 'Main',
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
      </Drawer>
    );
  }
}