import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Categories extends Component {
  componentDidMount() {
    this.props.fetchActivities();
  }

  renderOrganizers = category => {
    if (category.orgnizer) {
      return (
        <View style={styles.groupMembersContent}>
          {category.orgnizer.map((img, key) => {
            return (
              <Image
                key={key}
                style={styles.memberImage}
                source={{ uri: img }}
              />
            );
          })}
        </View>
      );
    }
    return null;
  };

  render() {
    renderOrganizers = category => {
      if (category.orgnizer) {
        return (
          <View style={styles.groupMembersContent}>
            {category.orgnizer.map(orgnizer => {
              return <Text>{orgnizer.user.username}</Text>;
            })}
          </View>
        );
      }
      return null;
    };

    return (
      <FlatList
        style={styles.root}
        data={this.props.activities} //change this
        extraData={this.props}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={item => {
          const Category = item.item;
          let mainContentStyle;

          return (
            <View style={styles.container}>
              <Image
                source={{ uri: Category.category.image }}
                style={styles.avatar}
              />
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.groupName}>
                      {Category.category.title}
                    </Text>
                  </View>
                  {/* <Text style={styles.countMembers}>
                    {Category.countMembers} members
                  </Text> */}
                  <Text style={styles.timeAgo}>Updated 2 months ago</Text>

                  {() => {
                    this.renderOrganizers(Category);
                  }}

                  <TouchableOpacity onPress={() => alert("HI")}>
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
    activities: state.activityReducer.activities
  };
};

const mapDispatchToProps = dispatch => ({
  fetchActivities: () => dispatch(actionCreators.fetchActivities())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
