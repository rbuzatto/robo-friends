import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // provider passes the store props with the store value
import { createStore } from 'redux';
import 'tachyons';

import './index.css';
import App from './containers/App';
import { searchRobots } from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(searchRobots, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
