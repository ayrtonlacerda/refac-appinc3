/* eslint-disable react-native/no-raw-text */
import React from 'react';
import * as Atom from '../../Atom';

export default ({ number, label }) => (
  <Atom.Container flexDirection="row">
    <Atom.Ball text={number} size="XBIG" />
    <Atom.Text fontSize={2} ml={3}>
      {label}
    </Atom.Text>
  </Atom.Container>
);
