import React from 'react';
import classes from './About.css';

const about = () => (
    <section className={classes.about}>
        <h2>a little bit about me</h2>
        <div className={classes.content}>
                <p>
                    My name is Omer Menachem and I'm a web developer and a programmer.
                    I live in Rosh Haayin Israel.
                    I have a B.Sc in industrial Engineering from the Open University Of Israel.
                </p>
                <p>When I was a student I have discovered the wonderful world of web development.
                    I explored, learned and experimented in this field ever since.
                </p>
                <p>
                    I am currently seeking a job as a Front End / Full Stack developer.
                    I wish to find the right place, thrive and grow along with it.  
                </p>
            <div className={classes.skills}>
           
            </div>
        </div>
    </section>
)

export default about;