import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import jQuery from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css';
import 'magnific-popup/src/css/main.scss';

// import 'magnific-popup/src/js/ajax'; 
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './store/index'


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root')
);
