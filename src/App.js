import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Section/>
      </Router>
    </div>
  );
}

export default App;
