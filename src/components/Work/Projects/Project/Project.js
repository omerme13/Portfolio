import React from 'react';
import classes from './Project.css';

import Icon from '../../../UI/Icon/Icon';

const project = props => (
    <div className={classes.project}>
        <img src={props.imgSrc} alt={props.name}/>
        <h4 className={classes.name}>
            {props.name}
        </h4>
        <div className={classes.info}>
            {props.children}
        </div>
        <div className={classes.icons}>
            <Icon name="globe" color="blue" link={props.url} />
            <Icon name="logo-github" color="#333" link={props.gitUrl} />
        </div>
    </div>
)

export default project;