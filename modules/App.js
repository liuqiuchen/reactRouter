import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import NavLink from './NavLink';

export default class App extends Component {
    render () {
        return (<div>
                    <p>React Router Tutorial</p>
                    <ul role="nav">
                        <li><IndexLink to="/" activeStyle={{background:'pink'}} onlyActiveOnIndex={true}>Home</IndexLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/repo">Report</NavLink></li>
                    </ul>
                </div>)
    }
}