import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import '../node_modules/normalize-css/normalize.css';
import './styles/css/main.css'
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
