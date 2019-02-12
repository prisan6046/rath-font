import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';


class RouteController extends Component{
    render(){
        return(
            <div className="RouteController">                
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={Add} />
                </Switch>           
            </div>
        );
    }
}

export default RouteController; 