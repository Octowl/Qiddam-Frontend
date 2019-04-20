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
        <Image
          style={styles.bgImage}
          source={require("../../img/background1.png")}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك معنا"
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
            placeholder="اسمك الأول"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/plasticine/100/000000/gender-neutral-user.png"
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="اسمك الأخير"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri:
                "https://img.icons8.com/plasticine/100/000000/gender-neutral-user.png"
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="ايميلك"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://img.icons8.com/plasticine/50/000000/email.png"
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
