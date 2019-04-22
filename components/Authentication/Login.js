import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import styles from "./styles";
import * as actionCreators from "../../store/actions";
import { connect } from "react-redux";

class Login extends Component {
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
    username: "",
    password: ""
  };
  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="اسمك"
              onChangeText={username => this.setState({ username })}
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
            onPress={() => this.props.login(this.state)}
          >
            <Text style={styles.loginText}>تسجيل دخول</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.btnText}>ما عندك حساب؟</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: userData => dispatch(actionCreators.login(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
