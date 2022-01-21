import AppStyles from 'app/config/styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.color.COLOR_PRIMARY,
    paddingHorizontal: 10,
  },

  widgetWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
