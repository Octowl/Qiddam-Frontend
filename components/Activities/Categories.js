import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  Header
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

class Categories extends Component {
  state = {
    isFetching: false
  };
  componentDidMount() {
    this.props.fetchCategories();
  }
  handlePress = categoryID => {
    this.props.fetchActivitiesCat(categoryID),
      this.props.navigation.navigate("ActivitiesList");
  };

  async onRefresh() {
    console.log("refreshing");
    this.setState({ isFetching: true });
    await this.props.fetchCategories();
    this.setState({ isFetching: false });
  }

  renderGroupMembers = Category => {
    if (Category.activities) {
      return (
        <View style={styles.groupMembersContent}>
          {Category.activities.map((activity, key) => {
            {
              console.log(activity.orgnizer.img);
            }
            return (
              <Image
                key={key}
                style={styles.memberImage}
                source={{
                  uri:
                    "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ni8yODEvb3JpZ2luYWwvd2hpdGUtdHJlZS1mcm9nLmpwZw=="
                }}
              />
            );
          })}
        </View>
      );
    }
    return null;
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={this.renderGroupMembers(item)}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.7}
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
          data={this.props.activities}
          renderItem={this.renderItem}
        />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activityReducer.categories
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  fetchActivitiesCat: categoryID =>
    dispatch(actionCreators.fetchActivitiesCat(categoryID))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
