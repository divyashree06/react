import React, { useContext } from 'react';
import { AppContext } from './App';

const LoginGroup = () => {
    const [globalState, setGlobalState] = useContext(AppContext);

    const logOutUser = () => {
        setGlobalState({ ...globalState, loggedIn: false })
    }

    if(globalState.loggedIn) {
        return (
            <div>
                <div>Welcome back, {globalState.userName}</div>
                <button onClick={logOutUser} 
                className="btn btn-primary">Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <button className="btn btn-primary">Register</button>
                <button className="btn btn-primary">Log In</button>
            </div>
        )
    }
    
}

const NavBar = (prop) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="#">{prop.logo}</a>
            
            <LoginGroup />

            <div className="btn-group">
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary">About</button>
              <button className="btn btn-primary">Contact</button>
            </div>
        </nav>
    )
}

export default NavBar;