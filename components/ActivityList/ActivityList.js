import React, { Component } from "react";
import { Text, Container } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class ActivityList extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>This is ActivityList</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default ActivityList;
