import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  colors: {
    PRIMARY: '#344955',
    SECONDARY: '#F9AA33',
    WHITE: '#FFF',
    WHITE_TRANSPARENT: '#FFFFFF9F',
    BLACK: '#000',
    BLACK_TRANSPARENT: '#0000005f',
    GREY: '#DDD',
    GREY_LIGTH_DARK: '#999',
    GREY_DARK: '#777',
    DARK: '#555',
    DARK_STREGHT: '#232323',
    WHITE_ICE: '#EDF0F2',
    GREEN: '#277F30',
    GREEN_LIGHT: '#2AAE3F',
    WINE: '#B83E3E',
    RED: '#B92237',
    MUSTARD: '#A66E19',
    YELLOW: '#FFD500',
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48],
  fontWeights: [200, 300, 400, 600, 700],
  space: [0, 5, 10, 15, 20, 25, 30, 35, 40, { sw: width }, { sh: height }],
  metrics: {
    RADIUS: 4,
    SCREEN_WIDTH: width,
    SCREEN_HEIGHT: height,
    XSMALL: 5,
    SMALL: 10,
    MEDIUM: 15,
    BIG: 20,
    XBIG: 25,
    XXBIG: 35,
    XXXBIG: 50,
  },
};
