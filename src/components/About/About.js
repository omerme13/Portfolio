import React from 'react';
import classes from './About.css';

const about = () => (
    <section className={classes.about}>
        <h2>A LITTLE BIT ABOUT ME</h2>
        <div className={classes.content}>
            <div className={classes.bio}> 
                <p>
                    My name is Omer Menachem and I'm a web developer and a programmer.
                    I'm currently live in Rosh Haayin Israel.
                    I have a B.Sc in industial Engineering from the Open University Of Israel.
                </p>
                <p>When i was a student i discover the wonderful world of web development.
                    I explored and experimented in this field ever since.
                </p>
            </div>
            <div className={classes.skills}>
           
            </div>
        </div>
    </section>
)

export default about;