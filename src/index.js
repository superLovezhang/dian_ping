import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import store from './store/store';


ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <Route path="/" component={App}></Route>
    </HashRouter>
</Provider>, document.getElementById('root'));

