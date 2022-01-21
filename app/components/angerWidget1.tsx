import React, { useState } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Slider from '@react-native-community/slider';
import { View, StyleSheet, Text } from 'react-native';
import AppStyles from 'app/config/styles';

const AngerWidget1: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <AnimatedCircularProgress
          size={166}
          width={3}
          fill={sliderValue}
          tintColor="#fff"
          backgroundColor="#3d5875">
          {fill => (
            <View style={styles.progressCircle}>
              <View style={styles.innerCircle}>
                <Text>{sliderValue / 10}</Text>
              </View>
            </View>
          )}
        </AnimatedCircularProgress>
      </View>
      <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor="#b8eff4"
        maximumTrackTintColor="#fff"
        thumbTintColor="#b8eff4"
        step={10}
        value={sliderValue}
        onValueChange={sliderValue => setSliderValue(sliderValue)}
        style={styles.slider}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    height: 220,
    width: 220,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 110,
    borderColor: AppStyles.color.COLOR_SECONDARY,
    borderStyle: 'dashed',
  },
  progressCircle: {
    borderWidth: 20,
    height: 160,
    width: 160,
    alignSelf: 'center',
    borderRadius: 80,
    borderColor: AppStyles.color.COLOR_SECONDARY,
  },
  innerCircle: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: AppStyles.color.COLOR_BAR,
  },
  slider: {
    width: 300,
    height: 40,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 50,
  },
});
export default AngerWidget1;
