import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import PlayScreen from "./src/screens/PlayScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    Play: PlayScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "TestApp",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitleStyle: {
        fontSize: 20,
        color: "orangered",
      },
    },
  }
);

export default createAppContainer(navigator);
