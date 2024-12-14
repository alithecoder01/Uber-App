import React from 'react';
import { SafeAreaView } from 'react-native';

import { Authenticator } from '@aws-amplify/ui-react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AmplifyConfiguration } from './amplify/config';
import AppStack from './src/stack/AppStack';

AmplifyConfiguration();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* Comment the Authenitcator till adding the backend side + update .env */}
        <Authenticator.Provider>
          <Authenticator>
            <AppStack />
          </Authenticator>
        </Authenticator.Provider>
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
