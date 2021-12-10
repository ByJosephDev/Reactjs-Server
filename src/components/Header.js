import React, { Component } from 'react'

import { Link } from 'react-router-dom';

function Header() {



  return (
    <header id="header">
      <div class="container-fluid">
        <div id="logo" class="pull-left">
          <h1><a href="/">Helloworld</a></h1>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li >
              <Link to="/">Inicio</Link>
            </li>
            <li >
              <Link to="/productos">Productos</Link>
            </li>
            <li >
              <Link to="/categorias">categorias</Link>
            </li>
            <li>
              <Link to="/empresas">Empresas</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

