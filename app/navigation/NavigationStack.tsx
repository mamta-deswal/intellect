import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { navigationRef } from './NavigationService';
import Widget1 from 'app/screens/Widget1';
import Widget2 from 'app/screens/Widget2';

import AppStyles from 'app/config/styles';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={AppStyles.color.COLOR_PRIMARY} />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Widget1" component={Widget1} />
        <Stack.Screen name="Widget2" component={Widget2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
