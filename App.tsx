import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigator/bottomTabNavigator/BottomTabNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
