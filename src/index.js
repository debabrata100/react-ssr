import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const app = (<BrowserRouter><App /></BrowserRouter>);

hydrate(app, document.querySelector('#root'));