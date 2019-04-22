import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image } from "react-native";
import styles from "../MyProfile/style";
import { Content } from "native-base";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerLeft: null
  };

  render() {
    // const myprofile = this.props.Myprofile;
    return (
      <Content>
        <View style={styles.container}>
          <View style={styles.header} />
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
            <Text>Opcion 1</Text>
            <Text>Opcion 2</Text>
          </View>
        </View>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  Myprofile: state.authReducer.myprofile
});

export default connect(mapStateToProps)(Profile);
