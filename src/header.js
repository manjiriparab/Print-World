import React, { useContext } from 'react';
import { NavLink,useHistory, Redirect } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {UserContext} from './UserContext';

export default function Header() {

    const { user, setUser } = useContext(UserContext);
    let history = useHistory();

    function logoutAction(e) {
        e.preventDefault();
        localStorage.removeItem("userdata");
        setUser(0);
        history.push('/');
    }

    return (
        <div className="header-row">
            <NavLink to="/" className="tangerine-font">Print World</NavLink>
            { user === 0 
                ?   <NavLink to="/login" className="login-div">Sign In</NavLink>
                :   (<div className="login-title">
                        <span className="username">Welcome {user.name}</span>
                        <NavLink to="/profile">
                            <img src="./pri.jpg" alt="profile" className="profile"/>
                        </NavLink>
                        <span className="logout"><ExitToAppIcon onClick={logoutAction}/></span>
                    </div>)
            }
        </div>
    )
}
