import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import Header from './components/templates/Header';


class RouteController extends Component{
    render(){
        return(
            <div className="RouteController">                                
                <Switch>
                    <Route exact path="/" component={SignIn} />                    
                    <Route path="/home" component={Home} />
                    <Route path="/add" component={Add} />

                    <Route path="/signin" render={() => <SignIn/>} />
                    <Route path="/signup" component={SignUp} />                                                
                </Switch>                
            </div>
        );
    }
}

export default RouteController; 