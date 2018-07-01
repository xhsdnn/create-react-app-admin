import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Login from './activity/Login';
import Register from './activity/Register';
import NotFound from './activity/NotFound';
import Home from './activity/Home';

import './base.css';
// 引入antd组件库
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

// 引入redux
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/404" component={NotFound} />
                <Route path="/home" component={Home} />
                <Redirect from="/" to="/login" />
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
