import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './scss/main.scss';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxPromise from "redux-promise";
import rootReducer from './reducers';

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(rootReducer)}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
