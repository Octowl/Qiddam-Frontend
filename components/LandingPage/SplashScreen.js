import React, { Component } from "react";
import { ImageBackground } from "react-native";

class SplashScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../img/background1.png")}
        style={{ width: null, flex: 1 }}
      />
    );
  }
}

export default SplashScreen;
