import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, flexbox, variant, border, layout, alignContent,
} from 'styled-system';
import { Imgs } from '../../../assets';

const View = styled.View`
  ${color}
  ${space}
  ${flexbox}
  ${border}
  ${layout}
  ${variant({
  variants: {
    form: {
      borderBottomWidth: 1,
      borderBottomColor: 'GREY',
      mt: 2,
    },
    group: {
      borderRadius: 10,
      mt: 1,
    },
    viewSelection: {
      mt: 2,
      flexDirection: 'row',
      flex: 0.1,
      justifyContent: 'center',
    },
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
    },
    column: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    normal: {
      flex: 1,
    },
    justRow: {
      flexDirection: 'row',
      margin: '15px 5px 5px 5px',
    },
  },
})}
  width: 100%;
`;

const ImgView = styled.ImageBackground.attrs({})`
  ${space}
  ${flexbox}
  display: flex;
  flex: 1;
`;

View.defaultProps = {
  alignItems: 'center',
  flex: 1,
};

/**
 * @params {bool} background - background da cor "PRIMARY"
 * @params {bool} imgBackground - background na forma de imagem
 */
const Container = ({
  children, background, imgBackground, ...props
}) => (imgBackground ? (
  <ImgView source={Imgs.PER_2}>{children}</ImgView>
) : (
  <View bg={!background ? 'WHITE_ICE' : 'PRIMARY'} {...props}>
    {children}
  </View>
));

export default Container;
