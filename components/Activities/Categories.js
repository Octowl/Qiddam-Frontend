import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  handlePress = categoryID => {
    this.props.fetchActivitiesCat(categoryID),
      this.props.navigation.navigate("ActivitiesList");
  };

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
  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.props.activities}
        extraData={this.props}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={item => {
          return item.id.toString();
        }}
        renderItem={item => {
          const Category = item.item;
          let mainContentStyle;

          return (
            <View style={styles.container}>
              <Image source={{ uri: Category.image }} style={styles.avatar} />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.groupName}>{Category.title}</Text>
                  </View>
                  {/* <Text style={styles.countMembers}>
                    {Category.countMembers} members
                  </Text> */}
                  <Text style={styles.timeAgo}>Updated 2 months ago</Text>

                  {this.renderGroupMembers(Category)}

                  <TouchableOpacity
                    onPress={() => this.handlePress(Category.id)}
                  >
                    <Text>هنا</Text>
                  </TouchableOpacity>
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
