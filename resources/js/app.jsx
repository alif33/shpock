require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux'
import { store, persistor } from './src/store'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient()

const Container = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
            <Router>
                <App />
            </Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<Container />, document.getElementById('app'));
