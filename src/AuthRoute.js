import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute = ({ component: Component, ...rest }) => 
(
    <Route
    {...rest}
    render = { (props) => 
        
            localStorage.getItem("userdata") ? 
            (
                <Component {...props}/>
            ) : 
            <Redirect to="/login" />
        } 
    />
)
export default AuthRoute;