import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Home from "./screens/HomeScreen/Home";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
};

export default App;
