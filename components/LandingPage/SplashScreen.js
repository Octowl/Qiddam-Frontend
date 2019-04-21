import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

class SplashScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../../img/splash.png")}
        style={{ width: null, flex: 1 }}
      />
    );
  }
}

export default SplashScreen;
