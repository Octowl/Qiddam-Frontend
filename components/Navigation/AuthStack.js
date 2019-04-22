import { createStackNavigator } from "react-navigation";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import MyProfile from "../MyProfile";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    MyProfile: MyProfile
  },
  {
    initialRouteName: "MyProfile",
    cardStyle: {
      backgroundColor: "rgb(248, 249, 250)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(155, 166, 87)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default AuthStack;
