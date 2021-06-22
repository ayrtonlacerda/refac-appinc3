import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, typography, border, layout,
} from 'styled-system';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Button = styled.TouchableOpacity`
  ${color}
  ${space}
  ${border}
  ${typography}
  display: flex;
  border-radius: 25;
  height: 50;
  width: ${(props) => (props.camera ? '50%' : '100%')};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.camera ? '3px' : '0px')};
  margin-right: ${(props) => (props.camera ? '3px' : '0px')};
  ${layout}
`;

const Text = styled.Text`
  ${color}
  ${space}
  ${typography}
  letter-spacing: 1.3px;
  flex: 1;
  text-align: center;
`;

const Load = styled.ActivityIndicator.attrs({
  color: '#fff',
})``;

Text.defaultProps = {
  fontSize: 2,
  fontWeight: 4,
};

const types = [
  {
    bg: 'SECONDARY',
    textColor: 'PRIMARY',
  },
  {
    bg: 'WINE',
    textColor: 'WHITE',
  },
  {
    bg: 'SECONDARY',
    textColor: 'WHITE',
  },
  {
    bg: 'GREEN',
    textColor: 'WHITE',
  },
  {
    bg: 'GREY_DARK',
    textColor: 'WHITE',
  },
];

const ButtonComponent = ({
  loading, textButton, colorText, outline, type = 0, camera, icon, iconName, ...props
}) => (outline
  ? (
    <Button
      bg="BLACK_TRANSPARENT"
      borderWidth={1.5}
      borderColor="SECONDARY"
      {...props}
    >
      {loading ? <Load /> : (
        <>
          <Text color="SECONDARY">
            {textButton}
          </Text>
        </>
      )}

    </Button>
  ) : (
    <Button camera={camera} icon={icon} bg={types[type].bg} {...props}>
      {loading ? <Load /> : (
        <>
          {icon && (
            <Icon
              name={iconName}
              color="#344955"
              size={23}
              style={{ marginLeft: 20 }}
            />
          )}
          <Text color={types[type].textColor} {...(props.textStyle || {})}>
            {textButton}
          </Text>
        </>
      )}

    </Button>
  )
);

export default ButtonComponent;
