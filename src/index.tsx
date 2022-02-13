import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
// import { Provider } from 'react-redux';
// import {createStore, compose} from 'redux';
// import reducers from './redux/reducers'

// import './styles/stylesheet.css';

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
    // <Provider store={store}>
    <AppRouter />,
    // </Provider>,
    document.getElementById('root')
);
