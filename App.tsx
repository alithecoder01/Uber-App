import React from 'react';
import { SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/stack/AppStack';

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
    backgroundColor: 'white',
  },
};

export default App;
