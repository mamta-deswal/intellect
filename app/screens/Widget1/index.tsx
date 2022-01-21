import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from 'app/components/button';
import StepsIndicator from 'app/components/stepsIndicator';
import HeaderInfo from 'app/components/headerInfo';
import NavigationService from 'app/navigation/NavigationService';
import AngerWidget1 from 'app/components/angerWidget1';

const Widget1: React.FC = () => {
  const btnPress = () => {
    NavigationService.navigate('Widget2');
  };

  return (
    <View style={styles.container}>
      <StepsIndicator stepNumber={1} />
      <HeaderInfo
        label={'RESCUE SESSION: ANGER & FRUSTRATION'}
        info={'Pick the level of your anger &\nfrustration right now'}
      />
      <View style={styles.widgetWrap}>
        <AngerWidget1 />
      </View>
      <Button btnPress={btnPress} />
    </View>
  );
};

export default Widget1;
