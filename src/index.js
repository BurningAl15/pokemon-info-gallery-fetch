import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import App from './App';
import { PokemonProvider } from './components/PokemonContext';

ReactDOM.render(
  <PokemonProvider>
    <App />
  </PokemonProvider >,
  document.getElementById('root')
);
