import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpotTheDifference from "../../screens/SpotTheDifference";
import Game from "../../screens/Game";

const Stack = createNativeStackNavigator();

const GameStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SpotTheDifference"
        component={SpotTheDifference}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default GameStackNavigator;
