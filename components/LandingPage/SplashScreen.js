import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";

class SplashScreen extends Component {
  render() {
    const viewStyles = [styles.container];

    return (
      <View style={viewStyles}>
        <Image
          style={styles.bgImage}
          source={require("../../img/splash.png")}
        />
      </View>
    );
  }
}

export default SplashScreen;
