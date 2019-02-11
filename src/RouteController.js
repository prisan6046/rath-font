import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/profile/Profile';
import Home from './components/home/Home';


class RouteController extends Component{
    render(){
        return(
            <div className="RouteController">                
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>           
            </div>
        );
    }
}

export default RouteController; 