import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppStyles from 'app/config/styles';

interface IProps {
  stepNumber: Number;
}

const StepsIndicator: React.FC<IProps> = (props: IProps) => {
  const { stepNumber } = props;
  let totalStep = [1, 2, 3, 4, 5];
  function getBgColor(index: number) {
    if (stepNumber > index) {
      return '#FFF';
    } else {
      return AppStyles.color.COLOR_SECONDARY;
    }
  }

  return (
    <View style={styles.container}>
      {totalStep.map((item, index) => {
        return (
          <View
            key={index}
            style={[styles.steps, { backgroundColor: getBgColor(index) }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-evenly',
  },
  steps: {
    height: 3,
    marginHorizontal: 10,
    width: 50,
    borderRadius: 1.5,
  },
});
export default StepsIndicator;
