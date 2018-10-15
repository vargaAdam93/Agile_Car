import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AddUser from './Components/AddUser';
import LoginUser from './Components/LoginUser';
import IndexCars from './Components/ShowCars'

ReactDOM.render(<Router>
                <div>
                    <Route exact path='/' component={IndexCars} />
                    <Route path='/add-user' component={AddUser}/>
                    <Route path='/login' component={ LoginUser}/>
                </div>
            </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
