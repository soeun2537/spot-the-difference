import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { TABS } from "./BottomTabNavigatorConstants";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.Primary,
        tabBarInactiveTintColor: colors.Gray,
        headerStyle: { backgroundColor: colors.Primary },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 3,
        },
      }}
    >
      {TABS.map(({ name, component, icon, iconOutline, title }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? icon : iconOutline}
                size={size}
                color={color}
              />
            ),
            headerTitle: title,
            headerShown: name === "홈" ? false : true,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
