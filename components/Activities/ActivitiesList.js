import React, { Component } from "react";
import { Text, View, ImageBackground, Image, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

class ActivitiesList extends Component {
  state = {
    isFetching: false
  };

  async onRefresh() {
    this.setState({ isFetching: true });
    await this.props.fetchActivitiesCat(this.props.categoryID),
      this.setState({ isFetching: false });
  }

  handlePress = activityID => {
    this.props.activityDetails(activityID),
      this.props.navigation.navigate("ActivityDetail");
  };
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      containerStyle={styles.categoryList}
      onPress={() => this.handlePress(item.id)}
      titleStyle={styles.titleCategory}
      rightIcon={
        <Image
          style={styles.qiddam}
          source={require("../../img/qiddamIcon.png")}
        />
      }
    />
  );

  render() {
    return (
      <ImageBackground style={styles.background}>
        <FlatList
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          keyExtractor={this.keyExtractor}
          data={this.props.categoryActivities}
          renderItem={this.renderItem}
        />
      </ImageBackground>
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
    dispatch(actionCreators.activityDetails(activityID)),
  fetchActivitiesCat: categoryID =>
    dispatch(actionCreators.fetchActivitiesCat(categoryID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);

///////////
