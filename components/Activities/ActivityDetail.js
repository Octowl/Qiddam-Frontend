import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import qiddamLogo from "../../img/qiddamLogo.png";
import * as actionCreators from "../../store/actions";
class ActivityDetail extends Component {
  async componentDidMount() {
    // this.props.currentActivity(this.props.activity.id);
    await console.log(this.props.activity.id);
  }

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
            <Text style={styles.date}>الوقت {this.props.activity.id} </Text>
            <View style={styles.profile}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://bootdey.com/img/Content/avatar/avatar1.png"
                }}
              />

              <Text style={styles.name}>اسم المنظم</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.shareButton}>
            <Text>قدّام</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   currentActivity: activityID =>
//     dispatch(actionCreators.activityDetails(activityID))
// });

const mapStateToProps = state => {
  return {
    activity: state.activityReducer.activity
  };
};

export default connect(mapStateToProps)(ActivityDetail);
