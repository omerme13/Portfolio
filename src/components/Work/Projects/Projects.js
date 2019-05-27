import React from 'react';

import classes from './Projects.css';
import Project from './Project/Project';
import food from '../../../assets/img/food.jpg';

const projects = () => (
    <div className={classes.projects}>
        <Project 
            url="https://github.com/omerme13/Calorie-Tracker" 
            imgSrc={food}
            name="Calorie Tracker"
        >
        HTML, CSS & JS    
        </Project>
        <Project
            url="https://github.com/omerme13/Calorie-Tracker"
            imgSrc={food}
            name="Calorie Tracker"
        >
            HTML, CSS & JS
        </Project>
        <Project
            url="https://github.com/omerme13/Calorie-Tracker"
            imgSrc={food}
            name="Calorie Tracker"
        >
            HTML, CSS & JS
        </Project>

    </div>
)

export default projects;