import { createStackNavigator } from "react-navigation";

import Categories from "../Activities/Categories";

const ActivitiesStack = createStackNavigator(
  {
    Categories: Categories
  },
  {
    initialRouteName: "Categories",
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

export default ActivitiesStack;
