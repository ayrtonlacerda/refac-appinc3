/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { each, isEmpty } from 'lodash';
import { useCommons } from '../../../../hooks';
import { useForm } from '../../../../global';
// ui
import * as Atom from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';
import { FormBuilder } from '../../../../components/Templates';

import Estatico1 from '../../../../assets/estaticos1/estatico1.png';

import { subAreas as subAreasMocks } from '../../mocks';

// TODO: retirar options daqui e colocar no json de formulario molequa
const options = [
  {
    label: 'ADMINISTRAÇÃO',
    screen: 'Administration',
    subAreas: [
      'Recepção', 'Secretaria/Orientação', 'Diretoria',
      'Sala de Reunião dos Professores', 'Circulação', 'Almoxarifado',
      'Banheiro', 'Banheiro 2', 'Área Externa',
    ],
  },
  {
    label: 'AREA EXTERNA',
    screen: 'Forms',
  },
  {
    label: 'IMPLANTAÇÃO',
    screen: 'Administration',
    subAreas: [
      'Aspectos Gerais', 'Fossa séptica', 'Sumidouro',
      'Filtro Anaeróbico', 'Outro tipo',
    ],
  },
  {
    label: 'MULTIUSO',
    screen: 'Administration',
    subAreas: [
      'Sanitário PNE1', 'Sanitário 1', 'Sanitário PNE2',
      'Sanitário 2', 'Leitura Multiuso', 'Laboratório de informática', 'Rack', 'Cia Tel',
      'Cia Ele', 'Multiuso - Área externa',
    ],
  },
  {
    label: 'OBSERVAÇÕES',
    screen: 'Forms',
  },
  {
    label: 'PASSARELA',
    screen: 'Forms',
  },
  {
    label: 'PATIO COBERTO',
    screen: 'Forms',
  },
  {
    label: 'PEDAGOGIA 1',
    screen: 'Administration',
    subAreas: [
      'Creche 2', 'Repouso', 'Banheiro Creche 2',
      'Solarium 1', 'Creche 1', 'Repouso', 'Solarium 2',
      'Área externa',
    ],
  },
  {
    label: 'PEDAGOGIA 2',
    screen: 'Administration',
    subAreas: [
      'Creche-3 1', 'P2-Repouso 1', 'P2-Repouso 2', 'Creche-3 2',
      'P2-Solarium 1', 'Pré-escola 1', 'Pré-escola 2', 'P2-Solarium 2',
      'P2-Área externa',
    ],
  },
  {
    label: 'SERVIÇO',
    screen: 'Administration',
    subAreas: [
      'Área de serviço descoberta', 'Depósito',
      'Cozinha', 'Perecíveis', 'DML', 'Vestiário 01',
      'Vestiário feminino', 'Lavanderia e circulação', 'Rouparia',
      'Lactário', 'Caixa em alvenaria para abrigo das bombas de recalque',
      'Reservatório', 'Área externa',
    ],
  }];

const Estatica1 = ({ route }) => {
  const { navigation } = useCommons();
  const { mock, setKeysOfForm, keysOfForm } = useForm();

  // console.log('Teste mock:', mock.form);

  const { title } = route.params;

  const handleSetForm = React.useCallback((form) => {
    let keys = {};
    each(options, (local) => {
      each(local.subAreas, (subareas) => {
        if (subAreasMocks[subareas]) {
          each(subAreasMocks[subareas], (field) => {
            keys = {
              ...keys,
              [field.key]: null,
            };
          });
        }
      });
    });
    console.log({ keys });
    setKeysOfForm(keys);
  }, []);

  console.log({ isEmpty: isEmpty(keysOfForm) });

  React.useEffect(() => {
    if (isEmpty(keysOfForm)) handleSetForm();
  }, []);

  return (
    <Atom.Container>
      <Molecules.Header title={title} back />
      <Atom.Scroll noPaddingX>
        <Atom.Container variant="screen">
          <Atom.Container variant="viewSelection" flexDirection="row">
            <Atom.Ball size="XXBIG" text={1} />
            <Atom.Text ml={11} fontWeight={4} width="95%">
              Creche tipo B - 2009
            </Atom.Text>
          </Atom.Container>
          <Atom.Image src={Estatico1} />
          <Atom.Container variant="viewSelection" flexDirection="row">
            <Atom.Ball size="XXBIG" text={2} />
            <Atom.Text ml={11} fontWeight={4} width="95%">
              Qual local deseja analisar ?
            </Atom.Text>
          </Atom.Container>
          <Atom.Container variant="row" mt="5">
            <Atom.Container variant="column">
              {options.map((item, index) => index < 5 && (
                <Atom.Button
                  textButton={item.label}
                  mb="2"
                  type={2}
                  height="35"
                  textStyle={{
                    fontSize: 0,
                  }}
                  onPress={() => navigation.navigate(item.screen, item.screen === 'Forms' ? {
                    fields: mock.form.fields,
                    title: `${item.label}`,
                  } : { title: item.label, subAreas: item.subAreas })}
                />
              ))}
            </Atom.Container>
            <Atom.Container variant="column" pl="2">
              {options.map((item, index) => index >= 5 && (
                <Atom.Button
                  textButton={item.label}
                  mb="2"
                  type={2}
                  height="35"
                  textStyle={{
                    fontSize: 0,
                  }}
                  onPress={() => navigation.navigate(item.screen, item.screen === 'Forms' ? {
                    fields: mock.form.fields,
                    title: `${item.label}`,
                  } : { title: item.label, subAreas: item.subAreas })}
                />
              ))}
            </Atom.Container>
          </Atom.Container>

          <Atom.Button textButton="ENVIAR QUESTIONARIO" type={3} mb="35px" mt="35px" width="90%" ml="2" />
        </Atom.Container>
      </Atom.Scroll>
    </Atom.Container>
  );
};

export default Estatica1;
