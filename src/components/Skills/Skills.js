import React from 'react';
import classes from './Skills.css';
import SkillItem from './SkillItem/SkillItem';

const skills = () => (
    <section className={classes.skills}>
        <h2>SKILLS THAT I HAVE</h2>
        <p>Here are some </p>
        <div className={classes.wrapper}>
            <SkillItem name="HTML & CSS">85%</SkillItem>
            <SkillItem name="JS">75%</SkillItem>
            <SkillItem name="React">65%</SkillItem>
            <SkillItem name="Redux">55%</SkillItem>
            <SkillItem name="Node & Express">50%</SkillItem>
            <SkillItem name="SQL">75%</SkillItem>
        </div>
    </section>
)

export default skills;