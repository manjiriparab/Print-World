import React, { useContext, useState} from 'react';
import { useHistory } from "react-router";

import { NavLink, Redirect } from 'react-router-dom';

import axios from 'axios';
import {UserContext} from './UserContext';

export default function Login() {

    const {user, setUser} = useContext(UserContext);
    const [login, setLogin] = useState({
        email:'manjiri.parab@conspecture.com',
        password:'qwerty123',
    });
    let history = useHistory();

    function changeAction(e) {
        const {name, value} = e.target;
        setLogin({[name]:value});
    }
    
    function formSubmit(e) {
        e.preventDefault();
        axios
            .post("http://localhost/PrintPaperApi/login.php", login)
            .then(function(response){
    
                if (response.data.s === 1) {
                    localStorage.setItem("userdata", JSON.stringify(response.data.d));
                    setUser(response.data.d);
                    <Redirect push to="/home"/>
                    console.log("dffdg");
                } else {
                    alert(response.data.m);
                }
            })
            .catch(function(error) {
                alert(error);
        });
    }

    return (
        <div>
            <div className="login-box">
                <div className="lgbx">
                    <div className="login-header-box">
                        <NavLink to="/" className="tangerine-font-login">Print World</NavLink>
                    </div>
                    <div className="login-form">
                        <form onSubmit={formSubmit}>
                            <input 
                                onChange={changeAction} 
                                value={login.email} 
                                type="text" 
                                name="email" 
                                className="input-box" 
                                placeholder="Email"
                                required
                            />
                            <input 
                                onChange={changeAction} 
                                value={login.password} 
                                type="password" 
                                name="password" 
                                className="input-box" 
                                placeholder="Password"
                                required
                            />
                            <button type="submit" className="login-btn">Submit</button>
                        </form>
                        <br/><br/>
                        Don't have an account? <NavLink to="/" className="signup-link">Sign up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}