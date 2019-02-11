import React, { Component } from 'react';
import './App.scss';
import Header from './layouts/Header';
import Main from './template/Main';
import Footer from './layouts/Footer';
import RouteController from '../../RouteController';

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
