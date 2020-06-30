import React, { useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import './App.scss';

import Home from './components/Home';
import Math from './components/Math';
import Frontend from './components/Frontend';
import Portfolio from './components/Portfolio';
import Private from './components/Private';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Main() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
          
      <div>
        <ul className="navbar">
          <li className="un">
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li className="un">
            <NavLink to="/math">Math</NavLink>
          </li>
          <li className="un">
            <NavLink to="/frontend">Frontend</NavLink>
          </li>
          <li className="un">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="un">
            <NavLink to="/private">Private</NavLink>
          </li>
        </ul>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/math">
            <Math />
          </Route>
          <Route path="/frontend">
            <Frontend />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/private">
            <Private />
          </Route>
        </AnimatedSwitch>
      </div>
    
    </div>
    </Router>
  );
}