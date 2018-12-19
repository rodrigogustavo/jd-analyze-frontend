import React, { Component } from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import Skills from './Skills/Skills';

import './JdAnalyze.css';

class JdAnalyze extends Component {
    render () {
        return (
            <div className='JdAnalyze'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/skills/' activeClassName='active' exact>Skills</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-skill'
                            }}> Skills</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/skills' component={Skills}/>
                    <Route path='/' component={Skills}/>
                </Switch>
            </div>
        );
    }
}

export default JdAnalyze;