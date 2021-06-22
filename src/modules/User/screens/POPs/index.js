import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';
import {
  TitleView, Line, ModalView, ModalContainer, ModalContainerOptions,
} from './styles';

import db from '../../../../database';

import { api } from '../../../../service';

import * as Atoms from '../../../../components/Atom';
import * as Molecules from '../../../../components/Molecules';
import * as Organisms from '../../../../components/Organisms';

const POPs = () => {
  const [viewSelection, setViewSelection] = useState({
    firstPage: true,
    secondPage: false,
    firstPicker: null,
    area: null,
    class: null,
    subclass: null,
    finalSelected: null,
    repeated: [],
    needAtt: [],
    needAttDownloaded: [],
    downloadedPops: null,
    modalName: null,
    boxView: true,
  });

  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const [thirdSelection, setThirdSelection] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalOptions, setModalOptions] = useState(false);

  // FUNÇÕES EXECUTADAS ASSIM QUE A PÁGINA É RENDERIZADA
  const handleRequisition = async () => {
    const response = await api.get('hierarchy');
    if (response.status === 200) {
      setViewSelection((prevState) => ({ ...prevState, firstPicker: response.data }));
      handlePopulatePicker();
    }
  };

  const checkDb = async () => {
    const todosDocs = await db.all();
    console.log({ todosDocs });
    const docsCheck = todosDocs.rows.filter((item) => item.id === 'downloaded_pop');
    if (docsCheck.length === 0) {
      const docAux = await db.create({ data: [] }, 'downloaded_pop');
    } else {
      const docsFilter = todosDocs.rows.filter((item) => item.id === 'downloaded_pop');
      const downloadedPops = docsFilter.map((item) => item.doc.data);
      console.log('Teste', docsFilter[0].doc.data.length);
      if (docsFilter[0].doc.data.length <= 0) {
        setViewSelection((prevState) => ({ ...prevState, downloadedPops }));
      } else {
        setViewSelection((prevState) => ({ ...prevState, downloadedPops, boxView: false }));
      }
    }
  };

  useEffect(() => {
    handleRequisition();
    checkDb();
  }, []);
  // FIM FUNÇÕES EXECUTADAS ASSIM QUE A PÁGINA É RENDERIZADA

  // PRIMEIRA ABA DA PÁGINA
  const handlePopulatePicker = () => {
    let area = viewSelection.firstPicker.map((item) => item.area);
    area = [...new Set(area)].map((item) => ({ name: `Área ${item}`, value: item }));
    setViewSelection((prevState) => ({ ...prevState, area }));
  };

  useEffect(() => {
    if (viewSelection.firstPicker) { handlePopulatePicker(); }
  }, [viewSelection.firstPicker]);

  useEffect(() => {
    if (firstSelection) {
      let classe = viewSelection.firstPicker.filter((item) => item.area === `${firstSelection.value}`);
      classe = classe.map((item) => item.class);
      classe = [...new Set(classe)].map((item) => ({ name: `Classe ${item}`, value: item }));
      setViewSelection((prevState) => ({ ...prevState, class: classe }));
      setSecondSelection(null);
      setThirdSelection(null);
    }
  }, [firstSelection]);

  useEffect(() => {
    if (secondSelection) {
      let subclass = viewSelection.firstPicker.filter((item) => item.class === `${secondSelection.value}`);
      subclass = subclass.map((item) => item.subclass);
      subclass = [...new Set(subclass)].map((item) => ({ name: `Sub-classe ${item}`, value: item }));
      setViewSelection((prevState) => ({ ...prevState, subclass }));
      setThirdSelection(null);
    }
  }, [secondSelection]);

  useEffect(() => {
    if (thirdSelection) {
      const cards = viewSelection.firstPicker.filter(
        (item) => item.area === `${firstSelection.value}`
          && item.class === `${secondSelection.value}`
          && item.subclass === `${thirdSelection.value}`,
      );
      setViewSelection((prevState) => ({ ...prevState, finalSelected: cards }));
    }
  }, [thirdSelection]);

  // Conferir se os POPs já estão baixados ou precisam ser atualizados(somente aviso caso precise de atualização)!
  const checkDownloadedPops = async () => {
    const todosDocs = await db.all();
    const docsFilter = todosDocs.rows.map((item) => item.id);
    const popsFilter = viewSelection.finalSelected.map((item) => item.name);
    for (let i = 0; i < docsFilter.length; i++) {
      for (let j = 0; j < popsFilter.length; j++) {
        if (docsFilter[i] === popsFilter[j]) {
          setViewSelection((prevState) => ({
            ...prevState,
            repeated: [...prevState.repeated, popsFilter[j]],
            needAtt: [...viewSelection.needAtt],
          }));
          const docsVersionFilter = todosDocs.rows.filter((item) => item.id === docsFilter[i]);
          const popsVersionFilter = viewSelection.finalSelected.filter((item) => item.name === popsFilter[j]);
          if (docsVersionFilter[0].doc.version !== popsVersionFilter[0].version) {
            setViewSelection((prevState) => ({
              ...prevState,
              repeated: [...prevState.repeated, popsFilter[j]],
              needAtt: [...prevState.needAtt, popsFilter[j]],
            }));
          }
        }
      }
    }
  };

  useEffect(() => {
    if (viewSelection.finalSelected) {
      checkDownloadedPops();
    }
  }, [viewSelection.finalSelected]);

  const downloadPop = async (id) => {
    try {
      const response = await api.get(`pops/${id}`);
      console.log('Teste', response.data[0]);
      const createDoc = await db.create(response.data[0], response.data[0].name);
      const insertDocAux = await db.insertArray('downloaded_pop', {
        name: response.data[0].name,
        form: {
          name: response.data[0].name,
          title: response.data[0]?.title,
          version: response.data[0].version,
          area: response.data[0].area,
          class: response.data[0].class,
          subclass: response.data[0].subclass,
          details: response.data[0].details,
          steps: response.data[0].data,
        },
      });
      checkDownloadedPops();
    } catch (err) {
      console.log(err);
    }
  };
  // FIM PRIMEIRA ABA DA PÁGINA

  // SEGUNDA ABA DA PÁGINA
  const renderDownloadedPops = async () => {
    const todosDocs = await db.all();
    const docsFilter = todosDocs.rows.filter((item) => item.id === 'downloaded_pop');
    console.log({ docsFilter });
    const downloadedPops = docsFilter.map((item) => item.doc.data);
    setViewSelection((prevState) => ({ ...prevState, downloadedPops }));
    const checkDownloadedPopsVersion = downloadedPops[0].map((item) => item.name);
    const comparePopsVersions = viewSelection.firstPicker.map((item) => item.name);
    for (let i = 0; i < checkDownloadedPopsVersion.length; i++) {
      for (let j = 0; j < comparePopsVersions.length; j++) {
        if (checkDownloadedPopsVersion[i] === comparePopsVersions[j]) {
          const docsVersionFilter = todosDocs.rows.filter((item) => item.id === checkDownloadedPopsVersion[i]);
          const popsVersionFilter = viewSelection.firstPicker.filter((item) => item.name === comparePopsVersions[j]);
          if (docsVersionFilter[0].doc.version !== popsVersionFilter[0].version) {
            setViewSelection((prevState) => ({
              ...prevState,
              needAttDownloaded: [...prevState.needAttDownloaded, comparePopsVersions[j]],
            }));
            // console.log({ viewSelection });
          }
        }
      }
    }
  };
  useEffect(() => {
    if (viewSelection.secondPage) {
      checkDb();
      renderDownloadedPops();
    }
  }, [viewSelection.secondPage]);

  const deletePop = async (id) => {
    setViewSelection((prevState) => ({ ...prevState, modalName: id }));
    setModalDelete(true);
  };

  const optionsPop = async (id) => {
    setViewSelection((prevState) => ({ ...prevState, modalName: id }));
    setModalOptions(true);
  };
  // FIM SEGUNDA ABA DA PÁGINA

  console.log(viewSelection.boxView);

  return (
    <>
      {
        modalDelete && (
          <Modal animationType="fade" transparent visible>
            <ModalView>
              <ModalContainer>
                <Atoms.Icon type="trash" size="xbig" color="BLACK" />
                <Atoms.Text mt={2} style={{ textAlign: 'center' }}>
                  Deseja remover o POP
                  {' '}
                  {viewSelection.modalName}
                  {' '}
                  ?
                </Atoms.Text>
                <Atoms.Button camera type={1} textButton="REMOVER" mt={5} />
                <Atoms.Button camera type={4} textButton="CANCELAR" mt={3} onPress={() => setModalDelete(false)} />
              </ModalContainer>
            </ModalView>
          </Modal>
        )
      }
      {
        modalOptions && (
          <Modal animationType="fade" transparent visible>
            <ModalView>
              <ModalContainerOptions>
                <Atoms.Icon type="information" size="xbig" color="BLACK" />
                <Atoms.Text mt={1} style={{ textAlign: 'center' }}>
                  Percebemos que há uma atualização para este POP!
                </Atoms.Text>
                <Atoms.Text mt={2} style={{ textAlign: 'center' }}>
                  Deseja atualizar ou remover
                  {' '}
                  {viewSelection.modalName}
                  ?
                </Atoms.Text>
                <Atoms.Button camera type={3} textButton="ATUALIZAR" mt={5} />
                <Atoms.Button camera type={1} textButton="REMOVER" mt={3} />
                <Atoms.Button camera type={4} textButton="CANCELAR" mt={3} onPress={() => setModalOptions(false)} />
              </ModalContainerOptions>
            </ModalView>
          </Modal>
        )
      }
      <Molecules.Header title="Gerenciador de POPs" />
      <Molecules.HeaderSelection
        first={viewSelection.firstPage}
        second={viewSelection.secondPage}
        firstSelection={() => setViewSelection((prevState) => ({ ...prevState, firstPage: true, secondPage: false }))}
        secondSelection={() => setViewSelection((prevState) => ({ ...prevState, secondPage: true, firstPage: false }))}
      />

      {
        viewSelection.firstPage && (
          <Atoms.Scroll p={2}>
            <TitleView>
              <Atoms.Ball size="SMALL" />
              <Atoms.Text ml={1}>Selecione a área desejada</Atoms.Text>
            </TitleView>
            <Organisms.Picker
              value={firstSelection}
              onChangeOption={setFirstSelection}
              options={viewSelection.area || ['Carregando...']}
            />
            {firstSelection && (
              <>
                <TitleView>
                  <Atoms.Ball size="SMALL" />
                  <Atoms.Text ml={1}>Selecione a classe desejada</Atoms.Text>
                </TitleView>
                <Organisms.Picker
                  value={secondSelection}
                  onChangeOption={setSecondSelection}
                  options={viewSelection.class || ['Carregando...']}
                />
              </>
            )}
            {
              secondSelection && (
                <>
                  <TitleView>
                    <Atoms.Ball size="SMALL" />
                    <Atoms.Text ml={1}>Selecione a sub-classe desejada</Atoms.Text>
                  </TitleView>
                  <Organisms.Picker
                    value={thirdSelection}
                    onChangeOption={setThirdSelection}
                    options={viewSelection.subclass || ['Carregando...']}
                  />
                  <Line />
                </>
              )
            }
            {
              thirdSelection && (
                viewSelection.finalSelected?.map((item) => (
                  <Molecules.PopCard
                    pop={item.name}
                    downloaded={(viewSelection.repeated?.filter((teste) => teste === item.name).length > 0)}
                    needAtt={(viewSelection.needAtt?.filter((teste) => teste === item.name).length > 0)}
                    disabled
                    version={item.version}
                    handlePress={() => downloadPop(item.id)}
                  />
                )
                )
              )
            }
          </Atoms.Scroll>
        )
      }
      {
        viewSelection.secondPage && (
          <Atoms.Scroll variant="modal" p={2}>
            {
              viewSelection.downloadedPops && (
                viewSelection.downloadedPops[0]?.map((item) => (
                  <Molecules.PopCard
                    pop={item.form.name}
                    version={item.form.version}
                    handlePress={() => ((viewSelection.needAttDownloaded?.filter((teste) => teste === item.form.name).length === 0)
                      ? deletePop(item.form.name)
                      : optionsPop(item.form.name)
                    )}
                    downloaded
                    needAtt={(viewSelection.needAttDownloaded?.filter((teste) => teste === item.form.name).length > 0)}
                    remove={(viewSelection.needAttDownloaded?.filter((teste) => teste === item.form.name).length === 0)}
                    disabled={false}
                  />
                )))
            }
            {
              viewSelection.boxView && (
                <Atoms.Box mt="5" style={{ height: 150 }}>
                  <Atoms.Text style={{ textAlign: 'center' }}>
                    Não há nenhum POP baixado até o momento. Faça o download dos POPs na aba "Baixar POPs"!
                  </Atoms.Text>
                </Atoms.Box>
              )
            }

          </Atoms.Scroll>
        )
      }
    </>
  );
};

export default POPs;
