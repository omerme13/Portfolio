import React from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import Icon from '../../UI/Icon/Icon';

const toolbar = (props) => (
    <header className={classes.toolbar}>
        <div className={classes.mobileOnly}>
            <Icon name="menu" clicked={props.open} color='#f1c40f'/>
        </div>

        <nav className={classes.desktopOnly}>
            <NavItems/>
        </nav>
    </header>
);

export default toolbar;