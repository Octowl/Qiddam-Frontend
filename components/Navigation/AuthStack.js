import { createStackNavigator } from "react-navigation";

import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import MyProfile from "../MyProfile";

import Profileup from "../UpdateProfile";

const AuthStack = createStackNavigator(
  {
    Login: Login,
    Signup: Signup,
    /**
     * AzizCR: is there any way that we can update the profile from the profile component itself?
     */
    MyProfile: MyProfile,
    Profile1: Profileup
  },
  {
    initialRouteName: "Login",

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
