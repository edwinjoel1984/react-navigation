import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native'
import { Container,   Content, Button, Icon, Text,  Item, Label, Input } from 'native-base';
import HeaderApp from './Header';
import FooterApp from './Footer';

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null
    }
    handlePress = () => {
        const {navigate} = this.props.navigation;
        navigate('main', {test: 'Edwin'});
    }
  render() {
    return (
      <Container style={styles.container}>
        <Image source={require('./img/bg.jpg')} style={styles.imgBg}/>
        <Content >
            <View style={styles.containerLogo}> 
                <Image source={require('./img/logo.png')} style={styles.logoApp}/>    
            </View>  
            <View style={styles.content}>
                <Item>
                    <Icon active name='ios-contact-outline' style={{color:'#058bf4'}} />
                    <Input placeholder='Username'/>
                </Item>
                <Item>
                    <Icon active name='md-key' style={{color:'#058bf4'}} />
                    <Input placeholder='Password'/>
                </Item>
                <View>
                    <Button full rounded light style={styles.containerButton} onPress={this.handlePress}><Text style={styles.buttonText}> Login </Text></Button>
                </View>
            </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    content:{
        marginHorizontal: 30,
        paddingHorizontal:20,
        paddingVertical: 20,
        borderRadius: 15,
        backgroundColor:'rgba(255,255,255,0.6)'
        // backgroundColor:'rgba(230,155,165,0.2)'
    },
    imgBg:{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'repeat'  
    },
    containerButton:{
        marginTop: 20
    },
    containerLogo:{
        alignItems: 'center',
        marginBottom: 15
    }
  });