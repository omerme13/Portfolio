import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './Page.css';
import Layout from './Layout/Layout';
import Home from '../components/Home/Home';
import Work from '../components/Work/Work';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';

class Page extends Component {

    render() {
        return (
            <div className={classes.page}>
                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/work" component={Work} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Layout>
            </div>
        );
    }
}

export default Page;
