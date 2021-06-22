import React, { useState, useMemo } from 'react';
import { Switch } from 'react-native';

import { MolequaImgs } from '../../../assets';

import * as Atoms from '../../Atom';
import * as Molecules from '..';

const obj = {
  key: 'name', // chave unica de cada campo - data_name
  type: 'image_check_input', // tipo de componente que e chamado no app -component_type
  label: 'Dados indetificadores', // titulo que fica do lado dos numeros
  placeholder: '',
  description: 'Informações do SINESP', // hint
  default_value: null,
  additonal_type: null, // se type = date -> 1. time 2. date
  image: null,
  check: null,
  input: [],
};

const obj2 = {
  key: 'name', // chave unica de cada campo - data_name
  type: 'image_check_input', // tipo de componente que e chamado no app -component_type
  label: 'Dados indetificadores', // titulo que fica do lado dos numeros
  placeholder: '',
  description: 'Informações do SINESP', // hint
  default_value: null,
  additonal_type: null, // se type = date -> 1. time 2. date
  image: 'Foto3',
  radio: [
    {
      id: 0,
      description: 'Não',
    },
    {
      id: 2,
      description: 'Sim',
    },
  ],
  input: {
    dependency: {
      key: 'radio',
      value: 2,
    },
    fields: [
      {
        key: 'A',
        label: 'A - ',
      },
      {
        key: 'A',
        label: 'A - ',
      },
      {
        key: 'A',
        label: 'A - ',
      },
    ],
  },
};

const ImgPlusInput = () => {
  const props = obj2;
  const [toggle, setToggle] = useState(null);

  const renderInput = useMemo(() => {
    if (!props.input.dependency) return true;
    if (toggle === props.input.dependency.value) return true;
    return false;
  }, [toggle]);

  return (
    <>
      {props.image && <Atoms.Image src={MolequaImgs[props.image]} />}
      {props.radio && (
        <>
          <Molecules.RadioButton
            value={toggle}
            options={props.radio}
            handleChange={setToggle}
          />
        </>
      )}
      {renderInput && props.input?.fields?.map((input) => (
        <Atoms.Container variant="justRow">
          <Atoms.Text text={input.label} />
          <Atoms.Input keyField={input.key} />
        </Atoms.Container>
      ))}
    </>
  );
};

export default ImgPlusInput;
