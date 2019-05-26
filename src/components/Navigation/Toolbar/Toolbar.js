import React from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems';
import Icon from '../../UI/Icon/Icon';

const toolbar = (props) => (
    <header className={classes.toolbar} style={{background: props.color}}>
        <div className={classes.mobileOnly}>
            <Icon name="menu" clicked={props.open} color='#fff'/>
        </div>

        <nav className={classes.desktopOnly} >
            <NavItems/>
        </nav>
    </header>
);

export default toolbar;