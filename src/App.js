import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import { Dashboard } from './dashboard';
import Login from './login';
import Home from './home';
import Profile from './Profile';
import OrderHistory from './OrderHistory';
import PlaceOrder from './PlaceOrder';
import AuthRoute from './AuthRoute';
import {UserContext} from './UserContext';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Demo from './Demo';

let userdata = localStorage.getItem("userdata");
const isLoggedIn = userdata === null ? 0 : JSON.parse(userdata);

export default function App() {
    const [ user, setUser ] = useState(isLoggedIn);

    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{ user,setUser }}>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/demo" component={Demo} />
                    <Route exact path="/login">
                        {localStorage.getItem("userdata") ? <Redirect to="/home" /> : <Login />}
                    </Route>
                    <AuthRoute path="/order_history" component={OrderHistory} />
                    <AuthRoute path="/place_order" component={PlaceOrder} />
                    <AuthRoute path="/home" component={Home} />
                    <AuthRoute path="/profile" component={Profile} />
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>
    );
}