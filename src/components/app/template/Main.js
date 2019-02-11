import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from '../../profile/Profile';

class Main extends Component{
    render(){
        return(
            <div className="Main">                
                <Switch>
                    <Route exact path="/" component={Profile} />                
                </Switch>           
            </div>
        );
    }
}

export default Main; 