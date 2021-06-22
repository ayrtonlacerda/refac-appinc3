import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles';

export const Title = styled.Text`
  color: ${styles.colors.DARK};
  margin-bottom: ${styles.metrics.XSMALL}px;
  font-size: 14px;
  align-self: flex-start;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  padding-left: ${styles.metrics.XSMALL};
  color: ${styles.colors.RED};
  margin-bottom: ${styles.metrics.XXSMALL}px;
  align-self: flex-start;
`;

export const PickerView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${styles.metrics.BIG};
  width: 100%;
  background-color: ${styles.colors.WHITE};
  border-radius: 5px;
`;

export const InstructionView = styled.View`
  position: relative;
  align-self: stretch;
  justify-content: center;
`;

export const InstructionText = styled.Text`
  font-size: 15px;
  padding: 15px;
  width: 100%;
  align-self: center;
 
  color: ${styles.colors.DARK};

`;

export const IconView = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  justify-content: center;
  height: 40px;
  width: 35px;
  padding: 2px;
  elevation: 10;
`;

export const WithOutFeedBack = styled.TouchableWithoutFeedback``;

//
export const ModalPicker = styled.Modal``;

export const ContainerModal = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxOptions = styled.View`
  display: flex;
  width: 100%;
  max-height: ${styles.metrics.SCREEN_HEIGHT * 0.5};
  align-items: center;
  justify-content: flex-end;
  background-color: ${styles.colors.WHITE};
  border-top-width: 0.3px;
  border-top-color: ${styles.colors.DARK};
  border-top-left-radius: ${styles.metrics.RADIUS * 2};
  border-top-right-radius: ${styles.metrics.RADIUS * 2};
  padding-bottom: ${styles.metrics.BIG};
  padding-top: ${styles.metrics.MEDIUM};
  elevation: 5;
  shadow-offset: {  width: 10,  height: 10,  };
  shadow-color: ${styles.colors.DARK};
  shadow-opacity: 0.6;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  max-height: ${styles.metrics.SCREEN_HEIGHT * 0.5};
  width: 100%;
`;

export const Options = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
`;

export const TextOptions = styled.Text`
  font-size: 16px;
  color: ${styles.colors.BLACK};
`;

// icons
export const CheckIcon = styled(Icon).attrs({
  name: 'check',
  size: 18,
  color: styles.colors.SECONDARY,
})`
  margin-right: 5px;
`;
