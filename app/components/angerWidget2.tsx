import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import AppStyles from 'app/config/styles';

const AngerWidget2: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  let levels = [1, 2, 3, 4, 5];
  function getBgColor(val: number) {
    const index = selectedIndex.indexOf(val);
    if (index > -1) {
      return '#fff';
    } else {
      return AppStyles.color.COLOR_SECONDARY;
    }
  }
  function getWidth(index: number) {
    return 160 - index * 30;
  }
  function setValues(item: number, val: number) {
    let lastItem =
      selectedIndex.length > 0 ? selectedIndex[selectedIndex.length - 1] : 5;
    if (lastItem < val || lastItem - val > 1) {
      Alert.alert('Please start selection from bottom to top step wise');
      return;
    } else {
      const index = selectedIndex.indexOf(val);
      if (index > -1) {
        selectedIndex.splice(index, 1);
        let range = sliderValue - (index * 2 + 2);
        setSliderValue(range);
      } else {
        setSelectedIndex(state => [...state, val]);
        if (index == 0) {
          setSliderValue(2);
        } else {
          setSliderValue(index * 2 + 2);
        }
      }
    }
  }

  return (
    <>
      <Text style={styles.label}>Low</Text>
      {levels.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setValues(item, index)}
            style={[
              styles.bar,
              { borderTopColor: getBgColor(index) },
              { width: getWidth(index) },
            ]}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 22,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    margin: 6,
    borderTopColor: AppStyles.color.COLOR_SECONDARY,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  label: {
    fontSize: 12,
    color: '#fff',
  },
});

export default AngerWidget2;
