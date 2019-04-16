import React, { Component } from "react";
import { Text, Container } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

class CategoryList extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>This is CategoryList</Text>
        </ScrollView>
      </Container>
    );
  }
}

export default CategoryList;
