import React, { useState, useCallback, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { denatran, fipe } from '../../../service';
import * as Atom from '../../Atom';
import Picker from '../Picker';

import {
  TitleView,
  RowView,
} from './styles';

const Vehicle = ({
  keyField,
  value,
  onChange,
}) => {
  const [loading, setLoading] = useState({
    loadingDenatran: false,
    loadingFipe: false,
  });
  // const [plate, setPlate] = useState();
  const [selection, setSelection] = useState({
    optionsSecond: null,
    secondSelection: null,
    optionsThird: null,
    optionsFourth: null,
  });
  const [FirstSelection, setFirstSelection] = useState();
  const [SecondSelection, setSecondSelection] = useState(null);
  const [ThirdSelection, setThirdSelection] = useState(null);
  const [FourthSelection, setFourthSelection] = useState(null);
  const { loadingDenatran, loadingFipe } = loading;
  const { optionsSecond, optionsThird, optionsFourth } = selection;

  const { denatranInfo, fipeInfo, plate } = value || [];

  const handleDenatran = async () => {
    setLoading((prevState) => ({ ...prevState, loadingDenatran: true }));
    try {
      const response = await denatran.get(plate);
      // setDenatranInfo(response.data);
      setLoading((prevState) => ({ ...prevState, loadingDenatran: false }));
      onChange(keyField, { ...value, denatranInfo: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const handleBrandPopulateArray = useCallback((brand) => {
    setSelection((prevState) => ({ ...prevState, optionsSecond: brand }));
  }, [selection]);

  const handleModelPopulateArray = useCallback((model) => {
    setSelection((prevState) => ({ ...prevState, optionsThird: model }));
  }, [selection]);

  const handleYearPopulateArray = useCallback((year) => {
    setSelection((prevState) => ({ ...prevState, optionsFourth: year }));
  }, [selection]);

  const handleBrand = async () => {
    try {
      const response = await fipe.get(`${FirstSelection}/marcas.json`);
      handleBrandPopulateArray(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleModel = async () => {
    try {
      const response = await fipe.get(`${FirstSelection}/veiculos/${SecondSelection.id}.json`);
      handleModelPopulateArray(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleYear = async () => {
    try {
      const response = await fipe.get(`${FirstSelection}/veiculo/${SecondSelection.id}/${ThirdSelection.id}.json`);
      handleYearPopulateArray(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFipe = async () => {
    setLoading((prevState) => ({ ...prevState, loadingFipe: true }));
    try {
      const response = await fipe.get(`${FirstSelection}/veiculo/${SecondSelection.id}/${ThirdSelection.id}/${FourthSelection.id}.json`);
      setLoading((prevState) => ({ ...prevState, loadingFipe: false }));
      onChange(keyField, { ...value, fipeInfo: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setSelection((prevState) => ({ ...prevState, optionsSecond }));
  }, [optionsSecond]);

  useEffect(() => {
    setSelection((prevState) => ({ ...prevState, optionsThird }));
  }, [optionsThird]);

  useEffect(() => {
    setSelection((prevState) => ({ ...prevState, optionsFourth }));
  }, [optionsFourth]);

  useEffect(() => {
    if (FirstSelection) {
      handleBrand();
    }
  }, [FirstSelection]);

  useEffect(() => {
    if (SecondSelection) {
      handleModel();
    }
  }, [SecondSelection]);

  useEffect(() => {
    if (ThirdSelection) {
      handleYear();
    }
  }, [ThirdSelection]);

  useEffect(() => {
    if (FourthSelection) {
      handleFipe();
    }
  }, [FourthSelection]);

  return (
    <>
      <TitleView>
        <Atom.Ball size="SMALL" />
        <Atom.Text ml={1}>Denatran</Atom.Text>
      </TitleView>
      <Atom.Input
        placeholder="Placa do veículo"
        mb={3}
        onChangeText={(text) => (onChange(keyField, { ...value, plate: text }))}
        value={plate}
      />
      {denatranInfo && (
        <>
          <Atom.Box mb={3}>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Placa: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{denatranInfo.placa}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Marca: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{denatranInfo.marca}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Modelo: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{denatranInfo.modelo}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Procedência: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{denatranInfo.procedencia}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Ano Fabricação/Modelo: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>
                {denatranInfo.ano_fab}
                /
                {denatranInfo.ano_mod}
              </Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Chassi: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{denatranInfo.chassi}</Atom.Text>
            </RowView>
          </Atom.Box>
        </>
      )}
      {loadingDenatran ? (
        <Atom.Button type={2} mb={5} textButton="CARREGANDO..." />
      ) : (
          <Atom.Button type={2} mb={5} textButton="CONSULTAR DENATRAN" onPress={handleDenatran} />
        )}
      <TitleView>
        <Atom.Ball size="SMALL" />
        <Atom.Text ml={1}>FIPE</Atom.Text>
      </TitleView>
      <Picker
        value={FirstSelection}
        onChangeOption={setFirstSelection}
        options={[
          'Carro',
          'Moto',
          'Caminhão',
        ]}
      />
      {FirstSelection && (
        <Picker
          value={SecondSelection === null ? 'Escolha uma opção' : SecondSelection.fipe_name}
          onChangeOption={setSecondSelection}
          options={optionsSecond || ['Carregando...']}
        />
      )}
      {
        SecondSelection && (
          <Picker
            value={ThirdSelection === null ? 'Escolha uma opção' : ThirdSelection.fipe_name}
            onChangeOption={setThirdSelection}
            options={optionsThird || ['Carregando...']}
          />
        )
      }
      {
        ThirdSelection && (
          <Picker
            value={FourthSelection === null ? 'Escolha uma opção' : FourthSelection.name}
            onChangeOption={setFourthSelection}
            options={optionsFourth || ['Carregando...']}
          />
        )
      }
      {
        loadingFipe ? (
          <ActivityIndicator size={25} color="#123098" />
        ) : (fipeInfo && (
          <Atom.Box mb={3}>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Referência: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{fipeInfo.referencia}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Informações: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1} style={{ flex: 1 }}>{`${fipeInfo.marca} / ${fipeInfo.veiculo} / ${fipeInfo.ano_modelo}`}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Preço: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{fipeInfo.preco}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Combustível: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{fipeInfo.combustivel}</Atom.Text>
            </RowView>
            <RowView>
              <Atom.Text fontSize={2} fontWeight={3}>Código FIPE: </Atom.Text>
              <Atom.Text fontSize={2} fontWeight={1}>{fipeInfo.fipe_codigo}</Atom.Text>
            </RowView>
          </Atom.Box>
        ))
      }
    </>
  );
};

export default Vehicle;
