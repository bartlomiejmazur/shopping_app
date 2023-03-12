import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Section from "./components/Section";
import AppProvider from "./components/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Router>
          <Header />

          <Section />
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
