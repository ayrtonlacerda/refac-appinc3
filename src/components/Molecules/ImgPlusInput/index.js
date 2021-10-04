import React, { useState, useMemo, useEffect } from 'react';

import { MolequaImgs } from '../../../assets';
import * as Atoms from '../../Atom';
import { Picker } from '../../Organisms';
import RadioButton from '../RadioButton';
import calculeByFormula from './util';


const ImgPlusInput = ({
  onChange, keyField, value, ...props
}) => {
  const [toggle, setToggle] = useState(
    value?.radio === 0 ? value?.radio : value?.radio || null,
  );
  const [selectedFormula, selectFormula] = useState();
  const [result, setResult] = useState("");
  const [formulasOptions, setFormulasOptios] = useState([]);

  const renderInput = useMemo(() => {
    if (!props?.input?.dependency) return true;
    if (value?.radio === props?.input?.dependency?.value) return true;
    return false;
  }, [toggle, value]);

  const handleChange = (key, valueMiniForm) => {
    debugger;
    onChange(keyField, { ...value, [key]: valueMiniForm });
  };

  /*  useEffect(()=>{
     if(props.input?.formulas){
       setFormulasOptios(props.input?.formulas.map(item => {
         return {form: item.formula, name: item.label}
       }))
     }
   },[]) */

  const onHandleFormule = (formuleSelected) => {
    try {
      setResult(calculeByFormula(formuleSelected.form, value));
      selectFormula(formuleSelected);
    } catch (error) {
      setResult("");
    }
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
          />
        </Atoms.Container>
      ))}
      {renderInput && props.input?.formulas &&
        (<Atoms.Container mt={5} >
          <Atoms.Text mb={3} text="Fórmulas" />
          <Picker
            value={selectedFormula}
            placeholder="Escolha uma fórmula"
            onChangeOption={onHandleFormule}
            options={props.input?.formulas.map(item => {
              return { form: item.formula, name: item.label }
            })}
          />
          <Atoms.Text text={`Resultado: ${result}`} />
        </Atoms.Container>)
      }
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
