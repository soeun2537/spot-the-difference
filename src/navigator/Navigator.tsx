import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import { TABS } from "./NavigatorConstants";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Image"
      screenOptions={{
        tabBarActiveTintColor: colors.Primary,
        tabBarInactiveTintColor: colors.Gray,
        headerStyle: {
          backgroundColor: colors.Primary,
        },
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
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navigator;
