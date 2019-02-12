import React, { Component } from 'react';
import './App.scss';
import Header from '../components/templates/Header';
import Footer from '../components/templates/Footer';
import RouteController from '../RouteController';

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
