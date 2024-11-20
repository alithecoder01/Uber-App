import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={{ uri: "https://links.papareact.com/gzs" }}
      resizeMode="contain"
    />
  );
};

export default Logo;
