import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface IProps {
  label: String;
  info: String;
}

const HeaderInfo: React.FC<IProps> = (props: IProps) => {
  const { label, info } = props;

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerLabel}>{label}</Text>
        <Text style={styles.close}>x</Text>
      </View>
      <Text style={styles.headerInfo}>{info}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  headerLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  close: {
    color: '#fff',
    fontSize: 15,
  },
  headerInfo: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
export default HeaderInfo;
