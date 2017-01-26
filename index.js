import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import App from './modules/App';
import About from './modules/About';
import Repo from './modules/Repo';
import Home from './modules/Home';

render((
    /*package.json 的 script里面需要配置 --history-api-fallback */
        <Router history={browserHistory} location="hash">
            <Route path="/" component={App}>

                {/* add it here, as a child of '/' */}
                <IndexRoute component={Home} />

                {/* add the routes here */}
                <Route path="/repo" component={Repo} />
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    ),
    document.getElementById('app'));
