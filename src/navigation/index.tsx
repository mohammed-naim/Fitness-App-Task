import React from "react";

import {
  InitialScreen,
  DateScreen,
  NameScreen,
  SigninScreen,
  SignupScreen,
  SuccessScreen,
  WorkoutFrequencyScreen
} from "../assets/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

export type MainstackParmList = {
  InitialScreen: undefined;
  SignupScreen: undefined;
  SigninScreen: undefined;
  NameScreen: undefined;
  DateScreen: undefined;
  WorkoutFrequencyScreen: undefined;
  SuccessScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainstackParmList>();

export default function Screens() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="InitialScreen"
        screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="InitialScreen" component={InitialScreen} />
        <MainStack.Screen name="SignupScreen" component={SignupScreen} />
        <MainStack.Screen name="SigninScreen" component={SigninScreen} />
        <MainStack.Screen name="NameScreen" component={NameScreen} />
        <MainStack.Screen name="DateScreen" component={DateScreen} />
        <MainStack.Screen
          name="WorkoutFrequencyScreen"
          component={WorkoutFrequencyScreen}
        />
        <MainStack.Screen name="SuccessScreen" component={SuccessScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
