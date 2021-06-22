import React, { useState } from 'react';

import * as Atom from '../../Atom';
// import { Container } from './styles';

const RadioButton = ({
  options, onChange, keyField, value, handleChange,
}) => {
  const handle = (id) => {
    if (handleChange) {
      handleChange(id);
    } else {
      onChange(keyField, id);
    }
  };
  return (options
    ? options?.map((item) => (
      <Atom.Container flexDirection="row">
        <Atom.CheckBox
          onClickSelect={() => handle(item.id)}
          selected={item.id === value}
        />
        <Atom.Text>{item.description}</Atom.Text>
      </Atom.Container>
    )) : null
  );
};

export default RadioButton;
