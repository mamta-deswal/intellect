/**
 * React Native App
 * Everything starts from the Entry-point
 */
import React from 'react';

import Navigator from 'app/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles from './config/styles';

const RootNavigation: React.FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: AppStyles.color.COLOR_PRIMARY }}>
      <Navigator />
    </SafeAreaView>
  );
};

const EntryPoint: React.FC = () => {
  return <RootNavigation />;
};

export default EntryPoint;
