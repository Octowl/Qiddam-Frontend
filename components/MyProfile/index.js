import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, Content, ScrollView, Button } from "react-native";
import styles from "../MyProfile/style";
import * as actionCreators from "../../store/actions";

class MyProfile extends Component {
  componentDidMount() {
    this.props.fetchMyProfile();
  }

  static navigationOptions = {
    header: null
  };

  /**
   * AzizCR: why are there two componentDidMounts?
   */
  componentDidMount() {
    this.props.userActivities(this.props.myProfile.user.username);
  }

  render() {
    const myprofile = this.props.myProfile;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={{ width: 420, height: 200 }}
              source={require("../../img/header2.png")}
            />
          </View>
          <Image
            style={styles.avatar}
            source={{
              uri: myprofile.img
            }}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{myprofile.user.username}</Text>
            {/* <Text style={styles.info}>
              {myprofile.user.fname}
              {myprofile.gander}
            </Text> */}
            <Text style={styles.description}>
              {myprofile.bio} {myprofile.user.date_of_birth}
            </Text>

            {/* <Button
              // onPress={onPressLearnMore}
              title="Update"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            /> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userActivities: name => dispatch(actionCreators.userActivities(name)),
  fetchMyProfile: () => dispatch(actionCreators.fetchMyProfile())
});

const mapStateToProps = state => ({
  myProfile: state.authReducer.myprofile
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile);
