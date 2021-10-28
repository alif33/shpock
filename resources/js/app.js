require('./bootstrap');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { BrowserRouter as Router } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';

const Container = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<Container />, document.getElementById('app'));
