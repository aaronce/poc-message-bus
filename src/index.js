import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import MessageBus from './components/MessageBus'

ReactDOM.render(<MessageBus />, document.getElementById('messagebus'));

// Apps.
const reactComponents = document.querySelectorAll('[id="app"]')
for (let i = 0; i < reactComponents.length; i += 1) {
    ReactDOM.render(<App />, reactComponents[i])
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
