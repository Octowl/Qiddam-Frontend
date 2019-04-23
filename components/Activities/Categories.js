import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  FlatList,
  Header,
  Text,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { ListItem, Icon } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";

class Categories extends Component {
  static navigationOptions = {
    headerBackground: (
      <Image
        style={styles.catHeader}
        source={require("../../img/header.png")}
      />
    ),

    title: "عنوان؟",
    headerStyle: {
      height: 200,
      borderBottomColor: "transparent",
      borderBottomWidth: 0
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
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
                    "http://127.0.0.1:8000/media/profile_images/Screen_Shot_2019-04-21_at_3.41.02_PM.png"
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
      rightTitle={item.title}
      subtitle={this.renderGroupMembers(item)}
      title="الأعضاء النشيطين "
      titleStyle={styles.titleStyle}
      subtitleContainerStyle={styles.subtitleContainer}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.9}
      containerStyle={styles.categoryList}
      onPress={() => this.handlePress(item.id)}
      rightTitleStyle={styles.titleTextCategory}
      rightTitleContainerStyle={styles.titleCategory}
    />
  );

  render() {
    return (
      <ImageBackground style={styles.background}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.props.navigation.navigate("ActivityCreate")}
        >
          <Text style={styles.addButtonText}>أضف</Text>
        </TouchableOpacity>

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
