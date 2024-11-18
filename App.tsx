import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Home from "./screens/HomeScreen/Home";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Home />
      </View>
    </SafeAreaView>
  );
};

export default App;
