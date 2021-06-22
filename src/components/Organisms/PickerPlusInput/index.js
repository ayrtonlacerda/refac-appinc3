import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colorsDefault from '../../../styles';
import * as Atom from '../../Atom';

import {
  ErrorText,
  Title,
  PickerView,
  InstructionText,
  WithOutFeedBack,
  ModalPicker,
  ContainerModal,
  BoxOptions,
  Scroll,
  Options,
  TextOptions,
  CheckIcon,
  InstructionView,
  IconView,
  InputView,
} from './styles';

const PickerPlusInput = ({
  keyRef,
  error,
  title,
  value,
  options = [],
  selected,
  placeholder,
  onChangeOption,
  onChangeText,
}) => {
  const [show, setShow] = useState(false);

  const handleOpenPicker = useCallback(() => {
    setShow(!show);
  }, [show]);

  const handleSelectOptions = useCallback(
    (item) => {
      if (keyRef) {
        if (item === 'Outros') {
          onChangeOption(keyRef, { item, option: '' });
        } else {
          onChangeOption(keyRef, item);
        }
      } else {
        onChangeOption(item);
      }
      setShow(!show);
    },
    [show],
  );

  return (
    <>
      {title && <Title>{title}</Title>}
      {error && <ErrorText>{error}</ErrorText>}
      <PickerView>
        <InstructionView>
          <InstructionText onPress={handleOpenPicker}>
            {value?.name || value?.item || value || placeholder || 'Selecione uma opção'}
          </InstructionText>
          <IconView onPress={handleOpenPicker}>
            <Icon
              name="expand-more"
              size={20}
              color={colorsDefault.colors.PRIMARY}
            />
          </IconView>
        </InstructionView>

        <ModalPicker
          animationType="slide"
          transparent
          visible={show}
          onRequestClose={() => { }}
          mb={3}
        >
          <ContainerModal onPress={handleOpenPicker}>
            <WithOutFeedBack>
              <BoxOptions>
                <Scroll>
                  {options.map((item) => (
                    <>
                      {
                        item !== false && (
                          <Options onPress={() => handleSelectOptions(item)}>
                            {value === item && <CheckIcon />}
                            <TextOptions>{item.name || item}</TextOptions>
                          </Options>
                        )
                      }
                    </>
                  ))}
                </Scroll>
              </BoxOptions>
            </WithOutFeedBack>
          </ContainerModal>
        </ModalPicker>

      </PickerView>
      {
        value && (
          <InputView>
            <Atom.Input
              placeholder="Escreva a observação"
              onChangeText={(text) => onChangeOption(keyRef, { ...value, option: text })}
              value={value?.option}
            />
          </InputView>
        )
      }
    </>
  );
};

export default PickerPlusInput;
