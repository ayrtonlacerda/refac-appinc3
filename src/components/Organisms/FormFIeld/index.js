/* eslint-disable react-native/no-raw-text */
import React from 'react';
import * as Atom from '../../Atom';
import * as Molecules from '../../Molecules';

/*
 dependencia
 condicional
*/

const FormField = ({
  children, description, group, ...props
}) => (
  <Atom.Container variant={group ? 'group' : 'form'} p={3}>
    <Molecules.HeaderField label={props.label} number={props.number} />
    <Atom.Text
      fontSize={1}
      fontWeight={1}
      width="100%"
      mt={2}
      mb={1}
      textAlign="left"
    >
      {description || null}
    </Atom.Text>
    {children}
  </Atom.Container>
);

export default FormField;
