import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/home/Home'

function RouteWithLayout({layout, component, ...rest}){
    return (
      <Route exact {...rest} render={(props) =>
        React.createElement( layout, props, React.createElement(component, props)) 
      }/>
    );
}

export default function Routes() {
    return(
        <Router>
          <Switch> 
            <RouteWithLayout path='/home' layout={(props) => <Layout {...props} 
            />} component={Home} />


            <Redirect to="/home" />
          </Switch>
        </Router>
    )
}