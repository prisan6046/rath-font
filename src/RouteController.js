import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Add from './pages/Add';
import SignIn from './pages/login/SignIn';
import SignUp from './pages/login/SignUp';
import Logout from './pages/login/logout';
import Header from './components/templates/Header';


const NotFoundPage = () => <div>
    <section className="main-block">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <center><font color="red" size="20">ไม่พบหน้า 404</font></center>
                </div>  
            </div>
        </div>
    </section>
</div>


class RouteController extends Component{

    render(){
        const DefaultLayout = ({children}) => (
            <div className="DefaultLayout">
                <Header/>
                {children}
            </div>
        );
        return(
            <div>
                <Switch>
                <Route exact path="/" component={SignIn} />       
                <Route path="/signin" render={() => <SignIn/>} />
                <Route path="/signup" render={() => <SignUp/>} />  
                <DefaultLayout>
                    <Switch wrapperComponent={Header}>             
                        <Route path="/home" component={Home} />
                        <Route path="/add" component={Add} />   
                        <Route path="/logout" component={Logout} />                                                                   
                    </Switch>                
                </DefaultLayout>    
                <Route component={NotFoundPage} />      
                </Switch>      
            </div>
        );
    }
}

export default RouteController; 