import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window === "object"
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middlewares = applyMiddleware(thunk);

const store = createStore(rootReducer, composeEnhancers(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
