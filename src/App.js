import  React, { createContext, useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser]= useState({});

  return (
    <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h2>email: {loggedInUser.email}</h2>
      <Router>
        <Header></Header>
        <Switch>
              <Route path = "/shop">
                <Shop></Shop>
              </Route>
              <Route path = "/review">
                <Review></Review>
              </Route>
              <Route path = '/inventory'>
                <Inventory></Inventory>
              </Route>
              <PrivateRoute path = '/shipment'>
                <Shipment></Shipment>
              </PrivateRoute>
              <Route path = '/login'>
                <Login></Login>
              </Route>
              <Route exact path = '/'>
                <Shop></Shop>
              </Route>
              <Route path = '/product/:key'>
                <ProductDetail></ProductDetail>  
              </Route>
              <Route path = '*'>
                <NotFound></NotFound>
              </Route>
        </Switch> 
      </Router>
    </userContext.Provider>
  );
}

export default App;
