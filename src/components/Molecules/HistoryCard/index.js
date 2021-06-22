/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { format } from 'date-fns';
import * as Atom from '../../Atom';
import { Row } from './styles';

const HistoryCard = ({
  back, trash, info, title, handlePress, id, createdAt,
}) => (
  <Atom.Touch onPress={handlePress} px="0">
    <Atom.Box alignItems="flex-start" p={4} mb={2}>
      <Atom.Container
        flexDirection="row"
        bg="WHITE"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Atom.Container bg="WHITE" alignItems="flex-start">
          <Atom.Text fontSize={14} fontWeight="bold">{`id - ${id}`}</Atom.Text>
          <Atom.Text mb={2} fontSize={14} color="DARK">
            {title || 'Perícia sem nome'}
          </Atom.Text>
        </Atom.Container>
        <Atom.Container bg="WHITE" alignItems="flex-end">
          <Atom.Text fontSize={12} color="GREY_LIGTH_DARK">
            {format(new Date(createdAt), 'dd/MM/yyyy')}
          </Atom.Text>
          <Atom.Text fontSize={12} color="GREY_LIGTH_DARK">
            {format(new Date(createdAt), 'HH:mm')}
          </Atom.Text>
        </Atom.Container>
      </Atom.Container>

      <Row>
        <Atom.Text fontSize={14} color="DARK">Status: </Atom.Text>
        <Atom.Text fontSize={14} color="SECONDARY" fontWeight="bold">
          EM ANDAMENTO
        </Atom.Text>
      </Row>
    </Atom.Box>
  </Atom.Touch>

);

export default HistoryCard;
