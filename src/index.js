import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {reducer,reducer2} from './reducers/rootReducer'
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

const combinedReducers=combineReducers({
  reducer,
  reducer2,
})
const store=createStore(combinedReducers)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
