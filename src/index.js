import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import Page from './containers/Page';
import * as serviceWorker from './serviceWorker';

const page = (
    <BrowserRouter basename="/omer/">
        <Page />
    </BrowserRouter>
);

ReactDOM.render(page, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
