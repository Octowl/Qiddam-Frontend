import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, Content, ScrollView } from "react-native";
import styles from "../MyProfile/style";

class Profile extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    // const profile = this.props.profile;
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
          </View>
        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => ({
  Myprofile: state.authReducer.profile
});

export default connect(mapStateToProps)(Profile);
