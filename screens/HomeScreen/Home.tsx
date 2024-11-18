import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useHomeScreen } from "./useHomeScreen";
import styles from "./styles";

const Home = () => {
  const { userName, setUserName, currentLocation, setCurrentLocation } =
    useHomeScreen();

  useEffect(() => {
    setUserName("John Doe");
    setCurrentLocation({
      latitude: 37.78825,
      longitude: -122.4324,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>{userName}</Text>
      <Text>{currentLocation.longitude}</Text>
      <Text>{currentLocation.latitude}</Text>
    </View>
  );
};

export default Home;
