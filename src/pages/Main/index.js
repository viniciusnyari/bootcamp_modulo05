import React from 'react';
import { Title } from './style';

// Criando um componetente do tipo função
function Main() {
  return (
    <Title error={false}>
      Main
      <small>Menor</small>
    </Title>
  );
}

export default Main;
