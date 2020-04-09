import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'
import Auth from './Auth'

import Layout from './containers/Layout'
import Home from './pages/public/home/Home'
import Login from './containers/public/Login'
import Signup from './containers/public/Signup'

import PHome from './containers/private/PHome'
import Product from './containers/private/Product'

function RouteWithLayout({layout, component, ...rest}){

    return (
      <Route exact {...rest} render={(props) =>
        React.createElement( layout, props, React.createElement(component, props)) 
      }/>
    );
}

function PrivateRoute({ layout, component, ...rest }) {
  return(
    <>
      {
        Auth.getAuth() ? <RouteWithLayout layout={layout} component={component} {...rest} />
        : <Redirect to={'/login'} />
      }
    </>
  )
}

export default function Routes() {
    return(
        <Router>
          <Switch> 
            <RouteWithLayout path='/home' layout={(props) => <Layout {...props} 
            />} component={Home} />

            <PrivateRoute path='/prod/novo' layout={(props) => <Layout {...props} 
            />} component={Product} />
            <PrivateRoute path='/phome' layout={(props) => <Layout {...props} 
            />} component={PHome} />

            <RouteWithLayout path='/login' layout={(props) => <Layout {...props} 
            />} component={Login} />

            <RouteWithLayout path='/criar' layout={(props) => <Layout {...props} 
            />} component={Signup} />

            <Redirect to="/home" />
          </Switch>
        </Router>
    )
}