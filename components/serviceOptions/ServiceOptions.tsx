import { Text, FlatList, TouchableOpacity, Image, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const ServiceOptions = () => {
  const data = [
    {
      id: "1",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "2",
      title: "Order food",
      image: "https://links.papareact.com/28w",
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      //   ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <View style={styles.content}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>

            <Icon
              style={tw`p-2 bg-black mt-4 rounded-full w-10`}
              type="antdesign"
              name={"arrowright"}
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ServiceOptions;
