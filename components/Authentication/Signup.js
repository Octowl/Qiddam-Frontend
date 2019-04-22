import React, { Component } from "react";

import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import styles from "./styles";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class Signup extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "rgb(184, 224, 224)"
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  };
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك معنا"
            onChangeText={username => this.setState({ username })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك الأول"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك الأخير"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="ايميلك"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="كلمة المرور"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.signup(this.state)}
        >
          <Text style={styles.loginText}>تسجيل</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: userData => dispatch(actionCreators.signup(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
