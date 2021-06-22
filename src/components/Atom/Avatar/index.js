import React from 'react';
import { Platform, Image } from 'react-native';
import styled from 'styled-components';

import { flexbox, space, layout } from 'styled-system';
// import avatar from '../../../assets/img/avatar.png';
import avatar from '../../../assets/img/avatar.png';
import Theme from '../../../styles';

const Avatar = styled(Image).attrs({
  resizeMode: 'contain',
})`
  ${flexbox};
  ${space};
  ${layout};
  display: flex;
  border-radius: ${({ theme }) => (theme.metrics.SCREEN_HEIGHT * 0.25) / 2};
`;

Avatar.defaultProps = {
  width: Theme.metrics.SCREEN_WIDTH * 0.5,
  height: Theme.metrics.SCREEN_WIDTH * 0.5,
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: Platform.OS === 'android' ? null : 'white',
  borderWidth: 3,
};

const AvatarImage = ({ src, ...props }) => <Avatar source={src || avatar} {...props} />;

export default AvatarImage;
