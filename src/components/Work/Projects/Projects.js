import React from 'react';

import classes from './Projects.css';
import Project from './Project/Project';
import food from '../../../assets/img/food.jpg';
import todo from '../../../assets/img/todo.jpg';
import books from '../../../assets/img/books.jpg';
import b from '../../../assets/img/background.jpg';
import snow from '../../../assets/img/snow.jpg';
import burger from '../../../assets/img/burger.jpg';

const projects = () => (
    <div className={classes.projects}>
        <Project 
            url="https://github.com/omerme13/Task-List" 
            imgSrc={todo}
            name="Task List"
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
            url="https://github.com/omerme13/Burger-Builder"
            imgSrc={burger}
            name="Burger Builder"
        >
            React & Redux
        </Project>
        <Project 
            url="https://github.com/omerme13/Booklist" 
            imgSrc={books}
            name="Book List"
        >
        HTML, CSS & JS    
        </Project>
        <Project
            url="https://github.com/omerme13/Weather"
            imgSrc={snow}
            name="Weather App"
        >
            HTML, CSS & JS
        </Project>
    </div>
)

export default projects;