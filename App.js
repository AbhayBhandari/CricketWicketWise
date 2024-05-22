import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import matchStore from "./src/store";

import HomeScreen from "./src/screens/Home";
import SingleMatchInn1Screen from "./src/screens/SingleMatch_Inn1";
import SingleMatchInn2Screen from "./src/screens/SingleMatch_Inn2";

// Create a stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={matchStore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="SingleMatchInn1"
            component={SingleMatchInn1Screen}
          />
          <Stack.Screen
            name="SingleMatchInn2"
            component={SingleMatchInn2Screen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
