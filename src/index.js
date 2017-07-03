import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import App from './App';
import App from './Pomodoro';
// import Clock from './clock'
// import TestClock from './try2'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
