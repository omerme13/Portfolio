import React from 'react';

import classes from './SkillItem.css';

const skillItem = props => (
    <div className={classes.skillItem}>
        <h4>{props.name}</h4>
        <div className={`${classes.bars} ${classes.barContainer}`}>
            <div className={`${classes.bars} ${classes.bar}`} style={{maxWidth: props.children, left: 0}}>
            {props.children}
        </div>
    </div>    
        
    </div>
)

export default skillItem;