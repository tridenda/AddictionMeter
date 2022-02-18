import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Detection" component={() => null} />
    </HomeStack.Navigator>
  );
};
