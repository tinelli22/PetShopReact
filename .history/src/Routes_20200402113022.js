import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom'
import Auth from './Auth'

import Layout from './containers/Layout'
import Home from './pages/public/home/Home'
import Login from './containers/public/Login'
import Signup from './containers/public/Signup'
import Product from './containers/private/Product'
import Products from './containers/private/Products'
import Store from './containers/private/Store'
import EditAccount from './containers/private/EditAccount'

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

            <RouteWithLayout path='/editar' layout={(props) => <Layout {...props} 
            />} component={EditAccount} />

            <RouteWithLayout path='/prod/novo' layout={(props) => <Layout {...props} 
            />} component={Product} />

            <RouteWithLayout path='/prod/:id' layout={(props) => <Layout {...props} 
            />} component={Product} />

            <RouteWithLayout path='/loja' layout={(props) => <Layout {...props} 
            />} component={Store} />

            <RouteWithLayout path='/login' layout={(props) => <Layout {...props} 
            />} component={Login} />

            <RouteWithLayout path='/prods' layout={(props) => <Layout {...props} 
            />} component={Products} />

            <RouteWithLayout path='/criar' layout={(props) => <Layout {...props} 
            />} component={Signup} />

            <Redirect to="/home" />
          </Switch>
        </Router>
    )
}