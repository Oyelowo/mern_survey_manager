import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from './reducers';
import reduxThunk from "redux-thunk";
import axios from 'axios';
window.axios=axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.querySelector('#root'));

    console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
    console.log('Enviroment is', process.env.NODE_ENV);