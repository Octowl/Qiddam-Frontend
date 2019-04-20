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

class Login extends Component {
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
        <Image
          style={styles.bgImage}
          source={require("../../img/background1.png")}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/plasticine/100/000000/user-male.png"
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="كلمة المرور"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/plasticine/100/000000/password.png"
            }}
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
