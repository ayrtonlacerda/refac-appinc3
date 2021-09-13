import React, { useCallback, useState } from 'react';
import  calculeByFormula from './util';
import {
  Container,
  Text,
  Input,
  Button,
  Scroll
} from '../../../../components/Atom';

import { Header } from '../../../../components/Molecules';
const Dynamic = () => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [valueD, setValueD] = useState("");
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("...");

  const onPressCalcule = useCallback(()=>{
      setResult(calculeByFormula(formula,valueA,valueB,valueC,valueD));
  },[formula,valueA,valueB,valueC,valueD])

  const onPressClean = useCallback(() => {
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setFormula("");
    setResult("...");
  },[formula,valueA,valueB,valueC,valueD])

  return (
    <>
      <Header title="Fórmula dinamica"/>
      <Scroll mb={5}>
      <Container p={2} alignItems="flex-start" fontWeight={1}>
      <Container pl={8} variant="justRow" >
      <Text marginRight="15px" fontSize={2} fontWeight={3} color="black" mb={4} fontWeight="bold" >
          A 
        </Text>
        <Input
          mb={20}
          width={265}
          value={valueA}
          onChangeText={(text) => {setValueA(Number(text))}}
          keyboardType="numeric"
        />
        </Container>
        <Container pl={8} variant="justRow" >
      <Text marginRight="15px" fontSize={2} fontWeight={3} color="black" mb={4} fontWeight="bold" >
          B
        </Text>
        <Input
          mb={20}
          width={265}
          value={valueB}
          onChangeText={(text) => {setValueB(Number(text))}}
          keyboardType="numeric"
        />
        </Container>
        <Container pl={8} variant="justRow" >
      <Text marginRight="15px" fontSize={2} fontWeight={3} color="black" mb={4} fontWeight="bold" >
          C 
        </Text>
        <Input
          mb={20}
          width={265}
          value={valueC}
          onChangeText={(text) => {setValueC(Number(text))}}
          keyboardType="numeric"
        />
        </Container>
        <Container pl={8} variant="justRow" marginLeft="15px" >
      <Text marginRight="15px" fontSize={2} fontWeight={3} color="black" mb={4} fontWeight="bold" >
          D
        </Text>
        <Input
          mb={20}
          width={265}
          value={valueD}
          onChangeText={(text) => {setValueD(Number(text))}}
          keyboardType="numeric"
        />
        </Container>
        <Container variant="justRow" >
      <Text marginRight="15px" fontSize={2} fontWeight={3} color="black" mb={4} fontWeight="bold" >
          Fórmula 
        </Text>
        <Input
          mb={20}
          width={250}
          value={formula}
          onChangeText={(text) => {setFormula(String(text))}}
        />
        </Container>
        <Container variant="justRow" >
      <Text marginRight="15px" fontSize={2} fontWeight={3} color="black" mb={4} fontWeight="bold" >
          Resultado 
        </Text>
        <Input
          editable={false}
          mb={20}
          width={235}
          value={result}
          onChangeText={(_text) => {}}
        />
        </Container>
       <Button
            mb={2}
            textButton="CALCULAR"
            onPress={onPressCalcule}
          />
       <Button
            mb={2}
            textButton="LIMPAR"
            onPress={onPressClean}
            outline
          />
      </Container>
    </Scroll>
    </>
  );
};

export default Dynamic;
