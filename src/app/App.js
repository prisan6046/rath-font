import React, { Component } from 'react';
import './App.scss';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import RouteController from '../RouteController';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from '../pages/login/SignIn';
import SignUp from '../pages/login/SignUp';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <RouteController />                
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App;
