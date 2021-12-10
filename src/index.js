import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductsDetail from './components/ProductsDetail';
import CategoryList from './components/CategoryList';
import Error from './components/Error';
import Header from './components/Header';
import CompanyList from './components/CompanyList';
import reportWebVitals from './reportWebVitals';
import Formulario from './components/Formulario';
import Success from './components/Success';
import TyC from './components/TyC';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/productos" component={ProductList} />
      <Route exact path="/categorias" component={CategoryList} />
      <Route exact path="/empresas" component={CompanyList} />
      <Route exact path="/formulario:id" component={Formulario} />
      <Route exact path="/tyc" component={TyC} />
      <Route exact path="/producto=:id" component={ProductsDetail} />
      <Route exact path="/success" component={Success} />
      <Route path="*" component={Error} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();