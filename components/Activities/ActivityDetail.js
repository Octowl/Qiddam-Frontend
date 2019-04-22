import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import qiddamLogo from "../../img/qiddamLogo.png";
import * as actionCreators from "../../store/actions";

class ActivityDetail extends Component {
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
  render() {
    if (!this.props.activity.orgnizer) {
      return <Text>Loading</Text>;
    } else {
      return (
        <ScrollView style={styles.pageView}>
          <View style={styles.containerD}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>
                {this.props.activity.title}
              </Text>
            </View>

            <View style={styles.postContent}>
              <Text style={styles.postTitle}>
                {this.props.activity.number_of_people}{" "}
                {this.props.activity.gender}
              </Text>

              <Text style={styles.postDescription}>
                {this.props.activity.description}
              </Text>

              <Text style={styles.date}>
                التاريخ {this.props.activity.date}{" "}
              </Text>
              <Text style={styles.date}>الوقت {this.props.activity.time} </Text>
              <TouchableOpacity>
                <View style={styles.profile}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: this.props.activity.orgnizer.img
                    }}
                  />

                  <Text style={styles.name}>
                    {this.props.activity.orgnizer.user.username}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Text>قدّام</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    activity: state.activityReducer.activity
  };
};

export default connect(mapStateToProps)(ActivityDetail);
