import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function Routes() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerTransparent: true, headerTitle: false }}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerTransparent: true, headerTitle: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTransparent: true, headerTitle: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
