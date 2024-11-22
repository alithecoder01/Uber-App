import { View } from 'react-native';

import React from 'react';

import styles from './styles';

import Logo from '../../components/logo/Logo';

import ServiceOptions from '../../components/serviceOptions/ServiceOptions';

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
