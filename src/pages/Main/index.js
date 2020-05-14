import React from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './style';

// Criando um componetente do tipo função
/*
//Aqui temos um exemplo mais aprimorado
//Aí tem que importar Title de ./style
function Main() {
  return (
    <Title error={false}>
      Main
      <small>Menor</small>
    </Title>
  );
}
*/

function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositório" />

        <SubmitButton disabled>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

export default Main;
