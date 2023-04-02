<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clean Modal</title>
</head>
<body>
  <h1>Clean Modal React Native</h1>
  <p>O Modal Clean é um componente personalizado que pode ser usado para criar um modal personalizado em seu    aplicativo React Native. Ele permite que você ajuste a altura do modal e exiba qualquer conteúdo dentro dele.</p>
<h4>Para usar o Modal Clean em seu projeto, siga as etapas abaixo:</h4>
  <p>1. Importe o componente para o seu arquivo React Native.</p>
  <p>2.Defina o estado do modal em seu componente pai.</p>
  <p><code>const [modalVisible, setModalVisible] = useState(false);
</code></p>
  <p>3. Crie uma função para alternar a visibilidade do modal.</p>
  <p><code>const toggleModal = () => {
  setModalVisible(!modalVisible);
};
</code></p>
  <p>4. Em seu componente pai, adicione um botão que irá disparar a função toggleModal.</p>
  <p><code>
</code><Button title="Abrir Modal" onPress={toggleModal}></Button></p>
  <p>5. Dentro do componente pai, crie o componente CleanModal e passe as props apropriadas.</p>
   <p><code><CleanModal isVisible={modalVisible} height={300}>
  <Text>Conteúdo do Modal aqui</Text>
</CleanModal>
</code></p>
  <p>O prop isVisible controla a visibilidade do modal e o prop height define a altura do modal. É possível ajustar a altura do modal conforme a necessidade do seu projeto.

Observação: O componente CleanModal também pode ser personalizado usando a prop children para incluir qualquer conteúdo que desejar.</p>

<h4>Aqui está um exemplo completo de como usar o Modal Clean em seu projeto React Native:</h4>
  <code>
import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { CleanModal } from './components/CleanModal';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <Button title="Abrir Modal" onPress={toggleModal}></Button>
      <CleanModal isVisible={modalVisible} height={300}>
        <Text>Conteúdo do Modal aqui</Text>
        <Button title="Fechar" onPress={toggleModal}></Button>
      </CleanModal>
    </>
  );
};

export default App;


</code>
  
</body>
</html>
