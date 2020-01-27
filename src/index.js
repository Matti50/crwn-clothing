import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';

//Le da toda la funcionalidad del router a nuestra app al envolverla asi
ReactDOM.render(
<BrowserRouter> 
    <App />
</BrowserRouter>, document.getElementById('root'));
