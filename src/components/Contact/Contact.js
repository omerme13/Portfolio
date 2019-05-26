import React, { Component } from 'react';
import classes from './Contact.css';
import Icon from '../UI/Icon/Icon';

class Contact extends Component{

    state = {
        isMailShown: false,
        isNumberShown: false,
        isMailIconShown: true,
        isPhoneIconShown: true
    }

    showNumberHandler = () => {
        this.setState({isNumberShown: true});
    }

    showMailHandler = () => {
        this.setState({isMailShown: true});
    }

    render() {
        return(
            <section className={classes.contact}>
                <h2>ways you can reach me</h2>
                <Icon 
                    name="call" 
                    className={`${classes.icons} ${this.state.isNumberShown ? classes.phoneShown : classes.phone}`} 
                    clicked={this.showNumberHandler} 
                />
                <span style={{display: this.state.isNumberShown ? 'block' : 'none'}}>
                    <h4>054-9146602</h4>
                </span>
        
                <Icon 
                    name="mail" 
                    className={`${classes.icons} ${this.state.isMailShown ? classes.mailShown : classes.mail}`} 
                    clicked={this.showMailHandler} 
                />
                <span style={{display: this.state.isMailShown ? 'block' : 'none'}}>
                    <h4>omerme13@gmail.com</h4>
                </span>
        
                <Icon 
                    name="logo-github" 
                    className={`${classes.icons} ${classes.github}`}
                    link='https://github.com/omerme13'
                />
                <Icon 
                    name="logo-facebook" 
                    className={`${classes.icons} ${classes.facebook}`} 
                    link='https://www.facebook.com/omer.menachem.7'
        
                />
                <Icon 
                    name="logo-linkedin" 
                    className={`${classes.icons} ${classes.linkedin}`} 
                    link='https://www.linkedin.com/in/omer-menachem-035b3b161/'
                />
                <p>I will be happy to hear from you!</p>

            </section>
        );
    };


}

export default Contact;