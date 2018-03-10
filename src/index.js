import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import styles from './index.scss';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
