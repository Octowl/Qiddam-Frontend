import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import qiddamLogo from "../../img/qiddamLogo.png";

class ActivityDetail extends Component {
  render() {
    return (
      <ScrollView style={styles.pageView}>
        <View style={styles.containerD}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{this.props.activity.title}</Text>
          </View>

          <View style={styles.postContent}>
            <Text style={styles.postTitle}>
              {this.props.activity.number_of_people}{" "}
              {this.props.activity.gender}
            </Text>

            <Text style={styles.postDescription}>
              {this.props.activity.description}
            </Text>

            {/* <Text style={styles.tags}>
              {this.props.activity.location} :المكان 
            </Text> */}

            <Text style={styles.date}>التاريخ {this.props.activity.date} </Text>
            <Text style={styles.date}>الوقت {this.props.activity.time} </Text>

            <View style={styles.profile}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar1.png"
                }}
              />

              <Text style={styles.name}>اسم المنظم</Text>
            </View>
            <TouchableOpacity style={styles.shareButton}>
              <Image
                style={styles.qiddam}
                source={require("../../img/qiddamLogo.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    activity: state.activityReducer.activity
  };
};

export default connect(
  mapStateToProps,
  null
)(ActivityDetail);
