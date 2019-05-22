import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.css';

const navItems = props => (
    <ul className={classes.navItems} onClick={props.clicked}>
        <NavItem link="/" exact>Home</NavItem>
        <NavItem link="/work">Work</NavItem>
        <NavItem link="/about">About</NavItem>
        <NavItem link="/contact">Contact Me</NavItem>
    </ul>
);

export default navItems;