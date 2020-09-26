import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import './App.css';

import Auth  from './components/auth';
import Navigation from './components/navigation';
import Home from './components/home'
import Movie from './components/card/Movie'
import Signup from'./components/auth/Signup'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/signin/:id" component={Auth} />
          <Route exact path="/signup" component={Signup}/>
        </BrowserRouter>
      </div>
    );
  
  }
}

export default App;
