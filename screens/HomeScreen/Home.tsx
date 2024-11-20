import { View, Image, SafeAreaView, Text } from "react-native";
import React, { useEffect } from "react";
import { useHomeScreen } from "./useHomeScreen";
import styles from "./styles";
import Logo from "../../components/logo/Logo";
import ServiceOptions from "../../components/serviceOptions/ServiceOptions";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>
      <View>
        <ServiceOptions />
      </View>
    </View>
  );
};

export default Home;
