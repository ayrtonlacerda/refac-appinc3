import React, { useState, useMemo } from 'react';

import { MolequaImgs } from '../../../assets';

import * as Atoms from '../../Atom';
import * as Molecules from '..';

const ImgPlusInput = ({
  onChange, keyField, value, ...props
}) => {
  console.log(`${keyField} -> `, value);
  const [toggle, setToggle] = useState(
    value?.radio === 0 ? value?.radio : value?.radio || null,
  );

  const [miniform, setMiniForm] = useState({});

  const renderInput = useMemo(() => {
    if (!props.input?.dependency) return true;
    if (toggle === props.input?.dependency.value) return true;
    return false;
  }, [toggle, value]);

  const handleChange = (key, valueMiniForm) => {
    onChange(keyField, { ...value, [key]: valueMiniForm });
  };
  return (
    <>
      {props.image && <Atoms.Image src={MolequaImgs[props.image]} />}
      {props.radio && (
        <>
          <Molecules.RadioButton
            value={toggle}
            options={props.radio}
            handleChange={(valueRadion) => {
              setToggle(valueRadion);
              handleChange('radio', valueRadion);
            }}
          />
        </>
      )}
      {renderInput && props.input?.fields?.map((input) => (
        <Atoms.Container variant="justRow">
          <Atoms.Text text={input.label} pr={2} />
          <Atoms.Input
            value={value?.[input.key] || ''}
            keyField={input.key}
            flexGrow={1}
            onChangeText={
              (txt) => handleChange(input.key, txt)
            }
          />
        </Atoms.Container>
      ))}
    </>
  );
};

export default ImgPlusInput;
