import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';


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
                    <AnimatedRoute
                        path="/"
                        exact
                        component={Home}
                        atEnter={{ opc: 0 }}
                        atLeave={{ opc: 0 }}
                        atActive={{ opc: 1 }}
                        mapStyles={(styles) => ({
                            opacity: styles.opc
                        })}
                    />
                    <AnimatedRoute
                        path="/work"
                        component={Work}
                        atEnter={{ opc: 0 }}
                        atLeave={{ opc: 0 }}
                        atActive={{ opc: 1 }}
                        mapStyles={(styles) => ({
                            opacity: styles.opc
                        })}
                    />
                    <AnimatedRoute
                        path="/about"
                        component={About}
                        atEnter={{ opc: 0 }}
                        atLeave={{ opc: 0 }}
                        atActive={{ opc: 1 }}
                        mapStyles={(styles) => ({
                            opacity: styles.opc
                        })}
                    />
                    <AnimatedRoute
                        path="/contact"
                        component={Contact}
                        atEnter={{ offset: -100, opc: 0}}
                        atLeave={{ offset: -100, opc: 0 }}
                        atActive={{ offset: 0, opc: 1}}
                        mapStyles={(styles) => ({
                            transform: `translateX(${styles.offset}%)`,
                            opacity: styles.opc
                        })}
                    />
                </Layout>
            </div>
        );
    }
}

export default Page;

