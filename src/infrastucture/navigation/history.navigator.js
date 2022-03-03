import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HistoryScreen } from "../../features/history/screens/history.screen";
import { DetailScreen } from "../../features/history/screens/detail.screen";

const HistoryStack = createStackNavigator();

export const HistoryNavigator = () => {
  return (
    <HistoryStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <HistoryStack.Screen name="Riwayat" component={HistoryScreen} />
      <HistoryStack.Screen name="Detil Riwayat" component={DetailScreen} />
    </HistoryStack.Navigator>
  );
};
