import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Subtitle } from 'native-base';

export default class HeaderApp extends Component {
  componentWillMount = () => {  
    console.warn('Recibiendo Props', this.props)

  }
  render() {
    return (
      <Container>
           <Header backgroundColor="#058b00">
          <Left>
            <Button transparent onPress={() => this.props.open()}>
                <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
            <Subtitle>Subtitle</Subtitle>
          </Body>
          <Right />
        </Header>
        {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.open()}>
                <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header> */}
      </Container>
    );
  }
}

// import React, { Component } from 'react';
// import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
// export default class HeaderApp extends Component {
//   render() {
//     return (
//         <Header>
//           <Left>
//             <Button transparent onPress={() => this.props.open()}>
//               <Icon name='menu' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>{this.props.headerTitle}</Title>
//           </Body>
//           <Right />
//         </Header>
//     );
//   }
// }