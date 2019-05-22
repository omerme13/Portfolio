import React, { Component } from 'react';
import classes from './Home.css';
import Icon from '../UI/Icon/Icon';

const home = () => (
    <div className={classes.home}>
        <div className={classes.content}>
            <h1>OMER MENACHEM</h1>
            <p>About me... hello everyone!...</p>
            <Icon name='logo-github' className={`${classes.git} ${classes.icons}`} link='https://github.com/omerme13'/>
            <Icon name='logo-linkedin' className={`${classes.linkedin} ${classes.icons}`} link='https://www.linkedin.com/in/omer-menachem-035b3b161/'/>
            <Icon name='logo-facebook' className={`${classes.facebook} ${classes.icons}`} link='https://www.facebook.com/omer.menachem.7'/>
        </div>
    </div>
)

export default home;