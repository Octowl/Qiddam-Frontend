import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";
import ActivitiesStack from "./ActivitiesStack";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    ActivitiesStack: ActivitiesStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "ActivitiesStack":
            iconName = "play-arrow";
            iconType = "MaterialIcons";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#F5A9B5",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(248, 249, 250)"
      }
    }
  }
);

export default BottomNav;
