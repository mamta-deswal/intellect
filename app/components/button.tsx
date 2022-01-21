import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
interface IProps {
  btnPress: Function;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { btnPress } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => btnPress()}>
      <Text>Next</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 30,
  },
});
export default Button;
