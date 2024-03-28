import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import GlobalStyle, { Container } from './styles';
import store from './store';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastrar />
  }
])

function App() {
  return (
    <Provider store={store}>
      <Container>
        <GlobalStyle />
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App;
