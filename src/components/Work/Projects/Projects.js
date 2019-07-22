import React from 'react';

import classes from './Projects.css';
import Project from './Project/Project';
import food from '../../../assets/img/food.jpg';
import todo from '../../../assets/img/todo.jpg';
import books from '../../../assets/img/books.jpg';
import snow from '../../../assets/img/snow.jpg';
import burger from '../../../assets/img/burger.jpg';

const projects = () => (
    <div className={classes.projects}>
        <Project 
            url="https://omer-todo-list.netlify.com/" 
            gitUrl="https://github.com/omerme13/Task-List/"             
            imgSrc={todo}
            name="Task List"
        >
            HTML, CSS & JS    
        </Project>
        <Project
            url="https://omer-calorie-tracker.netlify.com/"
            gitUrl="https://github.com/omerme13/Calorie-Tracker/"             
            imgSrc={food}
            name="Calorie Tracker"
        >
            HTML, CSS & JS
        </Project>
        <Project
            url="https://omer-burger-builder.netlify.com/"
            gitUrl="https://github.com/omerme13/burger-builder/"             
            imgSrc={burger}
            name="Burger Builder"
        >
            React, Redux, Node & PostgreSQL
        </Project>
        <Project 
            url="https://omer-booklist.netlify.com/" 
            gitUrl="https://github.com/omerme13/Booklist/"             
            imgSrc={books}
            name="Book List"
        >
        HTML, CSS & JS    
        </Project>
        <Project
            url="https://omer-weather.netlify.com/"
            gitUrl="https://github.com/omerme13/Weather/"             
            imgSrc={snow}
            name="Weather App"
        >
            HTML, CSS & JS
        </Project>
    </div>
)

export default projects;