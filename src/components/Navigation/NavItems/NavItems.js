import React from 'react';

import NavItem from './NavItem/NavItem';
import classes from './NavItems.css';

const navItems = props => (
    <ul className={classes.navItems} onClick={props.clicked}>
        <NavItem link="/" exact>Home</NavItem>
        <NavItem link="/about">About Me</NavItem>
        <NavItem link="/work">Work</NavItem>
        <NavItem link="/contact">Contact Me</NavItem>
    </ul>
);

export default navItems;