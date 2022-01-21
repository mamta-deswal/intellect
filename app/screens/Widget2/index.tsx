import React from 'react';
import { View } from 'react-native';
import AngerWidget2 from 'app/components/angerWidget2';
import Button from 'app/components/button';
import StepsIndicator from 'app/components/stepsIndicator';
import HeaderInfo from 'app/components/headerInfo';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';

const Widget2: React.FC = () => {
  const btnPress = () => {
    NavigationService.navigate('Widget1');
  };

  return (
    <View style={styles.container}>
      <StepsIndicator stepNumber={1} />
      <HeaderInfo
        label={'RESCUE SESSION: ANGER & FRUSTRATION'}
        info={'Pick the level of your anger &\nfrustration right now'}
      />
      <View style={styles.widgetWrap}>
        <AngerWidget2 />
      </View>
      <Button btnPress={btnPress} />
    </View>
  );
};

export default Widget2;
