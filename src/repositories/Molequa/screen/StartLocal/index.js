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
import DB from '../../../../database';

import Estatico1 from '../../../../assets/estaticos1/estatico1.png';

import { subAreas as subAreasMocks } from '../../mocks';

// TODO: retirar options daqui e colocar no json de formulario molequa
const options = [
  {
    label: 'ADMINISTRAÇÃO',
    screen: 'Administration',
    subAreas: [
      'Recepção',
      'Secretaria/Orientação',
      'Diretoria',
      'Sala de Reunião dos Professores',
      'Circulação',
      'Almoxarifado',
      'Banheiro 1',
      'Banheiro 2',
      'Área Externa',
    ],
    image: 'PLANTA_DO_BLOCO_ADM',
  },
  {
    label: 'AREA EXTERNA',
    screen: 'Forms',
  },
  // {
  //   label: 'IMPLANTAÇÃO',
  //   screen: 'Administration',
  //   subAreas: [
  //     'Aspectos Gerais', 'Fossa séptica', 'Sumidouro',
  //     'Filtro Anaeróbico', 'Outro tipo',
  //   ],
  // },
  {
    label: 'MULTIUSO',
    screen: 'Administration',
    subAreas: [
      'Sanitário PNE1',
      'Sanitário 1',
      'Sanitário PNE2',
      'Sanitário 2',
      'Leitura Multiuso',
      'Laboratório de informática',
      'Rack',
      'Cia Tel',
      'Cia Ele',
      'Multiuso - Área externa',
    ],
    image: 'PLANTA_DO_BLOCO_MULTIUSO',
  },
  // {
  //   label: 'OBSERVAÇÕES',
  //   screen: 'Forms',
  // },
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
      'Creche 2',
      'Repouso 1',
      'Banheiro 1 Creche 2',
      'Solarium 1',
      'Fraldário 1',
      'Creche 1',
      'Repouso 2',
      'Fraldário 2',
      'Solarium 2',
      'P1 Área Externa',
    ],
    image: 'PLANTA_DO_BLOCO_PEDAGOGIA1',
  },
  {
    label: 'PEDAGOGIA 2',
    screen: 'Administration',
    subAreas: [
      'P2 Creche 3.1',
      'P2 Repouso 1',
      'P2 Repouso 2',
      'P2 Creche 3.2',
      'P2 Solarium 1',
      'Pré-escola 1',
      'P2 Solarium 2',
      'P2 Área externa',
    ],
    image: 'PLANTA_DO_BLOCO_PEDAGOGIA2',
  },
  {
    label: 'SERVIÇO',
    screen: 'Administration',
    subAreas: [
      'Área de serviço descoberta',
      'Depósito',
      'Cozinha',
      'Perecíveis',
      'DML',
      'Vestiário 01',
      'Vestiário feminino',
      'Lavanderia e circulação',
      'Rouparia',
      'Lactário',
      'Caixa em alvenaria para abrigo das bombas de recalque',
      'Reservatório',
      'Área externa',
    ],
    image: 'PLANTA_DO_BLOCO_SERVICO',
  },

  // creche c
  {
    label: 'Administração',
    screen: 'Administration',
    subAreas: [
      'Banheiro PNE Adulto Feminino',
      'Banheiro PNE Adulto Masculino',
      'Administração',
      'Almoxarifado - Administração',
      'Professores',
      'Área Externa - Administração',
    ],
  },
  {
    label: 'Área Externa ',
    screen: 'Administration',
    subAreas: [
      'Gás',
      'Caixa em Alvenaria (Abrigo de Bombas)',
      'Reservatório',
      'Layout',
      'Revestimento',
    ],
  },
  {
    label: 'Pátio Coberto e Refeitório - Creche Tipo C',
    screen: 'Administration',
    subAreas: ['Pátio Coberto', 'Refeitório'],
  },
  {
    label: 'Creche I e II',
    screen: 'Administration',
    subAreas: [
      'Creche I - Creche C',
      'Banho - Creche C',
      'Repouso - Creche C',
      'Solarium 1 - Creche C',
      'Creche II - Creche C',
      'Banheiro Creche II - Creche C',
      'Solarium II - Creche C',
      'Área Externa - Creche C',
    ],
  },
  {
    label: 'Vestiário',
    screen: 'Administration',
    subAreas: [
      'Vestiário 1',
      'Vestiário 2',
      'Quadra/Depósito',
      'Quadra/Área Externa',
    ],
  },
  {
    label: 'Serviço ',
    screen: 'Administration',
    subAreas: [
      'Carga e Descarga',
      'Cozinha - Creche C',
      'Despensa',
      'Lavanderia',
      'DML - Creche C',
      'Sanitário Feminino',
      'Sanitário Masculino',
      'Depósito - Creche C',
      'Multiuso e Informática',
      'S. T. Inf',
      'Copa Funcionários',
      'Higienização',
      'Lactário - Creche C',
      'Área externa - Serviço',
    ],
  },
  {
    label: 'Quadra Coberta',
    screen: 'Administration',
    subAreas: ['Quadra', 'Arquibancada', 'Pilares', 'Quadra/Área Externa'],
  },
  {
    label: 'Cobertura',
    screen: 'Administration',
    subAreas: ['Coberta'],
  },
  {
    label: 'Pré-escola ',
    screen: 'Administration',
    subAreas: [
      'Sanitário Feminino - Pré escola',
      'Creche III',
      'Solarium 1 - Pré escola',
      'Pré-escola',
      'Solarium 2 - Pré escola',
      'Sanitário Masculino - Pré escola',
      'Área externa - Pré escola',
    ],
  },
];

