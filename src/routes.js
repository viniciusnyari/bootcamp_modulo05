// Esse roteador padrão que estamos acostumados - barra de endereço
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </switch>
    </BrowserRouter>
  );
}

// Tudo fica dentro de BrowserRouter que fará o redirecionamento que estamos
// acostumados na barra de endereço
// Usa-se 'Switch' para que ele faça apenas o direcionamento da página informada
// 'Route' são componentes - '/' indica root
