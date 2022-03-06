import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Todocontainer from './components/todocontainer';
import {ContextClass} from './todoContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <ContextClass>
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    <Todocontainer />
    </BrowserRouter>
    </ContextClass>
  </>,
  document.getElementById('root')
);
reportWebVitals();
