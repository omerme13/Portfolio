import React, { Component } from 'react';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.changeColorHandler);
    }
    
    state = {
        isSideDrawerOpen: false,
        toolbarColor: 'transparent'
    }

    toggleSideDrawerHandler = () => {
        this.setState({isSideDrawerOpen: !this.state.isSideDrawerOpen});
    }

    changeColorHandler = () => {
        if (window.pageYOffset > 50) {
            this.setState({toolbarColor: 'rgb(25,25,25)'});
        } else /*if (window.pageYOffset < 50)*/{
            this.setState({toolbarColor: 'transparent'});
        }
    }


    render() {
        return (
            <>
                <div>
                    <Toolbar 
                        open={this.toggleSideDrawerHandler}
                        color={this.state.toolbarColor}
                        changeColor={this.changeColorHandler}
                    />
                    <SideDrawer 
                        show={this.state.isSideDrawerOpen} 
                        close={this.toggleSideDrawerHandler}
                    />
                </div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;
