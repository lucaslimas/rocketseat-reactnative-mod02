import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: '10px',
  basePadding: '20px',
  baseRadius: '3px',
  screenWidth: `${width < height ? width : height}px`,
  screenHeight: `${width < height ? height : width}px`,
};
