import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './pages/public/home/Home'
import Login from './containers/private/Login'
import Signup from './containers/public/Signup'

import PLayout from './layout/PLayout'
import PHome from './pages/private/home/Home'

import Product from './containers/private/Product'

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

            <RouteWithLayout path='/phome' layout={(props) => <PLayout {...props} 
            />} component={PHome} />
            <RouteWithLayout path='/prod/novo' layout={(props) => <PLayout {...props} 
            />} component={Product} />

            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/criar"} component={Signup} />
            <Redirect to="/home" />
          </Switch>
        </Router>
    )
}