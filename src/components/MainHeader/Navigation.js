import React, { useContext } from 'react';
/// import use Context

import AuthContext from '../../components/store/auth-context';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  // Create a variable to use the useContext hook
  // Add the Variable that you are refering to, esure that you are importing it above
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
