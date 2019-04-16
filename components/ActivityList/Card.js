import React, { Component } from "react";
import React, { Component } from "react";
import { Text, Container } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Card extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>This is Card</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default Card;
