import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './containers/home.js'


ReactDOM.render(<Home />, document.getElementById('app'));
registerServiceWorker();
