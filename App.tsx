import { SafeAreaView } from "react-native";
import React from "react";
import Home from "./src/screens/HomeScreen/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppStack from "./src/stack/AppStack";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <AppStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
};

export default App;
