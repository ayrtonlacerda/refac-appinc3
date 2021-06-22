import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import * as Atom from '../../Atom';
// import { Container } from './styles';

const Load = styled.ActivityIndicator.attrs({
  color: '#0000ff',
  size: 'large',
})``;

const BoxModal = ({
  textPrimaryButton,
  textSecondaryButton,
  textModal,
  onClickPrimaryButton,
  onClickSecondaryButton,
  textInfo,
  loading,
  ...props
}) => (
  <Atom.Modal {...props}>
    <Atom.Box width={loading ? '40%' : '80%'} p={3}>
      <Atom.Text textAlign="center">{textInfo}</Atom.Text>
      <Atom.Box flexDirection={textSecondaryButton ? 'row' : 'column'} justifyContent="space-between">
        {loading ? <Load /> : (
          <Atom.Button
            type={3}
            mt={4}
            width={textSecondaryButton ? '47%' : '100%'}
            onPress={onClickPrimaryButton}
            textButton={textPrimaryButton}
          />
        )}
        {textSecondaryButton && (
          <Atom.Button
            type={1}
            mt={4}
            width="47%"
            onPress={onClickSecondaryButton}
            textButton={textSecondaryButton}
          />
        )}

      </Atom.Box>

    </Atom.Box>
  </Atom.Modal>
);

export default BoxModal;
