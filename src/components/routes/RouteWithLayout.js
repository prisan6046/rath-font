import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const RouteWithLayout = ({layout, component, ...rest}) =>{
    return (
      <Route {...rest} render={(props) =>
        React.createElement( layout, props, React.createElement(component, props))
      }/>
    );
}

export default RouteWithLayout;