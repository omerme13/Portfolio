import React from 'react';
import classes from './Project.css';

const project = props => (
    <div className={classes.project}>
        <a href={props.url}>
            <img src={props.imgSrc} alt={props.name}/>
        </a>
        <div className={classes.info}>
            <span>{props.name} - {props.children}</span>
        </div>
    </div>
)

export default project;