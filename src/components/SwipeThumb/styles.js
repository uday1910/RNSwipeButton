import { StyleSheet } from 'react-native';

const borderWidth = 3;
const margin = 1;
const maxContainerHeight = 100;
const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: maxContainerHeight / 10,
    borderRightWidth: 0,
    borderWidth,
    margin,
  },
  containerRTL: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    borderRadius: maxContainerHeight / 10,
    borderLeftWidth: 0,
    borderWidth,
    margin,
  },
  icon: {
    alignItems: 'center',
    borderRadius: maxContainerHeight / 10,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: -borderWidth,
  },
});

export default Styles;
export { borderWidth, margin };
