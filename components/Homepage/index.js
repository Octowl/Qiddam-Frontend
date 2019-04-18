import React, { Component } from "react";
import { Text, Container } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class Home extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>This is Homepage</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default Home;
