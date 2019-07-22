import React from 'react';
import classes from './Work.css';
import Projects from './Projects/Projects';

const work = () => (
    <section className={classes.work}>
        <h2>check out my work</h2>
        <Projects />
    </section>
)

export default work;