import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {ContextProvider} from './contexts/ContextProvider';
import { Provider } from "react-redux";


import store from './app/store'


ReactDOM.render(
    <ContextProvider>
        <Provider store={store}>
    <App />
    </Provider>
    </ContextProvider>
    ,document.getElementById('root'));
