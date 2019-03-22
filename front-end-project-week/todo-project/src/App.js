import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NoteContainer from './NoteContainer'
import Authentication from './Authentication/Authenticate'
import './App.css';

class App extends Component {
  
  render() {
    return (
        <div className="App">
            <Route exact path='/' component={NoteContainer} />
        </div>
    );
  }
}

export default Authentication(App);


