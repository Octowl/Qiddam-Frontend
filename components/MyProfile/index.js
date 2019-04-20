import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../MyProfile/style";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerLeft: null
  };

  render() {
    const myprofile = this.props.Myprofile;
    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.bgImage}
          source={require("../../img/background1.png")}
        /> */}
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Opcion 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  Myprofile: state.authReducer.myprofile
});

export default connect(mapStateToProps)(Profile);
