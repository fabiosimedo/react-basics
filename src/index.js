import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-style.css';
import Home from './templates/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  //document.getElementById('root')
  document.querySelector('.divinha')
);




