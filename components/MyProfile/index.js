import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, Content, ScrollView, Button } from "react-native";
import styles from "../MyProfile/style";

import { Content } from "native-base";
import * as actionCreators from "../../store/actions";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchMyProfile();
  }

  static navigationOptions = {
    title: "Profile",
    header: null
  };

  render() {
    // const myprofile = this.props.Myprofile;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={{ width: 420 }}
              source={require("../../img/profile.png")}
            />
          </View>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
            }}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>UserName</Text>
            <Text style={styles.info}>fristname lastname /Gander</Text>
            <Text style={styles.description}>Bio + Birthdate</Text>

            <Button
              // onPress={onPressLearnMore}
              title="Update"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMyProfile: () => dispatch(actionCreators.fetchMyProfile())
  };
};
const mapStateToProps = state => ({
  Myprofile: state.authReducer.myprofile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
