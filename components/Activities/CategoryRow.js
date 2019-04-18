import React, { Component } from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";

class CategoriesRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: Group.image }} style={styles.avatar} />
        <View style={styles.content}>
          <View style={mainContentStyle}>
            <View style={styles.text}>
              <Text style={styles.groupName}>{Group.name}</Text>
            </View>
            <Text style={styles.countMembers}>
              {Group.countMembers} members
            </Text>
            <Text style={styles.timeAgo}>Updated 2 months ago</Text>
            {/* imagesrenderhere */}
            {this.renderOrganizers(Group)}
          </View>
        </View>
      </View>
    );
  }
}

export default CategoriesRow;
