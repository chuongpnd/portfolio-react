import './App.css';

import { Route, Switch } from 'react-router-dom';

import Contact from './components/Contact';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import React from 'react';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
