import React from 'react';

// import { Container } from './styles';
// o parâmetro está dentro dessa variável 'match'
function Repository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}

export default Repository;
