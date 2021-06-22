import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  color, space, flexbox, layout,
} from 'styled-system';
import styles from '../../../styles';

const size = {
  xsmall: 15,
  small: 20,
  medium: 25,
  big: 30,
  xbig: 35,
};

export const InformationIcon = styled(MaterialCommunityIcons).attrs(
  (props) => ({
    name: 'information-outline',
    size: props.size ? size[props.size] : size.medium,
    color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
  }),
)``;

export const ArrowBackIcon = styled(Ionicons).attrs((props) => ({
  name: 'md-arrow-back',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const CheckIcon = styled(MaterialIcons).attrs((props) => ({
  name: 'check-circle',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const RemoveIcon = styled(MaterialIcons).attrs((props) => ({
  name: 'remove-circle-outline',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const TrashIcon = styled(Ionicons).attrs((props) => ({
  name: 'md-trash',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const PencilIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'pencil',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const TimeIcon = styled(Entypo).attrs((props) => ({
  name: 'back-in-time',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const DownlaodIcon = styled(Ionicons).attrs((props) => ({
  name: 'md-download',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const KeyIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'key-variant',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const MenuIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'menu',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const PlayIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'play',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const PauseIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'pause',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const StopIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'stop',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const RecorderIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'record-rec',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const BarCodeIcon = styled(MaterialCommunityIcons).attrs((props) => ({
  name: 'barcode-scan',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const LocationIcon = styled(MaterialIcons).attrs((props) => ({
  name: 'location-on',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const ExitIcon = styled(Ionicons).attrs((props) => ({
  name: 'md-exit',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))``;

export const MinusIcon = styled(FontAwesome).attrs((props) => ({
  name: 'minus',
  size: props.size ? size[props.size] : size.big,
  color: props.color ? styles.colors[props.color] : styles.colors.WHITE,
}))`
  top: 1;
`;

export const BlackHole = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${layout}
`;

BlackHole.defaultProps = {
  width: size.big,
  height: size.big,
};

export const Touch = styled.TouchableOpacity``;
