import React from 'react';
import { Box, Text, Icon } from '../../Atom';
import {
  Row, Card, Column, IconView,
} from './styles';

const PopCard = ({
  pop, version, handlePress, remove, downloaded, needAtt, disabled,
}) => (
    <Card
      onPress={handlePress}
      disabled={(downloaded || needAtt) && disabled}
      opacity={(downloaded || needAtt) && disabled}
      downloaded={downloaded}
      needAtt={needAtt}
    >
      <Box alignItems="flex-start" p={4} mb={2}>
        <Row>
          <Column>
            <Text fontWeight="4">{pop}</Text>
            <Row>
              <Text color="GREY_DARK">Versão: </Text>
              <Text color="GREY_DARK">{version}</Text>
            </Row>
            {
              downloaded && !needAtt && (
                <Text color="GREEN">Baixado</Text>
              )
            }
            {
              needAtt && downloaded && (
                <Text color="YELLOW">Atualização disponível</Text>
              )
            }
          </Column>
          <IconView>
            {
              !downloaded && !needAtt && (
                <Icon color="BLACK" size="xbig" type="download" onClickIcon={handlePress} />
              )
            }
            {
              downloaded && !needAtt && !remove && (
                <Icon color="GREEN" size="xbig" type="check" onClickIcon={handlePress} />
              )
            }
            {
              downloaded && needAtt && (
                <Icon color="BLACK" size="xbig" type="information" onClickIcon={handlePress} />
              )
            }
            {
              remove && downloaded && (
                <Icon color="RED" size="xbig" type="remove" onClickIcon={handlePress} />
              )
            }
          </IconView>
        </Row>
      </Box>
    </Card>
  );

export default PopCard;