const Estatica1 = ({ route }) => {
  const { navigation } = useCommons();
  const {
    mock, setKeysOfForm, keysOfForm, currentExam,
  } = useForm();

  // console.log('Teste mock:', mock.form);

  const { title, offline } = route.params;

  console.log({ offline });

  const handleSetForm = React.useCallback(async (form) => {
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
    await DB.insert(currentExam, { keysOfForm: keys });
    setKeysOfForm(keys);
  }, []);

  const navigationAdministration = React.useCallback((item) => {
    navigation.navigate(item.screen, item.screen === 'Forms' ? {
      fields: [],
      title: `${item.label}`,
    } : {
      title: item.label,
      subAreas: item.subAreas,
      image: item.image,
    });
  });

  React.useEffect(() => {
    if (isEmpty(keysOfForm) && !offline) handleSetForm();
  }, []);

  return (
    <Atom.Container>
      <Molecules.Header title={title} back />
      <Atom.Scroll noPaddingX>
        <Atom.Container variant="screen">
          <Atom.Container variant="viewSelection" flexDirection="row">
            <Atom.Ball size="XXBIG" text={1} />
            <Atom.Text ml={11} fontWeight={4} width="95%">
              Creche tipo B - 2012
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
              {options.map(
                (item, index) => index < 4 && (
                  <Atom.Button
                    textButton={item.label}
                    mb="2"
                    type={2}
                    height="35"
                    textStyle={{
                      fontSize: 0,
                    }}
                    onPress={() => navigationAdministration(item)}
                  />
                ),
              )}
            </Atom.Container>
            <Atom.Container variant="column" pl="2">
              {options.map(
                (item, index) => index >= 4 && (
                  <Atom.Button
                    textButton={item.label}
                    mb="2"
                    type={2}
                    height="35"
                    textStyle={{
                      fontSize: 0,
                    }}
                    onPress={() => navigationAdministration(item)}
                  />
                ),
              )}
            </Atom.Container>
          </Atom.Container>

          <Atom.Button
            textButton="ENVIAR QUESTIONARIO"
            type={3}
            mb="35px"
            mt="35px"
            width="90%"
            ml="2"
          />
        </Atom.Container>
      </Atom.Scroll>
    </Atom.Container>
  );
};

export default Estatica1;
