import React from 'react';
import styled from 'styled-components/native';
import {
  color, space, flexbox, variant,
} from 'styled-system';

const Scroll = styled.ScrollView.attrs((props) => ({
  contentContainerStyle: {
    padding: props.noPaddingX ? 0 : 15,
    paddingBottom: props.noPaddingBottom ? 0 : 20,
  },
}))`
  ${color}
  ${space}
  ${flexbox}
  display: flex;
  flex: 1;
  width: 100%;
`;

const ScrollView = ({
  children, noPaddingX, noPaddingBottom, setRef, ...props
}) => (
    <Scroll
      ref={setRef}
      noPaddingX={noPaddingX}
      noPaddingBottom={noPaddingBottom}
      {...props}
    >
      {children}
    </Scroll>
  );

export default ScrollView;
