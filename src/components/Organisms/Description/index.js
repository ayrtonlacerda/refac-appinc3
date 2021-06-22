/* eslint-disable react-native/no-raw-text */
import React, {
  useState, useCallback, useRef, useEffect,
} from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import produce from 'immer';
import Toast from 'react-native-toast-message';
import * as Atom from '../../Atom';
import * as Molecules from '../../Molecules';
import theme from '../../../styles';

const Description = ({
  keyField, value, onChange, crop, type, options,
}) => {
  const [confirm, setConfirm] = useState(null);
  const handleSelect = (v) => {
    setConfirm(v);
    if (v === 0) {
      Toast.show({
        type: 'info',
        text1: 'Edição habilitada',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 100,
        bottomOffset: 40,
      });
    }
  };
  return (
    <>
      {confirm || confirm === null
        ? <Atom.Text mb={5} bg="#ddd" p={2} width="100%" fontSize="14">{value}</Atom.Text>
        : <Atom.Input placeholder="Por favor adiciona a descrição correta" multiline value={value} onChangeText={(text) => onChange(keyField, text)} />}
      <Atom.Text mt={5} fontSize="16" textAlign="left" width="100%">
        A descrição bate com o siscrim?
      </Atom.Text>
      <Molecules.RadioButton options={options} value={confirm} onChange={(_, v) => handleSelect(v)} />
    </>
  );
};

export default Description;
