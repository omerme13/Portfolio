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
            imgSrc={todo}
            name="Task List"
        >
            HTML, CSS & JS    
        </Project>
        <Project
            url="https://omer-calorie-tracker.netlify.com/"
            imgSrc={food}
            name="Calorie Tracker"
        >
            HTML, CSS & JS
        </Project>
        <Project
            url="https://burger-builder-2368d.firebaseapp.com/"
            imgSrc={burger}
            name="Burger Builder"
        >
            React, Redux & Node
        </Project>
        <Project 
            url="https://omer-booklist.netlify.com/" 
            imgSrc={books}
            name="Book List"
        >
        HTML, CSS & JS    
        </Project>
        <Project
            url="https://omer-weather.netlify.com/"
            imgSrc={snow}
            name="Weather App"
        >
            HTML, CSS & JS
        </Project>
    </div>
)

export default projects;