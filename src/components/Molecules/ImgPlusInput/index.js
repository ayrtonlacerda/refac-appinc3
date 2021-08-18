import React, { useState, useMemo } from 'react';

import { MolequaImgs } from '../../../assets';

import * as Atoms from '../../Atom';
import RadioButton from '../RadioButton';

const ImgPlusInput = ({
  onChange, keyField, value, ...props
}) => {
  const [toggle, setToggle] = useState(
    value?.radio === 0 ? value?.radio : value?.radio || null,
  );

  const renderInput = useMemo(() => {
    if (!props?.input?.dependency) return true;
    if (value?.radio === props?.input?.dependency?.value) return true;
    return false;
  }, [toggle, value]);

  const handleChange = (key, valueMiniForm) => {
    onChange(keyField, { ...value, [key]: valueMiniForm });
  };

  if (!props.image && !props.radio && !renderInput) return null;

  return (
    <>
      {props?.image && <Atoms.Image src={MolequaImgs[props.image]} />}
      {props?.radio && (
        <RadioButton
          value={value?.radio === 0 ? value?.radio : (value?.radio || null)}
          options={props?.radio}
          handleChange={(valueRadion) => {
            setToggle(valueRadion);
            handleChange('radio', valueRadion);
          }}
        />
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
            keyboardType={input.type || 'default'}
          />
        </Atoms.Container>
      ))}
    </>
  );
};

export default ImgPlusInput;
/* {props.image && <Atoms.Image src={MolequaImgs[props.image]} />}
      {
        props.radio && (

            <RadioButton
              value={value?.radio === 0 ? value?.radio : (value?.radio || null)}
              options={props.radio}
              handleChange={(valueRadion) => {
                setToggle(valueRadion);
                handleChange('radio', valueRadion);
              }}
            />

        )
      }
      {
        renderInput && props.input?.fields?.map((input, index) => (
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
        ))
      } */
