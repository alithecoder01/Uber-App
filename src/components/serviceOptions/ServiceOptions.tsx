import { Text, FlatList, TouchableOpacity, Image, View } from 'react-native';

import React from 'react';

import styles from './styles';

import { Icon } from 'react-native-elements';

const ServiceOptions = () => {
  const data = [
    {
      id: '1',
      title: 'Get a ride',
      image: 'https://links.papareact.com/3pn',
    },
    {
      id: '2',
      title: 'Order food',
      image: 'https://links.papareact.com/28w',
    },
  ];
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item}>
          <View style={styles.content}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.icon}>
              <Icon type="antdesign" name={'arrowright'} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ServiceOptions;