import React, { Component } from "react";
import { AppRegistry, Image, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";
const routes = [
  {
    name: "Home",
    route: "main",
    icon: 'ios-home-outline'
  }, {
    name: "EPS's",
    route: "login",
    icon: 'ios-medkit-outline'
   }, {
    name: "Historias Clínicas",
    route: "historias_clinicas",
    icon: 'ios-clipboard-outline'
   }, {
    name: "Profile",
    route: "profile",
    icon: 'md-person'
   },  {
    name: "Cerrar Sesión",
    route: "logout",
    icon: 'md-power'
   }
];

export default class SideBar extends Component {
    moveToRoute = (navigation,route) => {
        const {navigate} = navigation;
        if(route!=='logout'){
          console.warn('Route:', route)
          navigate(route)
        }else{
          console.warn('Cerrar Sesion')
        }
    }
  render() {
    const {navigation} = this.props;
    return (
      <Container style={{backgroundColor:'#FFF'}}>
        <Content  >
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={styles.bgPhoto} />
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <TouchableOpacity style={styles.item}
                  onPress={() => this.moveToRoute(navigation,data.route)}>
                  <Icon style={styles.itemIcon} name={data.icon} />
                  <Text style={styles.itemText}>{data.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bgPhoto: {
      height: 150,
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10
  },
  item:{
    flexDirection: 'row',
    marginBottom: 10
    
  },
  itemIcon:{
    width: 25,
    marginHorizontal: 20,
    justifyContent:'center',
    alignItems: 'center'
  },
  itemText:{
    paddingTop:8

  }
})