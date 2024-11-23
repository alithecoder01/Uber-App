import React from 'react';
import { View } from 'react-native';

import Logo from '../../components/logo/Logo';
import ServiceOptions from '../../components/serviceOptions/ServiceOptions';

import styles from './styles';

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
