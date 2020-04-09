import React from 'react';
import 'react-awesome-slider/dist/styles.css';

import './App.css';
import Routes from './Routes';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './store/reducers/index'

const store = createStore(rootReducers, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
