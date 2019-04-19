import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class ActivitiesList extends Component {
  handlePress = categoryID => {
    this.props.activityDetails(categoryID),
      this.props.navigation.navigate("ActivityDetail");
  };

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.props.categoryActivities}
        extraData={this.props}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={item => {
          const Activity = item.item;
          let mainContentStyle;

          return (
            <View style={styles.container}>
              <Image source={{ uri: Activity.image }} style={styles.avatar} />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text
                      style={styles.groupName}
                      onPress={() => this.handlePress(Activity.id)}
                    >
                      {Activity.title}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryActivities: state.activityReducer.categoryActivities.activities
  };
};
const mapDispatchToProps = dispatch => ({
  activityDetails: activityID =>
    dispatch(actionCreators.activityDetails(activityID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
