import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header className="header">
        <h1>Expensify App </h1>
        <NavLink to="/" className="link" activeClassName="is-active" exact={true}>HomePage</NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/create" className="link" activeClassName="is-active">Add Expense</NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/help" className="link" activeClassName="is-active">Help</NavLink>
    </header>
);

export default Header;
